import Image from "@/app/components/ButtonImage"
import Services from "./components/services"
import About from "./components/about"
import Skill from "./components/skills"
import Work from "./components/work"



export default function main(){
    return(
        <div>
            <Image/>
            {/* <div className="whiteLine"></div> */}
            <About/>
            <Skill/>
            <Work/>
            <Services/>
            {/* <div className="whiteLine"></div> */}
        </div>
    )
}