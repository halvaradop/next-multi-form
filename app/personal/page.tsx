"use client"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useId, useState } from "react"
import { User } from "@/lib/@types/types"
import { Input } from "@/ui/custom/input"
import { Portal } from "@/ui/custom/portal"

const PersonalPage = () => {
    const keyId = useId()
    const router = useRouter()
    const [form, setForm] = useState<User>({
        name: "",
        email: "",
        phone: ""
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleSubmit = (event: FormEvent<HTMLInputElement>) => {
        router.push("/plan")
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
                <Portal selector="body div #footer">
                    <Input className="px-4 ml-auto indent-0 hover:cursor-pointer" type="submit" size="md" color="blue-300" value="Next Step" onClick={handleSubmit} />
                </Portal>
            </form>
        </>
    )
}
  
export default PersonalPage