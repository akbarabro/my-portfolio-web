import Portfolio from "../components/portfolio"
import Footer from "../components/footer"

export default function Work(){
    return(
        <div className="navGap">
            <Portfolio/>

            <div className="P-page-div">
            <ul className="p-ul1">
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Product Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Web Slide Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Style Design</p></div></li>
             </ul>
             <ul className="p-ul2">
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Grand Opening</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">Ecommerce Design</p></div></li>
             <li className="P-li"><div className="P-li-div"><p className="P-li-div-p">T-Shirts Design</p></div></li>
            </ul>
            </div>

            <Footer/>
        </div>
    )
}