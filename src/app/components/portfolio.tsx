"use client"
import { usePathname } from "next/navigation";

export default function Portfolio(){
    const pathname:string = usePathname()
    return(
        <div className="Main-Div-Pot">
             <p className="Pot-Title">Portfolio</p>
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
            <button className={`portButton ${pathname === '/Portfolio' ? 'button-port' : ''}`}><a href="/Portfolio">see more</a></button>
        </div>
    )
}