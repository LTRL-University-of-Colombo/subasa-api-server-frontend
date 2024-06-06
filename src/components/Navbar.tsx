import { useState, useEffect } from "react"
import { Link } from 'react-scroll'
import HamburgerMenu from "./HamburgerMenu"
import { useAuth } from "../Auth/Auth"

const Navbar = async () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isLogged, setIsLogged] = useState(false)

    const loggingState = await useAuth()

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

        // authentication
        setIsLogged(loggingState)
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
                {isLogged ? <HamburgerMenu /> : <Link className="btn btn-primary" to="/login" role="button">sign in</Link>}
            </nav>
        </>
    )
}

export default Navbar