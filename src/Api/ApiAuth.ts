import axiosInstance from "./AxiosConfig"

export const isValidToken = async () => {
    const response = await axiosInstance.get("auth/current-user")
    if (response.status == 200) {
        return true
    } else {
        return 0
    }
}