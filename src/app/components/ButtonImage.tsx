

import React from 'react';
import Image from 'next/image';
import myImage from "@/app/images/banner.jpg"



const MyComponent = () => {
    return (
      <div className='imgDiv'><br /><br />
        <Image
          src={myImage}
          alt="Description of the image"
          width={2000}/>
                      <div className="styleOnImage">
                <h1 className="heading">Hi <br />I'm Ghulam Akbar</h1>
                <p >
                    <span className="animate_text animation1">Graphic Designer</span>
                    <span className="animate_text animation2">Web Developer</span>
                     </p>    
            </div>
            </div>
    )}
export default MyComponent;