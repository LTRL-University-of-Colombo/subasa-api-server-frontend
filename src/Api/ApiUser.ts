import axiosInstance from "./AxiosConfig"
import Cookies from 'js-cookie'
import { LoginPayload } from "./Interfaces"
import { splitToken } from "../Auth/Auth"


// user login
export const userLogin = async ({ email, password }: LoginPayload) => {
    // prepare the login form
    const form_data = new FormData()
    form_data.append("username", email)
    form_data.append("password", password)

    // send post request to backend
    const response = await axiosInstance.post("/auth/token", form_data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    if (response.data.access_token) {
        /*
            token will split to 3 parts fom '.'
            first two parts will re-concatinate with '.' and store in local storage
            and the 3rd part(the signature will be stored in Cookie storage.)
            when user send request to backend those parts will concatinate with '.' 
            the reason for doing this is - security puposes.
        */
        const token: string = response.data.access_token
        const split_token = splitToken(token)

        localStorage.setItem("token_payload", split_token.payload);
        Cookies.set("token_signature", split_token.signature)
        // Cookies.set("refreshToken", response.data.refreshToken, { expires: 1 });
    }
    return response
}