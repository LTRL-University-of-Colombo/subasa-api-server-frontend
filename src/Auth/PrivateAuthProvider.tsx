import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './Auth'
import { useState, useEffect } from 'react'

const PrivateAuthProvider = () => {
    const [logged, setLogged] = useState<boolean>(false)
    useEffect(() => {
        const getAuth = async () => {
            const auth_result = await useAuth()
            setLogged(auth_result)
        }
        getAuth()
    }, [])

    return (
        <>
            {logged ? <Outlet /> : <Navigate replace to={"/login"} />}
        </>
    )
}

export default PrivateAuthProvider
