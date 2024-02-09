import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import { PickCustom, Plan, Styles } from "@/lib/@types/types";

export interface LayoutProps {
    children: React.ReactNode
}

export type InputProps = Styles & Omit<InputHTMLAttributes<HTMLInputElement>, "size"> 
export type ButtonProps = Styles & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size">

export interface PortalProps {
    children: React.ReactNode,
    selector: string
}

export interface ListPlansProps {
    plans: Plan[],
    isMonthly: boolean,
    planId: string,
    onClick: (planId: string) => void
}

export interface ListPicksProps {
    picks: PickCustom[],
    picksId: string[],
    onClick: (pickId: string) => void
}

export interface ContextProps {
    children: React.ReactNode
}