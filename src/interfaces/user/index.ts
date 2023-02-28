import { IAddressRequest, IAddressUpdate } from "../address"

export interface IUserRequest {
    name: string
    email: string
    cpf: string
    phone: string
    birthdate: Date
    description: string
    accountType: string
    password: string
    isAdm?: boolean
    address: IAddressRequest
}

export interface IUser {
    id: string
    name: string
    email: string
    cpf: string
    phone: string
    birthdate: Date
    description: string
    accountType: string
    password: string
    isAdm?: boolean
    createdAt: Date
    updatedAt: Date
    address: IAddressRequest
}

export interface IUserLogin {
    email: string
    password: string
}

export interface IUserUpdate {
    name?: string
    email?: string
    phone?: string
    birthdate?: Date
    description?: string
    accountType?: string
    password?: string
    address?: IAddressUpdate
}