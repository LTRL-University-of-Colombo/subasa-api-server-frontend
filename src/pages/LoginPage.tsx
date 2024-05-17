const LoginPage = () => {
    return (
        <>
            <div className="row vw-100 vh-100">
                <div className="col d-flex justify-content-center align-items-center">
                    <h1>Login to SUBASA</h1>
                </div>
                <div className="col d-flex justify-content-center align-items-center bg-secondary">
                    <form className="card p-4" style={{ width: "300px" }}>
                    <h2>Login</h2>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage