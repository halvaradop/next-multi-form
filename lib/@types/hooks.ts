
export type LocalStorageReturn<T> = [
    storage: T,
    setStorage: (value: T) => void
]

export interface UseLocalStorage {
    <T extends object | string> (key: string, value?: T): LocalStorageReturn<T>
}