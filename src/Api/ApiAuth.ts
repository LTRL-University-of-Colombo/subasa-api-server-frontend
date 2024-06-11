import { removeStoredToken } from "../Auth/Auth"
import axiosInstance from "./AxiosConfig"
import { LoggedUserInfo } from "./Interfaces"

export const isValidToken = async (): Promise<boolean> => {
    const response = await axiosInstance.get("auth/current-user")
    if (response.status == 200) {
        return true
    } else {
        removeStoredToken()
        return false
    }
}

export const getLoggedUserInfo = async (): Promise<LoggedUserInfo | null> => {
    const response = await axiosInstance.get("auth/current-user")
    if (response.status == 200) {
        const loggedUserInfo: LoggedUserInfo = response.data
        return loggedUserInfo
    } else {
        removeStoredToken()
        return null
    }
}