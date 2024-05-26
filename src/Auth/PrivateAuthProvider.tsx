import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './Auth'

const PrivateAuthProvider = () => {
    const isLoggedIn = useAuth()

    return (
        <>
            {isLoggedIn ? <Outlet /> : <Navigate replace to={"/login"} />}
        </>
    )
}

export default PrivateAuthProvider
