export interface LoginPayload {
    email: string,
    password: string
}

export interface binaryResponse<T> {
    result: boolean
    message: string
    ResponseData: T | undefined
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
