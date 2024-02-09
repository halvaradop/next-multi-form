"use client"
import { useRouter } from "next/navigation"
import { listPicks } from "@/lib/list-pick"
import { Button } from "@/ui/custom/button"
import { Portal } from "@/ui/custom/portal"
import { ListPicks } from "@/ui/list-picks"
import { useState } from "react"


const PicksPage = () => {
    const router = useRouter()
    const [picksId, setPicksId] = useState<string[]>([])

    const handlePickSelected = (pickId: string) => {
        const some = picksId.some(pick => pick === pickId)
        setPicksId(some ? picksId.filter(value => value !== pickId) : [...picksId, pickId])
    }

    const handleNextStep = () => {
        router.push("/finish")
    }

    const handlePreviousStep = () => {
        router.push("/plan")
    }

    return (
        <>
            <div className="mb-6">
                <h1 className="text-blue-300 text-2xl font-bold">Pick add-ons</h1>
                <p className="mt-2 text-gray-100 text-lg">Add-ons help enhance your gaming experience.</p>
            </div>
            <div className="space-y-5">
                <ListPicks picks={listPicks} picksId={picksId} onClick={handlePickSelected} />
            </div>
            <Portal selector="#footer">
                <Button size="md" color="gray-100" onClick={handlePreviousStep}>Go Back</Button>
                <Button size="md" color="blue-300" onClick={handleNextStep}>Next Step</Button>
            </Portal>
        </>
    )
}

export default PicksPage