const PurchasedApiCard = () => {
    return (
        <>
            <div className="card">
                <h5 className="card-header">Special title treatment</h5>
                <div className="card-body">
                    <img src="src/assets/homepage_cover.png" className="card-img" alt="..." />
                    <div className="mt-3">
                        <small className="d-flex align-items-center gap-3 px-2">
                            <strong>Status:</strong>Active
                        </small>
                        <small className="d-flex align-items-center gap-3 px-2">
                            <strong>Available Until:</strong>2024-12-12
                        </small>
                    </div>
                    <div className="d-grid mt-3" >
                        <button className="btn btn-primary btn-sm" type="button">View Usage</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PurchasedApiCard
