import Image from "next/image"
import arrow from "../images/right-arrow.svg"
import Link from "next/link"

export default function Work(){
    return(
        <div>
            {/* <Portfolio/> */}
            <div className="Main-Div-Pot">
             <p className="Pot-Title">Portfolio</p>
             <ul className="p-ul1">
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Product Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Web Slide Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Vite Courier  </p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Grand Opening</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Ecommerce Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">T-Shirts Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Product Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Web Slide Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Mobile Covers</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Hoodies</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Qiad-e-Azam Day</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Style Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Baseball Jersey</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Air Jordan</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Post Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Hoodie Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Hoodie Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Hoodie Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Fashion Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Apllo Logo</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Visiting Card</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Vector Art</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Post Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Texture</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Vite Logo</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">ID Card</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Celender</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Envelope</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Wall Product</p></div></li>
            </ul>
           <div className="flex justify-center items-center"> <button className="behance-button"><Link href="https://www.behance.net/akbarabro">Behance <Image className="arrow-icon" src={arrow} alt=""/></Link></button></div>
            </div>
        </div>
    )
}