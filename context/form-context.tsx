"use client"
import { createContext, useState } from "react";
import { FormContextProvider, FormContextType, Plan, User } from "@/lib/@types/types";
import { ContextProps } from "@/lib/@types/props";

const FormContext = createContext<FormContextProvider>({
    provider: {
        isMonthly: true,
        personal: {} as User,
        picks: [],
        plan: {} as Plan
    },
    dispatch: () => undefined
})

const FormProvider = ({ children }: ContextProps) => {
    const [provider, setProvider] = useState<FormContextType>({
        isMonthly: true,
        personal: {} as User,
        picks: [],
        plan: {} as Plan
    })

    return (
        <FormContext.Provider value={{ provider, dispatch: setProvider }}>
            {children}
        </FormContext.Provider>
    )
}

export { FormContext, FormProvider }