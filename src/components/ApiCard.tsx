const ApiCard = () => {
    return (
        <>
            <div className="card">
                <h5 className="card-header">Special title treatment</h5>
                <div className="card-body">
                    <img src="src/assets/homepage_cover.png" className="card-img" alt="..." />
                    <div className="mt-3"><small className="card-text">With supporting text below as a natural lead-in to additional content.</small></div>
                    <div className="d-grid mt-3" >
                        <button className="btn btn-primary btn-sm" type="button">Read More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApiCard