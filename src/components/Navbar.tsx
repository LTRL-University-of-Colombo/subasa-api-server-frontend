import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
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

    }, [])

    return (
        <>
            <nav style={{ height: "90px", width: "100vw", position: "fixed", zIndex: "100" }} className={`d-flex align-items-center justify-content-between px-5 ${isScrolled ? 'bg-white' : ''}`}>
                <div className="d-flex align-items-center">
                    <div><img src={`src/assets/${isScrolled ? 'subasa_new_black.png' : 'subasa_new_white.png'}`} className="px-4" alt="" style={{ height: "60px"}} /></div>
                    <div>
                        <NavLink className="px-4" to={"/"}>Link 1</NavLink>
                        <NavLink className="px-4" to={"/"}>Link 1</NavLink>
                        <NavLink className="px-4" to={"/"}>Link 1</NavLink>
                        <NavLink className="px-4" to={"/"}>Link 1</NavLink>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <div style={{ borderRadius: "50%", backgroundColor: "white", width: "50px", height: "50px" }}></div>
                    {/* <div className="d-flex gap-1 flex-column">
                        <div style={{ width: "32px", height: "3px", backgroundColor: "white" }}></div>
                        <div style={{ width: "32px", height: "3px", backgroundColor: "white" }}></div>
                        <div style={{ width: "32px", height: "3px", backgroundColor: "white" }}></div>
                    </div> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar