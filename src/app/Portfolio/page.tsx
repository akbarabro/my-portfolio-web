import Portfolio from "../components/portfolio"
import Footer from "../components/footer"
import Image from "next/image"
import arrow from "../images/right-arrow.svg"

export default function Work(){
    return(
        <div className="navGap">
            <Portfolio/>

            <div className="P-page-div">
            <ul className="p-ul3">
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Product Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Web Slide Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Mobile Covers</p></div></li>
             </ul>
             <ul className="p-ul4">
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Hoodies</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Qiad-e-Azam Day</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Vite Courier  </p></div></li>
            </ul>
             <ul className="p-ul5">
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Simple Post</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Fashion Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Aplo Logoes</p></div></li>
            </ul>
            <button className="behance-button"><a href="https:www.behance.net/akbarabro">Portfolio <Image className="arrow-icon" src={arrow} alt=""/></a></button>
            </div>

            <Footer/>
        </div>
    )
}