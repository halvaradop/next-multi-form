import { merge } from "@/lib/merge"
import { InputProps } from "@/lib/@types/props"
import { Sizes, Variant } from "@/lib/@types/types"

const sizeVariant: Variant<Sizes> = {
    md: "h-10 indent-4 text-base border rounded-md",
}

const colorVariant: Variant<string> = {
    "gray": "text-gray-100 border-gray placeholder-gray-100",
    "blue-300": "text-white border-blue-300 bg-blue-300"
}

const Input = ({ className, type = "text", value, size, color, id, name, placeholder, required, disabled = false, onClick, onChange }: InputProps) => {

    const classList = merge(sizeVariant[size], colorVariant[color ?? ""], className)

    return (
        <input 
            className={classList}
            type={type}
            value={value}
            id={id}
            name={name}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            onClick={onClick}
            onChange={onChange}
        />
    )
}

export { Input }