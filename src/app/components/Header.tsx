"use client"
import Image from "next/image"
import { useState } from "react"
import linkedin from "@/app/images/linkedin.png" ;
import github from "@/app/images/gothub.png" ;
import behance from "@/app/images/behance.png" ;
import { usePathname } from "next/navigation";
import menuI from "../images/menuI.svg"


export default function Header () {
    const [isNavVisible,setIsNavVisible] = useState(false)
    const pathname: string = usePathname();
    const toggleNav = () => {
        setIsNavVisible(!isNavVisible)
    }
    return (
        <div className="m-div">


            <div className="header">
                <ul className="headerB">
                <li className={`buttons ${pathname === '/' ? 'active' : ''}`}><a href="\">Home</a></li>
                <li className={`buttons ${pathname === '/services' ? 'active' : ''}`}><a href="/services">Services</a></li>
                <li className={`buttons ${pathname === '/about' ? 'active' : ''}`}><a href="/about">About</a></li>
                <li className={`buttons ${pathname === '/Portfolio' ? 'active' : ''}`}><a href="/Portfolio">Portfolio</a></li>
                <li className={`buttons ${pathname === '/contact-me' ? 'active' : ''}`}><a href="/contact">Contact</a></li>
                <li className="resume"> <a href="/Resume.jpg" download="Resume.jpg">Resume</a></li>
                <ul className="icons">
                <a href="https:www.linkedin.com/in/akbarabro" target="_main" ><Image  className="icon" src={linkedin} alt="Icon"/></a>
                <a href="https:www.github.com/akbarabro"><Image  className="icon" src={github} alt="Icon"/></a>
                <a href="https:www.behance.net/akbarabro"><Image  className="icon" src={behance} alt="Icon"/></a>
                </ul>
             </ul>
            </div>
            <div className="menu-icon" onClick={toggleNav}><Image src={menuI} alt="" /></div>

            
            <div className={`header-mobile ${isNavVisible ? "show" : "hide"}`} >
                <ul className="headerB-mobile">
                <li className={`buttons ${pathname === '/' ? 'active' : ''}`}><a href="\">Home</a></li>
                <li className={`buttons ${pathname === '/services' ? 'active' : ''}`}><a href="/services">Services</a></li>
                <li className={`buttons ${pathname === '/about' ? 'active' : ''}`}><a href="/about">About</a></li>
                <li className={`buttons ${pathname === '/Portfolio' ? 'active' : ''}`}><a href="/Portfolio">Portfolio</a></li>
                <li className={`buttons ${pathname === '/contact-me' ? 'active' : ''}`}><a href="/contact">Contact</a></li>
                <li className="buttons"> <a href="/Resume.jpg" download="Resume.jpg">Resume</a></li>
                <ul className="icons">
                <li className="icon"><a href="https:www.linkedin.com/in/akbarabro" target="_main" ><Image src={linkedin} alt="Icon"/></a></li>
                <li className="icon"><a href="https:www.github.com/akbarabro"><Image src={github} alt="Icon"/></a></li>
                <li className="icon"><a href="https:www.behance.net/akbarabro"><Image src={behance} alt="Icon"/></a></li>
                </ul>
                </ul>
             </div>



        </div>
        
    )
}