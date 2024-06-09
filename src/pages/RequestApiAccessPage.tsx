// import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getServiceByServiceId } from '../Api/ApiService'
import { ApiServiceData } from '../Api/Interfaces'
import PageLoadSpinner from '../components/PageLoadSpinner'

const RequestApiAccessPage = () => {
    const params = useParams()
    const apiId = Number(params.id)
    if (isNaN(apiId)) {
        throw new Error("Invalid ID")
    }
    console.log("param id: ", apiId)

    // hooks to hold service info
    const [isService, setIsService] = useState<boolean>(true)
    const [serviceInfo, setServiceInfo] = useState<ApiServiceData>({} as ApiServiceData)

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
            <PageLoadSpinner/>
            <div className='container'>
                <div className="card mt-5 p-4">
                    <div className="alert alert-primary" role="alert">Something went wrong!</div>
                    {/* 'success' for success */}

                    <h3>Apply acces for - {serviceInfo.name}</h3>
                    <div className='mt-4'>
                        <h5>Terms and conditions</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis adipisci assumenda illum voluptatem facere sit soluta quibusdam eius modi earum consectetur, atque, ab a accusamus ex. Ea sit corrupti autem impedit, voluptas minima saepe cumque provident recusandae rerum officia illo iusto eos similique mollitia sed unde? Non, natus minima. Veniam.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis adipisci assumenda illum voluptatem facere sit soluta quibusdam eius modi earum consectetur, atque, ab a accusamus ex. Ea sit corrupti autem impedit, voluptas minima saepe cumque provident recusandae rerum officia illo iusto eos similique mollitia sed unde? Non, natus minima. Veniam.</p>
                        <h6>by applying the service you will approve terms and conditions</h6>
                    </div>
                    <div className='mt-4'>
                        <button className='btn btn-primary disabled'>
                            <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                            {/* <span role="status">Loading...</span> */}
                            Apply for access
                        </button>
                        <button className='btn btn-link'>Cancel and Go back</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RequestApiAccessPage
