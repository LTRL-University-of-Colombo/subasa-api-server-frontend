const LoginPage = () => {
    return (
        <>
            <div className="row vw-100 vh-100">
                <div className="col d-flex justify-content-center align-items-center">
                    <h1>Login to SUBASA</h1>
                </div>
                <div className="col d-flex justify-content-center align-items-center bg-secondary">
                    <form className="card p-4" style={{ width: "300px" }}>
                        {/* <h2>Login</h2> */}
                        <div className="btn btn-outline-dark btn-sm d-flex align-items-center justify-content-center gap-2">
                            <img src="src/assets/google_logo.png" alt="" style={{ height: "30px" }} />
                            Continue with Google
                        </div>
                        <div className="text-center pt-3">or</div>
                        <div className="mb-3 mt-1">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage