import Image from "next/image"
import { merge } from "@/lib/merge"
import { ListPlansProps } from "@/lib/@types/props"

const ListPlans = ({ plans, planId, isMonthly, onClick }: ListPlansProps) => {

    return plans.map(({ id, price, title, image }) => (
        <article className={merge("py-4 px-6 flex items-center gap-x-3 border border-gray rounded-lg hover:cursor-pointer", { "border-blue-200": planId === id })} onClick={() => onClick(id)} key={id}>
            <figure>
                <Image src={image} width={40} height={40} alt="icon of the plan" />
            </figure>
            <div>
                <h2 className="text-blue-300 text-lg font-medium">{title}</h2>
                <p className="text-gray-100 font-medium">$ { isMonthly ? price.monthly : price.yearly }/{ isMonthly ? "yr" : "mo" }</p>
            </div>
        </article>
    ))
}

export { ListPlans }