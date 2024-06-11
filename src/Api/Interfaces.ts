export interface LoginPayload {
    email: string,
    password: string
}

export interface BinaryResponse {
    result: boolean
    message: string
}

export interface signupPayload {
    username: string
    email: string
    password: string
    scopes: string
}

export interface LoggedUserInfo {
    id: number
    username: string
    email: string
}

export interface ApiServiceData {
    name: string,
    description: string,
    id: number
}

export interface Alert {
    type: string
    message: string
}
