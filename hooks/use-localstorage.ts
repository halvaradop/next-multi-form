"use client"
import { useState, useEffect } from "react"
import { UseLocalStorage } from "@/lib/@types/hooks"

const useLocalStorage: UseLocalStorage = <T>(key: string, value?: T) => {
    const [storage, setStorage] = useState<T>({} as T)

    const setUpdate = (value: T) => {
        setStorage(value)
        localStorage.setItem(key, JSON.stringify(value))
        return value
    }

    useEffect(() => {
        const cache = localStorage.getItem(key)
        if(cache) {
            if(value) {
                setUpdate(value)
            } else {
                setStorage(JSON.parse(cache))
            }
        }
    }, [])

    return [storage, setUpdate]
}

export { useLocalStorage }