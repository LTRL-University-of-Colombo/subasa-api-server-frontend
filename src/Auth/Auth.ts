import Cookies from "js-cookie"
import { getLoggedUserInfo, isValidToken } from "../Api/ApiAuth"
import { LoggedUserInfo } from "../Api/Interfaces"

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

export const saveToken = (splitToken: SpliToken): boolean => {
    try {
        localStorage.setItem("token_payload", splitToken.payload);
        Cookies.set("token_signature", splitToken.signature)
        return true
    } catch {
        return false
    }
}

export const getStoredToken = (): string => {
    const token_payload = localStorage.getItem("token_payload") ? localStorage.getItem("token_payload") : ""
    const token_signature = Cookies.get("token_signature") ? Cookies.get("token_signature") : ""
    const token = token_payload + '.' + token_signature
    return token
}

export const removeStoredToken = (): boolean => {
    try {
        localStorage.removeItem("token_payload")
        Cookies.remove("token_signature")
        return true
    } catch (error) {
        return false
    }
}

export const isStoredToken = (): boolean => {
    const token_payload = localStorage.getItem("token_payload") ? localStorage.getItem("token_payload") : ""
    const token_signature = Cookies.get("token_signature") ? Cookies.get("token_signature") : ""
    if (token_payload == "" || token_signature == "")
        return false
    return true
}

export const saveUserInfoLocalstorage = (userData: LoggedUserInfo): boolean => {
    try {
        localStorage.setItem("id", `${userData?.id}`)
        localStorage.setItem("username", userData?.username)
        localStorage.setItem("email", userData?.email)
        return true
    } catch (error) {
        console.log("Failed to save userdata to local storage.")
        return false
    }

}

export const getSavedUserInfoFromLocalstorage = (): LoggedUserInfo | null => {
    try {
        return {
            id: Number(localStorage.getItem("id") ?? 0),
            username: localStorage.getItem("username") ?? "",
            email: localStorage.getItem("email") ?? ""
        }
    } catch (error) {
        console.log("Failed to retriew data from local storage.")
        return null
    }
}

export const useAuth = async (): Promise<boolean> => {
    // const user = localStorage.getItem("Token")
    if (isStoredToken()) {
        const validToken = await isValidToken()

        const currentUser = await getLoggedUserInfo()
        if (currentUser)
            saveUserInfoLocalstorage(currentUser)
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