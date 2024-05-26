import { useEffect, useState } from "react"

const HamburgerMenu = () => {
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false)

    const toggleHamburgerMenu = () => {
        console.log("toggle called: ", isHamburgerMenuOpen)
        isHamburgerMenuOpen ? setIsHamburgerMenuOpen(false) : setIsHamburgerMenuOpen(true)
    }

    document.addEventListener('click', (event: MouseEvent) => {
        const hamburgerElement = document.getElementById("hamburger-menu")
        const hamburgerTogglerElement = document.getElementById("hamburger-menu-toggler")

        if (!hamburgerElement || !hamburgerTogglerElement) {
            console.error('Hamburger menu elements not found');
            return;
        }

        if (event.target == hamburgerTogglerElement) {
            return
        }
        setIsHamburgerMenuOpen((event.target instanceof Node && hamburgerElement?.contains(event.target)) ? true : false)
    })

    useEffect(() => {
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
                <button className="btn btn-light" type="button">Action</button>
                <button className="btn btn-light" type="button">Another action</button>
                <button className="btn btn-light" type="button">Something else here</button>
            </div>
        </div>
    )
}

export default HamburgerMenu
