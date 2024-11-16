"use client"
import Image from "next/image"
import linkedin from "@/app/images/linkedin.png" ;
import github from "@/app/images/gothub.png" ;
import behance from "@/app/images/behance.png" ;
import { usePathname } from "next/navigation";

export default function Header () {
    const pathname: string = usePathname();
    return (
        <div className="header">
            <ul className="headerB">
                <li className={`buttons ${pathname === '/' ? 'active' : ''}`}><a href="\">Home</a></li>
                <li className={`buttons ${pathname === '/services' ? 'active' : ''}`}><a href="/services">Services</a></li>
                <li className={`buttons ${pathname === '/about' ? 'active' : ''}`}><a href="/about">About</a></li>
                <li className={`buttons ${pathname === '/Portfolio' ? 'active' : ''}`}><a href="/Portfolio">Portfolio</a></li>
                <li className={`buttons ${pathname === '/contact-me' ? 'active' : ''}`}><a href="/contact-me">Contact Me</a></li>
                <li className="contact"><a href="/contact">Contact Me</a></li>
                <ul className="icons">
                <li className="icon"><a href="www.linkedin.com/in/akbarabro" target="_main" ><Image src={linkedin} alt="Icon"/></a></li>
                <li className="icon"><a href="www.github.com/akbarabro"><Image src={github} alt="Icon"/></a></li>
                <li className="icon"><a href="www.behance.net/akbarabro"><Image src={behance} alt="Icon"/></a></li>
                </ul>
            </ul>
        </div>
    )
}