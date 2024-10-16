import Image from "@/app/components/ButtonImage"
import Services from "./components/services"
import About from "./components/about"



export default function main(){
    return(
        <div>
            <Image/>
            {/* <div className="whiteLine"></div> */}
            <About/>
            <Services/>
            {/* <div className="whiteLine"></div> */}
        </div>
    )
}