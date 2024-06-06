import Cookies from "js-cookie"
import { isValidToken } from "../Api/ApiAuth"

export interface SpliToken {
    payload: string
    signature: string
}

export const splitToken = (token: string): SpliToken => {
    const split_token = token.split('.')
    const token_payload = split_token[0] + '.' + split_token[1]
    const token_signature = split_token[2]
    return { payload: token_payload, signature: token_signature }
}

export const getStoredToken = (): string => {
    const token_payload = localStorage.getItem("token_payload") ? localStorage.getItem("token_payload") : ""
    const token_signature = Cookies.get("token_signature") ? Cookies.get("token_signature") : ""
    const token = token_payload + '.' + token_signature
    return token
}

export const isStoredToken = () => {
    const token_payload = localStorage.getItem("token_payload") ? localStorage.getItem("token_payload") : ""
    const token_signature = Cookies.get("token_signature") ? Cookies.get("token_signature") : ""
    if (token_payload == "" || token_signature == "")
        return false
    return true
}

export const useAuth = async () => {
    // const user = localStorage.getItem("Token")
    if (isStoredToken()) {
        // const token = getStoredToken()
        const validToken = await isValidToken()
        return validToken ? true : false
    }
    else {
        return false
    }
}

// const PrivateRouteProvider = () => {
//     const isLoggedIn = useAuth()
//     isLoggedIn ? <Outlet /> : <Navigate replace to={"/login"} />
// }

// export default PrivateRouteProvider