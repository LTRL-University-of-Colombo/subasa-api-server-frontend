import { useEffect, useState } from "react"
import { UserApiServiceData, UserInfo } from "../Api/Interfaces"
import { blockUser, unBlockUser, getUserById, getServicesByUserId, blockService, unblockService } from "../Api/ApiAdmin"
import { useParams } from "react-router-dom"

const AdminUserInfo = () => {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
    const [waiting, setWaiting] = useState<boolean>(false)
    const [userServices, setUserServices] = useState<UserApiServiceData[]>([])

    const params = useParams()
    const userId = Number(params.id)

    const loadUser = async () => {
        const usr = await getUserById(userId)
        setUserInfo(usr)
    }

    const handleBlockUser = async () => {
        setWaiting(true)
        const response = await blockUser(userId)
        if (response) {
            setUserInfo((prev) => {
                return {
                    ...prev,
                    disabled: true
                } as UserInfo
            })
        }
        setWaiting(false)
    }

    const handleUnblockUser = async () => {
        setWaiting(true)
        const response = await unBlockUser(userId)
        if (response) {
            setUserInfo((prev) => {
                return {
                    ...prev,
                    disabled: false
                } as UserInfo
            })
        }
        setWaiting(false)
    }

    const fetchUserServices = async () => {
        const services = await getServicesByUserId(userId)
        setUserServices(services)
        console.log(services[0].access)
    }

    const blockAccess = async (serviceId: number, buttonId: string) => {
        const btnElement = document.getElementById(buttonId) as HTMLButtonElement
        if (btnElement) {
            btnElement.disabled = true;
        }

        const response = await blockService(userId, serviceId)
        if (response)
            fetchUserServices()

        if (btnElement) {
            btnElement.disabled = false;
        }

    }

    const grantAccess = async (serviceId: number, buttonId: string) => {
        const btnElement = document.getElementById(buttonId) as HTMLButtonElement
        if (btnElement) {
            btnElement.disabled = true;
        }

        const response = await unblockService(userId, serviceId)
        console.log("response is : ", response)
        if (response)
            fetchUserServices()

        if (btnElement) {
            btnElement.disabled = false;
        }
    }

    useEffect(() => {
        loadUser()
        fetchUserServices()
    }, [])

    return (
        <>
            <div className="row">
                <div className="col">
                    <div>
                        <h2 className="mb-0">{userInfo?.username}</h2>
                        <p>{userInfo?.email}</p>
                    </div>
                    <h6 className="mb-0">Status: {userInfo?.disabled ? "Blocked" : "Allowed"}</h6>
                </div>

                <div className="col">
                    <div className="d-flex gap-2">
                        {
                            userInfo?.disabled ?
                                <button className={`btn btn-warning`} disabled={waiting} onClick={handleUnblockUser}>Unblock User</button>
                                :
                                <button className={`btn btn-danger`} disabled={waiting} onClick={handleBlockUser}>Block User</button>
                        }
                    </div>
                </div>
            </div>
            <h4 className="mt-5">Apis</h4>
            {
                userInfo?.disabled ?
                    <div className="alert alert-info">User is blocked. All apis are unavailable.</div>
                    :
                    userServices.length === 0 ?
                        <div className="alert alert-info">No allowed APIs</div>
                        :
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Service name</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userServices.map((service: UserApiServiceData, index) => (
                                        <tr key={index}>
                                            <td>{service.api_service_name}</td>
                                            <td>{service.access ? "available" : "blocked"}</td>
                                            <td>
                                                {
                                                    service.access ?
                                                        <button
                                                            className="btn btn-danger btn-sm"
                                                            id={`btn1-${index}`}
                                                            onClick={() => { blockAccess(service.api_service_id, `btn1-${index}`) }}
                                                        >
                                                            Remove access
                                                        </button>
                                                        :
                                                        <button
                                                            className="btn btn-success btn-sm"
                                                            id={`btn2-${index}`}
                                                            onClick={() => { grantAccess(service.api_service_id, `btn2-${index}`) }}
                                                        >
                                                            Grant access
                                                        </button>
                                                }
                                            </td>
                                        </tr>
                                    ))}

                            </tbody>
                        </table>
            }

            {/* <h4 className="mt-5">Recent Activities</h4>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Service</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2024-06-12</td>
                        <td>22:44</td>
                        <td>STT</td>
                    </tr>
                </tbody>
            </table> */}
        </>
    )
}

export default AdminUserInfo
