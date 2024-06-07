import HamburgerMenu from "./HamburgerMenu"
import { useEffect, useState } from "react"
import { useAuth } from "../Auth/Auth"
import { Link } from "react-router-dom"

const MinimulNavbar = () => {
    const [isLogged, setIsLogged] = useState(false)

    useEffect(()=>{
        const getLoggingState = async () => {
            try {
                const loggingState = await useAuth()
                setIsLogged(loggingState)
            } catch (error) {
                console.log(error)
            }
        }
        getLoggingState()
    },[])

    return (
        <>
            <nav style={{ height: "64px", zIndex: "100" }} className={`container-fluid d-flex align-items-center justify-content-between px-4 bg-secondary`}>
                <div className="d-flex align-items-center">
                    <div><img src={`src/assets/subasa_new_white.png`} alt="" style={{ height: "60px" }} /></div>
                </div>
                {/* // import hamburger here */}
                {isLogged ? <HamburgerMenu /> : <Link className="btn btn-primary" to="/login" role="button">sign in</Link>}
            </nav>
        </>
    )
}

export default MinimulNavbar
