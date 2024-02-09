import { Dispatch, SetStateAction } from "react"

export type Sizes = "xs" | "sm" | "base" | "md" | "lg" | "xl" | "2xl" | "3xl"

export type Variant<T extends string> = Partial<Record<T, string>>

export interface Styles {
    size: Sizes,
    color?: string
}

export interface User {
    name: string,
    email: string,
    phone: number | string
}

export interface Plan {
    id: string,
    title: string,
    price: Price,
    image: string
}

export interface Price {
    yearly: number,
    monthly: number,
}

export interface PickCustom {
    id: string,
    title: string,
    description: string,
    price: Price
}

export interface FormContextType {
    personal: User,
    plan: Plan,
    picks: PickCustom[],
    isMonthly: boolean
}

export interface FormContextProvider {
    provider: FormContextType,
    dispatch: Dispatch<SetStateAction<FormContextType>>
}