import { useEffect, useState } from "react"
import { ApiServiceData } from "../Api/Interfaces"
import { getAllServices } from "../Api/ApiService"
import { startService, stopService } from "../Api/ApiAdmin"
import { Link } from "react-router-dom"

const AdminApi = () => {
    const [services, setServices] = useState<ApiServiceData[]>([])

    const fetchServices = async () => {
        const responseServices = await getAllServices()
        if (responseServices)
            setServices(responseServices)
        else
            setServices([])
    }

    const setButtonDisabled = (buttonId: string, state: boolean) => {
        const buttonElement = document.getElementById(buttonId) as HTMLButtonElement
        if (buttonElement)
            buttonElement.disabled = state
    }

    const handleStartService = async (apiId: number) => {
        setButtonDisabled(`start-${apiId}`, true)
        const response = await startService(apiId)
        if (response) {
            const index = services.findIndex(service => service.id === apiId)
            setServices((prev) => {
                const newData = [...prev]
                newData[index] = { ...newData[index], is_active: true }
                return newData
            })
        }
        setButtonDisabled(`start-${apiId}`, false)
    }


    const handleStopService = async (apiId: number) => {
        setButtonDisabled(`start-${apiId}`, true)
        const response = await stopService(apiId)
        if (response) {
            const index = services.findIndex(response => response.id === apiId)
            setServices((prev) => {
                const newData = [...prev]
                newData[index] = { ...newData[index], is_active: false }
                return newData
            })
        }
        setButtonDisabled(`start-${apiId}`, false)
    }

    useEffect(() => {
        fetchServices()
    }, [])

    return (
        <>
            {services.length === 0 ?
                <>
                    <h2>Api Services</h2>
                    <div className="alert alert-info" role="alert">No service available</div>
                </>
                :
                <>
                    <h2>Api Services</h2>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Service Name</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services.map((service: ApiServiceData, index) => (
                                    <tr key={index}>
                                        <td><Link to={`${service.id}`}>{service.name}</Link></td>
                                        <td>{service.is_active ? "running" : "stopped"}</td>
                                        <td className="d-flex gap-2">
                                            {service.is_active ?
                                                <button
                                                    className="btn btn-danger"
                                                    id={`stop-${service.id}`}
                                                    onClick={() => { handleStopService(service.id) }}
                                                >
                                                    Stop service</button>
                                                :
                                                <button
                                                    className="btn btn-success"
                                                    id={`start-${service.id}`}
                                                    onClick={() => { handleStartService(service.id) }}
                                                >
                                                    Start service</button>
                                            }
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </>
            }
        </>
    )
}

export default AdminApi
