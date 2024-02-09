"use client"
import { createPortal } from "react-dom"
import { ReactPortal, useEffect, useRef, useState } from "react"
import { PortalProps } from "@/lib/@types/props"

const Portal = ({ children, selector }: PortalProps) => {
    const portalRef = useRef<Element | null>(null)
    const [isAccessible, setIsAccessible] = useState(false)

    useEffect(() => {
        const node = document.querySelector(selector)!
        portalRef.current = node
        setIsAccessible(true)

        return () => setIsAccessible(false)
    }, [])

    return ( isAccessible && portalRef.current ) ? createPortal(children, portalRef.current) : null
}

export { Portal }