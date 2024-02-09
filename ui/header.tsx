import Image from "next/image"
import { HeaderSteps } from "./header-steps"
import patternMobile from "@/public/sidebar-mobile.svg"
import patternDesktop from "@/public/sidebar-desktop.svg"

const Header = () => {

    return (
        <header className="w-full h-full flex items-center justify-center relative overflow-hidden">
            <HeaderSteps />
            <picture>
                <Image width={900} height={300} src={patternMobile} alt="pattern version mobile" priority />
            </picture>
        </header>
    )
}

export { Header }