import { Link } from "react-router-dom"
import { ApiServiceData } from "../Api/Interfaces"
// import { string } from "yup"

interface Props {
    serviceData: ApiServiceData
    tempkey?: number | null | undefined
    state?: string //info, blocked, allowed
}

const ApiCard = ({ serviceData, tempkey, state = "info" }: Props) => {
    return (
        <>
            <div className="card" key={tempkey}>
                <h5 className="card-header">{serviceData.name}</h5>
                <div className="card-body">
                    <img src="src/assets/homepage_cover.png" className="card-img" alt="..." />
                    <div className="mt-3"><small className="card-text">{serviceData.description}</small></div>
                    {
                        state === "info" ?
                            <div className="d-grid mt-3" >
                                <Link className="btn btn-primary btn-sm" to={`/api/${serviceData.id}`} type="button">Read More</Link>
                            </div>
                            : <></>
                    }
                    {
                        state === "blocked" ?
                            <div className="d-grid mt-3" >
                                <Link className="btn btn-warning btn-sm" to={`/api/${serviceData.id}`} type="button">Unblock</Link>
                            </div>
                            : <></>
                    }
                    {
                        state === "allowed" ?
                            <div className="d-grid mt-3" >
                                <Link className="btn btn-danger btn-sm" to={`/api/${serviceData.id}`} type="button">Block</Link>
                            </div>
                            : <></>
                    }
                </div>
            </div>
        </>
    )
}

export default ApiCard