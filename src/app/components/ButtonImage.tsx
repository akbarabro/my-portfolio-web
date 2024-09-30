
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';
import React from 'react';
import Image from 'next/image';
import myImage from "@/app/components/banner.jpg"



const MyComponent: React.FC = () => {
    return (
      <div>
        <Image 
          src={myImage} 
          alt="Description of the image"
          width={2000} 
        />
        <ul className='ButtonImage'>
          <li>
          <button className='portfolio'>
            Portfolio
        </button>
          </li>
          <li>
          <button className='hire'>
          Hire Me
        </button>
          </li>
        </ul>
      </div>
    );
  };
  
  export default MyComponent;