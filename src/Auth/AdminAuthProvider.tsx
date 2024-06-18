import { Outlet, Link } from 'react-router-dom'
import { getSessionState, useAdminAuth } from './Auth'
import { useState, useEffect } from 'react'
import PageLoadSpinner from '../components/PageLoadSpinner'
import Cookies from 'js-cookie'


const AdminAuthProvider = () => {
    const [logged, setLogged] = useState<boolean>(false)
    const [waiting, setWaiting] = useState<boolean>(true)

    const isLoggedBefore = getSessionState()

    useEffect(() => {
        // const getAuth = async () => {
        //     setWaiting(true)
        //     try {
        //         const auth_result = await useAuth()
        //         console.log("get Auth called")
        //         console.log("authresult: ", auth_result)
        //         setLogged(auth_result)
        //     } catch (error) {
        //         setLogged(false)
        //     }
        //     setWaiting(false)

        // }
        const auth = async () => {
            setWaiting(true)
            const adminCookie = Cookies.get("isAdmin")
            if (adminCookie !== "true") {
                const response = await useAdminAuth()
                setLogged(response)
            }
            setWaiting(false)
        }
        setLogged(true)
        setWaiting(false)
        // auth()
    }, [])

    return (
        <>
            {waiting ? <PageLoadSpinner active /> :
                logged ?
                    <Outlet />
                    :
                    <>
                        <div className='authProvider-overlay'>
                            <div className="card p-4">
                                <h4>
                                    {
                                        isLoggedBefore ?
                                            "Your session is end. Please login again."
                                            :
                                            "You need to Login to view this page"
                                    }
                                </h4>
                                <div className='mt-3 d-flex gap-2 justify-content-center'>
                                    <Link className='btn btn-primary' to={"/login"}>Login</Link>
                                    <Link className='btn btn-secondary' to={"/register"}>Sign up</Link>
                                </div>
                                <div className='text-center mt-3'>or</div>
                                <button className='btn btn-link' onClick={() => { window.history.go(-1); return false; }}>Go back</button>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}

export default AdminAuthProvider


