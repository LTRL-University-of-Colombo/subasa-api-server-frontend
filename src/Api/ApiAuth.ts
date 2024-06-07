import axiosInstance from "./AxiosConfig"
import { LoggedUserInfo } from "./Interfaces"

export const isValidToken = async () => {
    const response = await axiosInstance.get("auth/current-user")
    if (response.status == 200) {
        return true
    } else {
        return 0
    }
}

export const getLoggedUserInfo = async () => {
    const response = await axiosInstance.get("auth/current-user")
    if (response.status == 200) {
        const loggedUserInfo:LoggedUserInfo = response.data
        return loggedUserInfo 
    }
}