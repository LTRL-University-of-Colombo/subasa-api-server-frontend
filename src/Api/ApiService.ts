import axiosInstance from "./AxiosConfig"
import { ApiServiceData } from "./Interfaces"

export const getAllServices = async (skip: number = 0, limit: number = 20) => {
    const response = await axiosInstance.get("api/api-services")
    if (response.status == 200) {
        console.log(response.data)
        return response.data
    }
}