"use client"
import { useRouter } from "next/navigation"
import { ChangeEvent, useId, useState } from "react"
import { User } from "@/lib/@types/types"
import { Input } from "@/ui/custom/input"
import { Portal } from "@/ui/custom/portal"
import { Button } from "@/ui/custom/button"
import { useAccessForm } from "@/hooks/use-access-form"
import { useLocalStorage } from "@/hooks/use-localstorage"

const PersonalPage = () => {
    const keyId = useId()
    const router = useRouter()
    const { provider: { personal }, dispatch } = useAccessForm()
    const [storage] = useLocalStorage("key")
    

    const [form, setForm] = useState<User>({
        name: personal.name ?? "",
        email: personal.email ?? "",
        phone: personal.phone ?? ""
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleSubmit = () => {
        router.push("/plan")
        dispatch(previous => ({
            ...previous,
            personal: form
        }))
    }

    return (
        <>
            <div className="mb-6">
                <h1 className="text-blue-300 text-2xl font-bold">Personal info</h1>
                <p className="mt-2 text-gray-100 text-lg">Please provide your name, email, addres, and phone number.</p>
            </div> 
            <form className="flex items-center flex-col gap-y-5 text-blue-300 text-sm font-medium">
                <label className="w-full" htmlFor="name">     
                    Name
                    <Input className="w-full mt-1 user-invalid:text-red-400" size="md" color="gray" value={form.name} name="name" id={`${keyId}-name`} placeholder="e.g. Stephen King" onChange={handleChange} />
                </label>
                <label className="w-full" htmlFor="email">
                    Email address
                    <Input className="w-full mt-1" size="md" color="gray" value={form.email} name="email" id={`${keyId}-email`} placeholder="e.g. stephenking@lorem.com" onChange={handleChange} />
                </label>
                <label className="w-full" htmlFor="phone">
                    Phone Number
                    <Input className="w-full mt-1" type="number" size="md" color="gray" value={form.phone} name="phone" id={`${keyId}-phone`} placeholder="e.g. +1 234 567 890" onChange={handleChange} />
                </label>
            </form>
            <Portal selector="body div #footer">
                <Button className="px-4 ml-auto indent-0 hover:cursor-pointer" type="submit" size="md" color="blue-300" onClick={handleSubmit}>Next Step</Button>
            </Portal>
        </>
    )
}
  
export default PersonalPage