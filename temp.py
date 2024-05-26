# app.py
from flask import Flask, request, jsonify, g
import uuid
import hashlib
import time
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///api_usage.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Database models
class User(db.Model):
    id = db.Column(db.String(36), primary_key=True)
    api_key = db.Column(db.String(64), unique=True, nullable=False)

class ApiUsage(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.String(36), db.ForeignKey('user.id'), nullable=False)
    endpoint = db.Column(db.String(255), nullable=False)
    timestamp = db.Column(db.DateTime, nullable=False)

# Initialize the database
with app.app_context():
    db.create_all()

# In-memory storage for demo purposes (use a database in production)
api_keys = {}

# Secret key for generating tokens (use a more secure method in production)
SECRET_KEY = 'your_secret_key'

def generate_api_key():
    return hashlib.sha256(uuid.uuid4().hex.encode()).hexdigest()

def generate_access_token(api_key):
    timestamp = str(time.time())
    token = hashlib.sha256((api_key + timestamp + SECRET_KEY).encode()).hexdigest()
    return token, timestamp

@app.route('/register', methods=['POST'])
def register():
    user_id = str(uuid.uuid4())
    api_key = generate_api_key()
    new_user = User(id=user_id, api_key=api_key)
    db.session.add(new_user)
    db.session.commit()
    api_keys[api_key] = user_id
    return jsonify({'user_id': user_id, 'api_key': api_key})

@app.route('/get_token', methods=['POST'])
def get_token():
    api_key = request.json.get('api_key')
    if api_key in api_keys:
        token, timestamp = generate_access_token(api_key)
        return jsonify({'access_token': token, 'timestamp': timestamp})
    return jsonify({'error': 'Invalid API key'}), 401

@app.route('/data', methods=['GET'])
def get_data():
    token = request.headers.get('Authorization')
    if not token:
        return jsonify({'error': 'Token required'}), 401

    api_key = verify_token(token)
    if not api_key:
        return jsonify({'error': 'Invalid or expired token'}), 401

    user_id = api_keys.get(api_key)
    
    # Track usage
    track_usage(user_id, '/data')
    
    return jsonify({'data': 'Your protected data', 'user_id': user_id})

def verify_token(token):
    parts = token.split('.')
    if len(parts) != 2:
        return None

    token_hash, timestamp = parts
    for api_key in api_keys:
        expected_token, _ = generate_access_token(api_key)
        if expected_token == token_hash:
            return api_key

    return None

def track_usage(user_id, endpoint):
    usage = ApiUsage(user_id=user_id, endpoint=endpoint, timestamp=time.time())
    db.session.add(usage)
    db.session.commit()

if __name__ == '__main__':
    app.run(debug=True)

