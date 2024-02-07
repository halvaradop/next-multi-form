import { InputHTMLAttributes } from "react";
import { Styles } from "@/lib/@types/types";

export interface LayoutProps {
    children: React.ReactNode
}

export type InputProps  = Styles & Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "color"> 

export interface PortalProps {
    children: React.ReactNode,
    selector: string
}