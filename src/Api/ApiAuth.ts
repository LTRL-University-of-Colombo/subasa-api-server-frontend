import axiosInstance from "./AxiosConfig"
import { loggedUserInfo } from "./Interfaces"

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
        const loggedUserInfo:loggedUserInfo = response.data
        return loggedUserInfo 
    }
}