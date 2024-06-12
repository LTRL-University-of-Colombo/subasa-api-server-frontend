const AdminUsers = () => {
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark Zuck</td>
                        <td>anjunaserasingh@gmail.com</td>
                        <td className="d-flex gap-2">
                            <button className="btn btn-danger btn-sm">Block</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Mark Zuck</td>
                        <td>anjunaserasingh@gmail.com</td>
                        <td className="d-flex gap-2">
                            <button className="btn btn-danger btn-sm">Block</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Mark Zuck</td>
                        <td>anjunaserasingh@gmail.com</td>
                        <td className="d-flex gap-2">
                            <button className="btn btn-danger btn-sm">Block</button>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default AdminUsers
