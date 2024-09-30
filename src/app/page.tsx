import Image from "@/app/components/ButtonImage"
import Services from "./components/services"
import Footer from "./components/footer"


export default function main(){
    return(
        <div>
            <Image/>
            <div className="whiteLine"></div>
            <Services/>
            <div className="whiteLine"></div>
            <Footer/>
        </div>
    )
}