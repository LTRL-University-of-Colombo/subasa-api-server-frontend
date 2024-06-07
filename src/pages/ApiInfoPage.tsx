// import { useEffect } from 'react'
import MinimulNavbar from '../components/MinimulNavbar'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getServiceByServiceId } from '../Api/ApiService'
import { ApiServiceData } from '../Api/Interfaces'
import FloatingCard from '../components/FloatingCard'

const ApiInfoPage = () => {
    const params = useParams()
    const apiId = Number(params.id)
    const [temp, settemp] = useState(true)
    if (isNaN(apiId)) {
        throw new Error("Invalid ID")
    }

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
            <FloatingCard hidden={temp} />
            <button onClick={() => { settemp(!temp) }}>dist</button>
            <MinimulNavbar />
            <div className='container'>
                <div className="row">
                    <div className='col-3 d-flex flex-column border p-3 py-3 apiInfoPage-height' id='left-section'>
                        <div>
                            <small className='link' style={{ cursor: "pointer" }}> ⬅ Back to homepage</small>
                        </div>
                        <h5 className='pt-5'>On this page</h5>

                        <ul className='p-4 pt-3 d-grid gap-2 overflowY-auto'>
                            <li className='link-secondary' role='button'>this is it</li>
                            <li className='link-secondary' role='button'>this is it</li>
                            <li className='link-primary' role='button'>this is it</li>
                        </ul>

                        <div className="pt-3 d-grid mt-auto">
                            <button className='btn btn-primary'>Apply for access</button>
                        </div>
                    </div>

                    <div className='col border border-start-0 px-4 overflowY-auto apiInfoPage-height' id='right-section'>
                        <section className='pt-4'>
                            <h2>{serviceInfo.name}</h2>
                            <p>You can test subasa {serviceInfo.name}. Visit <a href="http://stt.subasa.lk">stt.subasa.lk↗</a></p>
                            <button className='btn btn-primary btn-sm'>Apply for access</button>
                        </section>
                        <section className='pt-4'>
                            <h3>Subasa STT API</h3>

                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem rerum expedita? Voluptatibus voluptas, earum a et ab, maxime eos impedit cumque sit ea deserunt, harum ipsa! Exercitationem illum, hic soluta magni corrupti fuga eius quisquam dolorem optio laudantium quibusdam tempora asperiores architecto esse sequi reiciendis! Ipsa veritatis incidunt suscipit.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem rerum expedita? Voluptatibus voluptas, earum a et ab, maxime eos impedit cumque sit ea deserunt, harum ipsa! Exercitationem illum, hic soluta magni corrupti fuga eius quisquam dolorem optio laudantium quibusdam tempora asperiores architecto esse sequi reiciendis! Ipsa veritatis incidunt suscipit.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem rerum expedita? Voluptatibus voluptas, earum a et ab, maxime eos impedit cumque sit ea deserunt, harum ipsa! Exercitationem illum, hic soluta magni corrupti fuga eius quisquam dolorem optio laudantium quibusdam tempora asperiores architecto esse sequi reiciendis! Ipsa veritatis incidunt suscipit.</p>
                        </section>

                        <section className='pt-4'>
                            <h3>Subasa STT API</h3>

                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem rerum expedita? Voluptatibus voluptas, earum a et ab, maxime eos impedit cumque sit ea deserunt, harum ipsa! Exercitationem illum, hic soluta magni corrupti fuga eius quisquam dolorem optio laudantium quibusdam tempora asperiores architecto esse sequi reiciendis! Ipsa veritatis incidunt suscipit.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem rerum expedita? Voluptatibus voluptas, earum a et ab, maxime eos impedit cumque sit ea deserunt, harum ipsa! Exercitationem illum, hic soluta magni corrupti fuga eius quisquam dolorem optio laudantium quibusdam tempora asperiores architecto esse sequi reiciendis! Ipsa veritatis incidunt suscipit.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem rerum expedita? Voluptatibus voluptas, earum a et ab, maxime eos impedit cumque sit ea deserunt, harum ipsa! Exercitationem illum, hic soluta magni corrupti fuga eius quisquam dolorem optio laudantium quibusdam tempora asperiores architecto esse sequi reiciendis! Ipsa veritatis incidunt suscipit.</p>
                        </section>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ApiInfoPage
