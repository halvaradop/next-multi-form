import { twMerge } from "tw-merge";
import { ClassValue, clsx } from "clsx";

export const merge = (...classes: ClassValue[]) => {
    return twMerge(clsx(classes.filter(Boolean)))
}