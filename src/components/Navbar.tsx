import { useState, useEffect } from "react"
import { Link } from 'react-scroll'
import { Link as RouterLink } from "react-router-dom"
import HamburgerMenu from "./HamburgerMenu"
import { useAuth } from "../Auth/Auth"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isLogged, setIsLogged] = useState(false)

    // const loggingState = await useAuth()
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsScrolled(true)
            }
            else {
                setIsScrolled(false)
            }
        }
        document.addEventListener("scroll", handleScroll)

        const getLoggingState = async () => {
            try {
                const loggingState = await useAuth()
                setIsLogged(loggingState)
            } catch (error) {
                console.log(error)
            }
        }
        getLoggingState()

    }, [])

    return (
        <>
            <nav style={{ height: "64px", zIndex: "100" }} className={`container-fluid position-fixed d-flex align-items-center justify-content-between px-4 ${isScrolled ? 'bg-white border-bottom' : ''}`}>
                <div className="d-flex align-items-center">
                    <div><img src={`src/assets/${isScrolled ? 'subasa_new_black.png' : 'subasa_new_white.png'}`} alt="" style={{ height: "60px" }} /></div>
                    <div className="d-flex gap-5 px-5">
                        <Link to="section_1-heading" offset={-80} role="button" className="text-primary" smooth>Scroll link</Link>
                        <Link to="section_2-heading" offset={-80} role="button" className="text-primary" smooth>Scroll link</Link>
                        <Link to="section_3-heading" offset={-80} role="button" className="text-primary" smooth>Scroll link</Link>
                    </div>
                </div>
                {/* //import hamburger here */}
                <div>
                    {isLogged ? <></> : <RouterLink className="btn btn-link" to="/login" role="button">Login</RouterLink>}
                    {isLogged ? <HamburgerMenu /> : <RouterLink className="btn btn-primary" to="/register" role="button">sign in</RouterLink>}
                </div>
            </nav>
        </>
    )
}

export default Navbar