interface Props {
  hidden: boolean
}

const FloatingCard = (props: Props) => {

  const closewindow = ()=>{
    const element = document.getElementById('hidder')
    if(element){
      element.classList.remove("d-none")
    }
  }

  return (
    <>
      <div className={`vh-100 vw-100 position-absolute top-0 start-0 d-flex align-items-center justify-content-center ${props.hidden ? 'd-none' : ''}`} style={{ backgroundColor: "rgba(255,255,255,0.7)", zIndex: 500 }} id="hidder">
        <div className="card text-center" style={{ width: "380px", minHeight: "300px" }}>
          <h5 className="card-header">Featured <div className="close-button position-absolute" onClick={closewindow}>✕</div></h5>
          <div className="card-body p-3 d-flex flex-column justify-content-center">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as dsads dasdas dasdas a natural lead-in to additional content.</p>
          </div>
          <div className="d-grid px-5 mb-3">
            <button className="btn btn-primary">Go somewhere</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default FloatingCard
