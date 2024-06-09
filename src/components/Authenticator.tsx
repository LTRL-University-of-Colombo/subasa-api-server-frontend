import { useEffect } from "react"
import { useAuth } from "../Auth/Auth"
import { useNavigate } from "react-router-dom"

const Authenticator = () => {
    const navigate = useNavigate()

    // const loggingState = await useAuth()
    useEffect(() => {

        const getLoggingState = async () => {
            try {
                const loggingState = await useAuth()
                if (!loggingState) {
                    navigate("/login")
                }
            } catch (error) {
                navigate("/login")
            }
        }
        getLoggingState()

    }, [])

    return (
        <></>
    )
}

export default Authenticator
