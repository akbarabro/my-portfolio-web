import Image from "@/app/components/ButtonImage"
import Services from "./components/services"
import About from "./components/about"
import Skill from "./components/skills"
import Work from "./components/work"
import Portfolio from "./components/portfolio"
import ContactMe from "./components/contactme"


export default function main(){
    return(
        <div>
            <Image/>
            <About/>
            <Skill/>
            <Portfolio/>
            <Work/>
            <Services/>
            <ContactMe/>
        </div>
    )
}