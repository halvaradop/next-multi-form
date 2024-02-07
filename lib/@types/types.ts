
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