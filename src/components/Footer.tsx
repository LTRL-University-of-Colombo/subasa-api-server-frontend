

const Footer = () => {
  return (
    <footer className="footer bg-dark bg-opacity-75 container-fluid">
      <div className="container">
        <div className="row">
          <div className="col p-5">
            <h1>Contact Us</h1>
            <div>
              <h6>Telephone : +94 11 2158962</h6>
              <h6>Email : ltrl@ucsc.cmb.ac.lk</h6>
            </div>
            <div className="pt-4">
              <h6>Language Technology Research Laboratory
                University of Colombo School of Computing
                35, Reid Avenue
                Colombo 07
                Sri Lanka</h6>
            </div>
            <div className="pt-4">
              <small className="user-select-none">© Language Technology Research Laboratory</small>
            </div>
          </div>
          <div className="col p-5 d-flex justify-content-center align-items-center">
            // this is section 2.  add some content here if needed.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
