import { Outlet, Navigate } from 'react-router-dom'
import { isValidToken, getLoggedUserInfo } from '../Api/ApiAuth'
import { getStoredToken, saveUserInfoLocalstorage } from './Auth'
import { useState, useEffect } from 'react'

const PrivateAuthProvider = () => {
    const [logged, setLogged] = useState<boolean>(true)


    const useAuth = async () => {
        console.log("async called")
        if (getStoredToken()) {
            const validToken = await isValidToken()
            console.log("valid Token: ", validToken)

            const currentUser = await getLoggedUserInfo()
            if (currentUser)
                saveUserInfoLocalstorage(currentUser)
            return validToken ? true : false
        }
        else {
            console.log("no stored token")
            return false
        }
    }


    useEffect(() => {
        const getAuth = async () => {
            const auth_result = await useAuth()
            console.log("authresult: ", auth_result)
            setLogged(auth_result)
        }
        getAuth()
    }, [])

    return (
        <>
            {logged ? <Outlet /> : <Navigate to={"/login"} />}
        </>
    )
}

export default PrivateAuthProvider
