import { useParams } from "react-router-dom"
import { getServiceByServiceId } from "../Api/ApiService"
import { useEffect, useState } from "react"
import { ApiServiceData } from "../Api/Interfaces"
import { startService, stopService } from "../Api/ApiAdmin"

const AdminApiInfo = () => {
    const params = useParams()
    const apiId = Number(params.id)
    console.log("api id:", apiId)

    const [service, setService] = useState<ApiServiceData | undefined>(undefined)

    const fetchApiData = async () => {
        const apidata = await getServiceByServiceId(apiId)
        console.log("responde is: ", apidata)
        setService(apidata)
    }

    // const fetchApiUsage = async () => {
    // }

    const setButtonDisabled = (buttonId: string, state: boolean) => {
        const buttonElement = document.getElementById(buttonId) as HTMLButtonElement
        if (buttonElement)
            buttonElement.disabled = state
    }

    const handleStartService = async (apiId: number) => {
        setButtonDisabled(`start-${apiId}`, true)
        const response = await startService(apiId)
        if (response) {
            setService((prev) => { return { ...prev, is_active: true } as ApiServiceData }
            )
        }
        setButtonDisabled(`start-${apiId}`, false)
    }


    const handleStopService = async (apiId: number) => {
        setButtonDisabled(`start-${apiId}`, true)
        const response = await stopService(apiId)
        if (response) {
            if (response) {
                setService((prev) => { return { ...prev, is_active: false } as ApiServiceData }
                )
            }
        }
        setButtonDisabled(`start-${apiId}`, false)
    }


    useEffect(() => {
        console.log("use effect called")
        fetchApiData()
    }, [])

    return (
        <>
            <p className="text-secondary" onClick={() => { window.history.go(-1); return false; }} role="button">⬅ Back</p>
            {!service ?
                <div className="alert alert-warning" role="alert">No service found!</div>

                :
                <>
                    <div>
                        <div className="row">
                            <div className="col">
                                <div>
                                    <h2>{service.name}</h2><button className="btn btn-link ">Edit</button>
                                </div>
                                <h6>Status: {service.is_active ? "Running" : "Stopped"}</h6>
                            </div>

                            <div className="col">
                                <div className="d-flex gap-2">
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
                                    <button className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5">
                            <h2>Api Usage</h2>
                            <p>coming soon ...</p>
                        </div>
                    </div>
                </>
            }
        </>
        // </div>
    )
}

export default AdminApiInfo
