"use client"
import { useState } from "react";
import ThankYouPopup from "./thankyou";
import ConfettiButton from './confettiEffect';


export default function ResumeButton() {
    const [isPopupVisible, setIsPopupVisible] = useState(false)
    const handleDownloadResume = () => {
        setIsPopupVisible(true)
        setTimeout(()=>{
            setIsPopupVisible(false)
        },3000)
    }

    return (

        <a href="/resume.pdf" download="Resume.pdf">
            <p onClick={handleDownloadResume}><ConfettiButton /></p><ThankYouPopup isVisible={isPopupVisible}/>
        </a>
        

    );
}