import { useEffect, useState } from "react"
import { UserInfo } from "../Api/Interfaces"
import { getUsers, blockUser, unBlockUser } from "../Api/ApiAdmin"

interface UserInfoHolder {
    skip: number
    limit: number
    data: UserInfo[]
}

const AdminUsers = () => {
    const [usersData, setUsersData] = useState<UserInfoHolder>({ skip: 0, limit: 10, data: [] })
    const [waiting, setWaiting] = useState(false)

    const fetchUserData = async () => {
        setWaiting(true)
        const responseData = await getUsers(usersData.limit, usersData.skip)
        if (responseData)
            setUsersData((prev) => ({
                skip: prev.skip + responseData.length,
                limit: prev.limit,
                data: prev.data.concat(responseData)
            }))
        setWaiting(false)
    }

    const handleButtonState = (elementId: string, buttonState: string) => {
        const element = document.getElementById(elementId)
        if (buttonState === 'disabled') {
            if (element)
                element.classList.add('disabled')
        }
        else {
            if (element)
                element.classList.remove('disabled')
        }
    }

    const hableBlock = async (userId: number) => {
        const index = usersData.data.findIndex(user => user.id === userId);

        const elementId = `${userId}-${index}`
        handleButtonState(elementId, "disabled")
        const response = await blockUser(userId)
        if (response) {
            setUsersData((prev) => {
                const newData = [...prev.data]
                newData[index] = { ...newData[index], disabled: true }

                return {
                    ...prev,
                    data: newData
                };
            }
            )
        }
    }

    const handleUnblock = async (userId: number) => {
        const index = usersData.data.findIndex(user => user.id === userId);

        const elementId = `${userId}-${index}`
        handleButtonState(elementId, "disabled")
        const response = await unBlockUser(userId)
        if (response) {
            setUsersData((prev) => {
                const newData = [...prev.data]
                newData[index] = { ...newData[index], disabled: false }

                return {
                    ...prev,
                    data: newData
                };
            }
            )
        }
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <div>
            <h2>Accepted Requests</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersData.data?.map((user: UserInfo, index) =>
                            <tr key={index}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td className="d-flex gap-2">
                                    {
                                        user.disabled ?
                                            <button
                                                className="btn btn-warning btn-sm"
                                                id={`${user.id}-${index}`}
                                                onClick={() => { handleUnblock(user.id) }}
                                            >
                                                Unblock
                                            </button>
                                            :
                                            <button
                                                className="btn btn-danger btn-sm"
                                                id={`${user.id}-${index}`}
                                                onClick={() => { hableBlock(user.id) }}
                                            >
                                                Block
                                            </button>
                                    }
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <div className="d-grid"><button className="btn btn-sm">more</button></div>

            <h2 className="mt-5">Accepted Requests</h2>
            <table className="table table-hover"></table>
            <div className="d-grid"><button className="btn btn-sm">more</button></div>
        </div>
    )
}

export default AdminUsers
