"use client"
import { useContext } from "react"
import { FormContext } from "@/context/form-context"

export const useAccessForm = () => {
    return useContext(FormContext)
}