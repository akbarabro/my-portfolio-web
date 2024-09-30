import Image from "next/image"
import linkedin from "@/app/images/linkedin.png" ;
import github from "@/app/images/gothub.png" ;
import behance from "@/app/images/behance.png" ;
import Link from "next/link";

export default function Header () {
    return (
        <div className="header">
            <ul className="headerB">
                <li className="buttons"><a href="\">Home</a></li>
                <li className="buttons"><a href="/services">Services</a></li>
                <li className="buttons"><a href="/about">About</a></li>
                <li className="buttons"><a href="/follow">Follow</a></li>
                <li className="contact"><a href="/contact">Contact Me</a></li>
                <ul className="icons">
                <li className="icon"><a href="www.linkedin.com/in/akbarabro" target="_main" ><Image src={linkedin} alt="Icon"/></a></li>
                <li className="icon"><a href="www.github.com/akbarabro"><Image src={github} alt="Icon"/></a></li>
                <li className="icon"><a href="www.behance.net/akbarabro"><Image src={behance} alt="Icon"/></a></li>
                </ul>
                {/* <li ><input className="searchBar" type="search" name="search" id="" placeholder=" Search      " /></li> */}
            </ul>
        </div>
    )
}