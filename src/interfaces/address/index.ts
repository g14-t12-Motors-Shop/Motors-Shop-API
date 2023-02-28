export interface IAddressRequest {
    state: string
    city: string
    street: string
    zipCode: string
    number?: number
    complement?: string
}

export interface IAddress {
    id: string
    state: string
    city: string
    street: string
    zipCode: string
    number?: number
    complement?: string
}

export interface IAddressUpdate {
    state?: string
    city?: string
    street?: string
    zipCode?: string
    number?: number
    complement?: string
}