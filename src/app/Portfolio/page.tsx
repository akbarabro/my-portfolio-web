import Portfolio from "../components/portfolio"
import Footer from "../components/footer"
import Image from "next/image"
import arrow from "../images/right-arrow.svg"

export default function Work(){
    return(
        <div className="navGap">
            {/* <Portfolio/> */}
            <div className="Main-Div-Pot">
             <p className="Pot-Title">Portfolio</p>
             <ul className="p-ul1">
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Product Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Web Slide Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Style Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Grand Opening</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Ecommerce Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">T-Shirts Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Product Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Web Slide Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Mobile Covers</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Hoodies</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Qiad-e-Azam Day</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Vite Courier  </p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Simple Post</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Fashion Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Apllo Logo</p></div></li>
            </ul>
           <div className="flex justify-center items-center"> <button className="behance-button"><a href="https:www.behance.net/akbarabro">Behance <Image className="arrow-icon" src={arrow} alt=""/></a></button></div>
            </div>
        </div>
    )
}