/*
not coded with best practices because i have complete this
future developers(you) welcome to do it. Hail hydra.
*/


import { useEffect, useState } from "react"
import { AccessRequestData } from "../Api/Interfaces"
import { approveRequest, rejectRequest, getRequests } from "../Api/ApiAdmin"

interface RequestInfoHolder {
    skip: number
    loaded: number
    limit: number
    reqData: AccessRequestData[]
}

const AdminRequests = () => {
    const [approved, setApproved] = useState<RequestInfoHolder>({ skip: 0, loaded: 0, limit: 10, reqData: [] })
    const [rejected, setRejected] = useState<RequestInfoHolder>({ skip: 0, loaded: 0, limit: 10, reqData: [] })
    const [pending, setPending] = useState<RequestInfoHolder>({ skip: 0, loaded: 0, limit: 10, reqData: [] })


    const fetchApproved = async () => {
        const resData = await getRequests(
            "approved",
            approved.skip,
            approved.limit
        )
        setApproved((prev) => ({
            skip: prev.skip + resData.length,
            loaded: prev.loaded + resData.length,
            limit: prev.limit,
            reqData: prev.reqData.concat(resData)
        }))
    }

    const fetchRejected = async () => {
        const resData = await getRequests(
            "rejected",
            rejected.skip,
            rejected.limit
        )
        setRejected((prev) => ({
            skip: prev.skip + resData.length,
            loaded: prev.loaded + resData.length,
            limit: prev.limit,
            reqData: prev.reqData.concat(resData)
        }))
    }

    const fetchPending = async () => {
        console.log("skip,limit:", pending.skip, pending.limit)
        const resData = await getRequests(
            "pending",
            pending.skip,
            pending.limit
        )
        console.log("resdata length", resData.length)
        setPending((prev) => ({
            skip: prev.skip + resData.length,
            loaded: prev.loaded + resData.length,
            limit: prev.limit,
            reqData: prev.reqData.concat(resData)
        }))
    }

    const refreshRejected = async () => {
        const resData = await getRequests(
            "rejected",
            0,
            rejected.loaded
        )
        setRejected((prev) => ({
            skip: prev.skip,
            loaded: prev.loaded,
            limit: prev.limit,
            reqData: resData
        }))
    }

    const refreshApproved = async () => {
        const resData = await getRequests(
            "approved",
            0,
            rejected.loaded
        )
        setApproved((prev) => ({
            skip: prev.skip,
            loaded: prev.loaded,
            limit: prev.limit,
            reqData: resData
        }))
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleString();
    }

    const handleApprove = async (userId: number, serviceId: number, elementId: string) => {
        const tableRowElement = document.getElementById(elementId)
        if (tableRowElement) {
            const children = tableRowElement.children;
            for (let i = 0; i < children.length; i++) {
                children[i].classList.add("disabled");
            }
        }
        const response = await approveRequest(userId, serviceId)
        if (response && tableRowElement)
            tableRowElement.innerHTML = "Approved"
        await refreshApproved()
    }


    const handleReject = async (userId: number, serviceId: number, elementId: string) => {
        const tableRowElement = document.getElementById(elementId)
        if (tableRowElement) {
            const children = tableRowElement.children;
            for (let i = 0; i < children.length; i++) {
                children[i].classList.add("disabled");
            }
        }
        const response = await rejectRequest(userId, serviceId)
        if (response && tableRowElement)
            tableRowElement.innerHTML = "Rejected"
        await refreshRejected()
    }

    useEffect(() => {
        fetchApproved()
        fetchPending()
        fetchRejected()
    }, [])
    return (
        <>
            <h2>Pending Requests</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">UserName</th>
                        <th scope="col">Api Service</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pending.reqData.map((req, index) => (
                            <tr key={index}>
                                <td>{req.username}</td>
                                <td>{req.api_service_name}</td>
                                <td className="d-flex gap-2" id={`${req.user_id}-${req.api_service_id}`}>
                                    <button
                                        className="btn btn-success btn-sm"
                                        onClick={() => { handleApprove(req.user_id, req.api_service_id, `${req.user_id}-${req.api_service_id}`) }}
                                    >
                                        Approve
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => { handleReject(req.user_id, req.api_service_id, `${req.user_id}-${req.api_service_id}`) }}
                                    >
                                        Reject
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="d-grid"><button className="btn btn-sm" onClick={fetchPending}>more</button></div>

            <h2 className="mt-5">Accepted Requests</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">UserName</th>
                        <th scope="col">Api Service</th>
                        <th scope="col">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        approved.reqData.map((req, index) => (
                            <tr key={index}>
                                <td>{req.username}</td>
                                <td>{req.api_service_name}</td>
                                <td>{formatDate(req.created_at)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="d-grid"><button className="btn btn-sm" onClick={fetchApproved}>more</button></div>

            <h2 className="mt-5">Rejected Requests</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">UserName</th>
                        <th scope="col">Api Service</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rejected.reqData.map((req, index) => (
                            <tr key={index}>
                                <td>{req.username}</td>
                                <td>{req.api_service_name}</td>
                                <td>{formatDate(req.created_at)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="d-grid"><button className="btn btn-sm" onClick={fetchRejected}>more</button></div>
        </>
    )
}

export default AdminRequests
