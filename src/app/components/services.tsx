import Image from "next/image"
import icon1 from "../images/ionc1.webp"
import icon2 from "../images/ionc2.webp"
import icon3 from "../images/ionc3.webp"

export default function archive(){
    return(<div>
        <div className="service">

        <p className="MyService">My Services</p>
        <ul className="services">
            <li className="servicesBox"><Image className="S-Icon" src={icon1} alt="Logo Icon"/><p className="S-title">Logo Design</p><p className="S-description">Crafting unique symbols to represent your brand's identity and values</p></li>
            <li className="servicesBox"><Image className="S-Icon" src={icon2} alt="post Icon"/><p className="S-title">Post Design</p><p className="S-description">Creating eye-catching visuals for social media to boost engagement and reach</p></li>
            <li className="servicesBox"><Image className="S-Icon" src={icon3} alt="web Icon"/><p className="S-title">Web Design</p><p className="S-description">Designing user-friendly, responsive websites tailored to your brand's needs</p></li>
        </ul>
        </div>
    </div>
    )
}
