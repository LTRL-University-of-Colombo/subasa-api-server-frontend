import { useState, useEffect } from "react"
import { Link as ScrollLink } from 'react-scroll'
import { Link } from "react-router-dom"
import HamburgerMenu from "./HamburgerMenu"
import { useAuth } from "../Auth/Auth"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isLogged, setIsLogged] = useState<boolean | undefined>(undefined)

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


        const getLoggingState = async() => {
            try {
                const loggingState = await useAuth()
                setIsLogged(loggingState)
            } catch (error) {
                setIsLogged(false)
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
                        <ScrollLink to="section_1-heading" offset={-80} role="button" className="text-primary" smooth>Scroll link</ScrollLink>
                        <ScrollLink to="section_2-heading" offset={-80} role="button" className="text-primary" smooth>Scroll link</ScrollLink>
                        <ScrollLink to="section_3-heading" offset={-80} role="button" className="text-primary" smooth>Scroll link</ScrollLink>
                    </div>
                </div>
                {/* //import hamburger here */}
                {
                    isLogged === undefined ?
                        <></>
                        :
                        <div>
                            {isLogged ? <></> : <Link className="btn btn-link" to="/login" role="button">Login</Link>}
                            {isLogged ? <HamburgerMenu /> : <Link className="btn btn-primary" to="/register" role="button">sign in</Link>}
                        </div>
                }
            </nav>
        </>
    )
}

export default Navbar