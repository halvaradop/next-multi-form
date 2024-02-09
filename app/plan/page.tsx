"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/ui/custom/button"
import { Portal } from "@/ui/custom/portal"
import { listPlans } from "@/lib/list-plan"
import { ListPlans } from "@/ui/list-plans"

const PlanPage = () => {
    const router = useRouter()
    const [planId, setPlanId] = useState<string>("")
    const [isMonthly, setIsMonthly] = useState(true)

    const handleToggleMembresy = () => {
        setIsMonthly(!isMonthly)
    }

    const handleSelectPlan = (planId: string) => {
        setPlanId(planId)
    }

    const handleNextStep = () => {
        router.push("/picks")
    }

    const handlePreviousStep = () => {
        router.push("/personal")
    }

    return (
        <>
            <div className="mb-6">
                <h1 className="text-blue-300 text-2xl font-bold">Select your plan</h1>
                <p className="mt-2 text-gray-100 text-lg">You have the option of monthly or yearly billing.</p>
            </div>
            <section>
                <div className="space-y-4">
                    <ListPlans plans={listPlans} planId={planId} isMonthly={isMonthly} onClick={handleSelectPlan} />
                </div>
                <div className="mt-8 py-3 flex justify-center gap-x-4 font-medium rounded-md bg-magnolia">
                    <p className="text-blue-300">Monthly</p>
                    <div className="w-10 h-6 p-1 flex rounded-full transition-all duration-300 bg-blue-300 data-[month='true']:justify-end" data-month={isMonthly} onClick={handleToggleMembresy} >
                        <span className="w-4 h-4 block rounded-full bg-white"></span>
                    </div>
                    <p className="text-gray-100">Yearly</p>
                </div>
            </section>
            <Portal selector="#footer">
                <Button size="md" color="gray-100" onClick={handlePreviousStep}>Go Back</Button>
                <Button size="md" color="blue-300" onClick={handleNextStep}>Next Step</Button>
            </Portal>
        </>
    )
}

export default PlanPage