// import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getServiceByServiceId } from '../Api/ApiService'
import { ApiServiceData, Alert } from '../Api/Interfaces'
import PageLoadSpinner from '../components/PageLoadSpinner'

const RequestApiAccessPage = () => {
    const params = useParams()
    const apiId = Number(params.id)
    if (isNaN(apiId)) {
        throw new Error("Invalid ID")
    }

    // hooks to hold service info
    const [isService, setIsService] = useState<boolean>(true)
    const [serviceInfo, setServiceInfo] = useState<ApiServiceData>({} as ApiServiceData)
    const [alertState, setAlertState] = useState<Alert | undefined>(undefined)
    const [waiting, setWaiting] = useState<boolean>(false)

    useEffect(() => {
        // const rightSection = document.getElementById("right-section")
        // rightSection?.addEventListener("scroll", () => {

        // })
        const loadApiserviceData = async (id: number) => {
            const service = await getServiceByServiceId(id)
            if (!service) {
                setIsService(false)
            }
            else {
                setIsService(true)
                setServiceInfo(service)
            }
        }
        loadApiserviceData(apiId)
        console.log("is service: ", isService)
        console.log("service info: ", serviceInfo.description)

    }, [])

    return (
        <>
            <PageLoadSpinner />
            <div className='container'>
                <div className="card mt-5 p-4">
                    {
                        isService ?
                            //service not founcd
                            <>
                                {alertState ? <div className={`alert alert-${alertState.type}`} role="alert">{alertState.message}</div> : <></>}

                                <h3>Apply acces for - {serviceInfo.name}</h3>
                                <div className='mt-4'>
                                    <h5>Terms and conditions</h5>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis adipisci assumenda illum voluptatem facere sit soluta quibusdam eius modi earum consectetur, atque, ab a accusamus ex. Ea sit corrupti autem impedit, voluptas minima saepe cumque provident recusandae rerum officia illo iusto eos similique mollitia sed unde? Non, natus minima. Veniam.</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis adipisci assumenda illum voluptatem facere sit soluta quibusdam eius modi earum consectetur, atque, ab a accusamus ex. Ea sit corrupti autem impedit, voluptas minima saepe cumque provident recusandae rerum officia illo iusto eos similique mollitia sed unde? Non, natus minima. Veniam.</p>
                                    <h6>by applying the service you will approve terms and conditions</h6>
                                </div>
                                <div className='mt-4'>
                                    <button className='btn btn-primary' disabled={waiting}>
                                        <span className={`spinner-border spinner-border-sm ${waiting ? "" : "d-none"}`} aria-hidden="true"></span>
                                        Apply for access
                                    </button>
                                    <button className='btn btn-link' onClick={() => { window.history.go(-1); return false; }}>Cancel and Go back</button>
                                </div>
                            </>
                            :
                            //service not founcd
                            <>
                                {/* 'success' for success */}

                                <h3>Apply acces for a Service</h3>
                                <div className="alert alert-danger mt-3" role="alert">Service not found!</div>
                                <div className='mt-2'>
                                    <button className='btn btn-link' onClick={() => { window.history.go(-1); return false; }}>Go back</button>
                                </div>
                            </>
                    }

                </div>
            </div >
        </>
    )
}

export default RequestApiAccessPage
