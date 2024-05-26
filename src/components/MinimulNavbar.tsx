import HamburgerMenu from "./HamburgerMenu"

const MinimulNavbar = () => {
    return (
        <>
            <nav style={{ height: "64px", zIndex: "100" }} className={`container-fluid d-flex align-items-center justify-content-between px-4 bg-secondary`}>
                <div className="d-flex align-items-center">
                    <div><img src={`src/assets/subasa_new_white.png`} alt="" style={{ height: "60px" }} /></div>
                </div>
                {/* // import hamburger here */}
                <HamburgerMenu />
            </nav>
        </>
    )
}

export default MinimulNavbar
