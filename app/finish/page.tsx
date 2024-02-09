"use client"
import Link from "next/link"
import { useAccessForm } from "@/hooks/use-access-form"

const FinishPage = () => {
    const { provider: { isMonthly } } = useAccessForm()

    return (
        <>
            <div className="mb-6">
                <h1 className="text-blue-300 text-2xl font-bold">Finishing up</h1>
                <p className="mt-2 text-gray-100 text-lg">Double-check everything looks OK before confirming.</p>
            </div>
            <section className="p-5 text-gray-100 rounded-xl bg-magnolia">
                <div className="flex items-center justify-between text-blue-300 font-bold">
                    <div>                    
                        <h3>Arcade ({ isMonthly ? "Monthly" : "Yearly" })</h3>
                        <Link className="text-gray-100 decoration-2 underline underline-offset-2" href="/personal">Change</Link>
                    </div>
                    <p>${}/</p>
                </div>
            </section>
            <div className="px-5 flex justify-between text-gray-100">
                <p>Total (per { isMonthly ? "month" : "year" })</p>
            </div>
        </>
    )
}

export default FinishPage