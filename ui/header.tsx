import Image from "next/image"
import { HeaderSteps } from "./header-steps"
import patternMobile from "@/public/sidebar-mobile.svg"
import patternDesktop from "@/public/sidebar-desktop.svg"

const Header = () => {

    return (
        <header className="w-full h-[clamp(150px,_30vw,_30vh)] relative overflow-hidden">
            <HeaderSteps />
            <picture>
                <Image className="absolute top-0 left-0" width={800} src={patternMobile} alt="pattern version mobile" priority />
            </picture>
        </header>
    )
}

export { Header }