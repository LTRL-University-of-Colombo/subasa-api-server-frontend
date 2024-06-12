const AdminApiInfo = () => {
    return (
        // <div className="d-flex">
        <div className="row">
            <div className="col">
                <div>
                <h2>Subasa STT</h2><button className="btn btn-link ">Edit</button>
                </div>
                <h6>Status: Active</h6>
            </div>

            <div className="col">
                <div className="d-flex gap-2">
                    <button className="btn btn-warning">Deactivate</button>
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default AdminApiInfo
