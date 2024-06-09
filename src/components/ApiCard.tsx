import { Link } from "react-router-dom"
import { ApiServiceData } from "../Api/Interfaces"

interface Props {
    serviceData: ApiServiceData
}

const ApiCard = ({serviceData}: Props) => {
    return (
        <>
            <div className="card">
                <h5 className="card-header">{serviceData.name}</h5>
                <div className="card-body">
                    <img src="src/assets/homepage_cover.png" className="card-img" alt="..." />
                    <div className="mt-3"><small className="card-text">{serviceData.description}</small></div>
                    <div className="d-grid mt-3" >
                        <Link className="btn btn-primary btn-sm" to={`/api/${serviceData.id}`} type="button">Read More</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApiCard