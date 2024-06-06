import axiosInstance from "./AxiosConfig"

export const isValidToken = async (token: string) => {
    const response = await axiosInstance.post("", {
        access_toke: token,
        token_type: "Bearer"
    })
    if (response.status == 200) {
        return true
    } else {
        return 0
    }
}