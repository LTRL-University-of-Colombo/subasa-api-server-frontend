import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: 'https://your-api-base-url.com',
});

// Request interceptor to add the token to headers
axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

// Response interceptor to handle errors
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            handleTokenExpiration();
        }
        return Promise.reject(error);
    }
);

// handle token expiration
const handleTokenExpiration = () => {
    console.log('Token expired. Redirecting to login...')
    localStorage.removeItem('token')
    window.location.href = '/login'
};

export default axiosInstance
