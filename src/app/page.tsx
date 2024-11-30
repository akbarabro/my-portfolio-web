import Image from "@/app/components/ButtonImage"
import Services from "./components/services"
import About from "./components/about"
import Skill from "./components/skills"
import Work from "./components/work"
import Footer from "./components/footer"
import Portfolio from "./components/portfolio"
import Header from "./components/Header"
import ContactMe from "./components/contactme"


export default function main(){
    return(
        <div>
            <Image/>
            {/* <div className="whiteLine"></div> */}
            <About/>
            <Skill/>
            <Portfolio/>
            <Work/>
            <Services/>
            <ContactMe/>
            {/* <Footer/> */}
            {/* <div className="whiteLine"></div> */}
        </div>
    )
}