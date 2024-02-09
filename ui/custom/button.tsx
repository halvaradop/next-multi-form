import { merge } from "@/lib/merge"
import { ButtonProps } from "@/lib/@types/props"
import { Sizes, Variant } from "@/lib/@types/types"

const sizeVariant: Variant<Sizes> = {
    md: "h-10 px-4 font-medium border rounded-md"
}

const colorVariant: Variant<string> = {
    "blue-300": "text-white border-blue-300 bg-blue-300",
    "gray-100": "text-gray-100 border-transparent"
}

const Button = ({ className, children, size, color, onClick }: ButtonProps) => {

    return (
        <button className={merge(sizeVariant[size], colorVariant[color ?? ""], className)} onClick={onClick}>
            {children}
        </button>
    )
}

export { Button }