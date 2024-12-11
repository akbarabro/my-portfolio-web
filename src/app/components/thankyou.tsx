import React from "react";

interface ThankYouPopupProps {
    isVisible: boolean
}

const ThankYouPopup:React.FC<ThankYouPopupProps> = ({isVisible}) => {
    if(!isVisible) return null;
    return(
        <div className="thanku-popup ">
            <p className="thanku-text">Your download is starting <br /> <span className="thanku-text1">thank you for viewing my resume!</span> </p>
        </div>
    )
}

export default ThankYouPopup