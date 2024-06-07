import { Params } from "react-router-dom"

export interface LoginPayload {
    email: string,
    password: string
}

export interface LoggedUserInfo {
    id: number
    username: string
    email: string,
}

export interface ApiServiceData {
    name: string,
    description: string,
    id: number
}
