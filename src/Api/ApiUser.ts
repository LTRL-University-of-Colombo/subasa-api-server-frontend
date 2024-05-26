import axiosInstance from "./AxiosConfig";
import Cookies from 'js-cookie'
import { LoginPayload } from "./Interfaces";


// user login
export const userLogin = async ({ email, password }: LoginPayload) => {
    const response = await axiosInstance.post("auth/login", {
        email,
        password
    })
    if (response.data.id) {
        localStorage.setItem("token", response.data.token);
        Cookies.set("refreshToken", response.data.refreshToken, { expires: 1 });
    }
    return response
}