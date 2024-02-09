import { merge } from "@/lib/merge"
import { Input } from "@/ui/custom/input"
import { ListPicksProps } from "@/lib/@types/props"


const ListPicks = ({ picks, picksId, onClick }: ListPicksProps) => {

    const isPickSelected = (pickId: string): boolean => {
        return picksId.some(value => value === pickId)
    }

    return picks.map(({ id, title, description, price }) => (
        <article className={merge("py-4 px-5 flex items-center gap-x-3 text-sm border border-gray rounded-lg", { "border-blue-200 bg-alabaster": isPickSelected(id) })} onClick={() => onClick(id)} key={id}>
            <Input className="h-5 w-5 accent-blue-200" type="checkbox" size="md" color="blue" checked={isPickSelected(id)} onChange={() => {}} />
            <div className="flex-1">
                <h3 className="text-blue-300 text-lg font-medium">{title}</h3>
                <p className="text-gray-100">{description}</p>
            </div>
            <p className="text-blue-200 font-medium">+${ price.monthly }</p>
        </article>
    ))
}

export { ListPicks }