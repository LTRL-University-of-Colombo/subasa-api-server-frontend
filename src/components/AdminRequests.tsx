const AdminRequests = () => {


    return (
        <>
            <div className="d-flex">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">UserName</th>
                            <th scope="col">Api Service</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark Zuck</td>
                            <td>STT</td>
                            <td className="d-flex gap-2">
                                <button className="btn btn-success btn-sm">Approve</button>
                                <button className="btn btn-danger btn-sm">Reject</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Mark</td>
                            <td>STT</td>
                            <td className="d-flex gap-2">
                                <button className="btn btn-success btn-sm">Approve</button>
                                <button className="btn btn-danger btn-sm">Reject</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Mark</td>
                            <td>STT</td>
                            <td className="d-flex gap-2">
                                <button className="btn btn-success btn-sm">Approve</button>
                                <button className="btn btn-danger btn-sm">Reject</button>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </>
    )
}

export default AdminRequests
