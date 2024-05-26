import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const HamburgerMenu = () => {
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false)

    const toggleHamburgerMenu = () => {
        console.log("toggle called: ", isHamburgerMenuOpen)
        isHamburgerMenuOpen ? setIsHamburgerMenuOpen(false) : setIsHamburgerMenuOpen(true)
    }

    useEffect(() => {
        document.addEventListener('click', (event: MouseEvent) => {
            const hamburgerElement = document.getElementById("hamburger-menu")
            const hamburgerTogglerElement = document.getElementById("hamburger-menu-toggler")

            if (event.target == hamburgerTogglerElement) {
                return
            }
            setIsHamburgerMenuOpen((event.target instanceof Node && hamburgerElement?.contains(event.target)) ? true : false)
        })

        setIsHamburgerMenuOpen(false)
    }, [])

    return (
        <div className="d-flex align-items-center gap-3" style={{ position: "relative" }}>
            <div
                style={{ borderRadius: "50%", backgroundColor: "white", width: "42px", height: "42px", cursor: "pointer" }}
                className="border"
                onClick={toggleHamburgerMenu}
                id="hamburger-menu-toggler"
            ></div>
            <div
                className={`card grid p-2 ${isHamburgerMenuOpen ? '' : 'd-none'}`}
                style={{ position: "absolute", top: "45px", right: "4px", width: "200px", height: "300px" }}
                id="hamburger-menu"
            >
                <Link className="btn btn-light" role="button" to={"/change-password"}>Change Password</Link>
                <Link className="btn btn-light" role="button" to={"/logout"}>Log Out</Link>
            </div>
        </div>
    )
}

export default HamburgerMenu
