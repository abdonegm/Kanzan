import React from 'react';
import "./about.css";
import image from "../images/Group 1494.png";
import {AiOutlineArrowLeft} from "react-icons/ai";

const About = () => {
  return (
    <>
    <div className='about'>
    <div className='about-content container'>
        <div className='image'>
           <img src={image} alt="imagse" />
        </div>
   
    <div className='about-info'>
        <h1 className='mb-5 '>عن كنزان</h1>
        <p className='mb-3 text-black-50'>
        بنَفس اليدِ المعطاءة التي ترعرعنا بواحات أحسائنا ، وتنفّسنا مجرَى ينبوعها، وألِفت أعييننا سعف نخلِها، ومُدَّت بأرواحنا تَجرُّدها من كلِّ نتوءات خارجية، كَبرنا بِرعاها، بخريرٍ مائها، برویية وھَناء.. من قلب الأحساء، إلى العالم من حَولنا، إنطلقنا كما ربينا على رُقعتها، بنفس الرُّوح الأحسائية ، نحملُ على عاتقنا مِعولٌ وطني نفخرُ بإرثه، نلقّن دَرسِه، نجتھدُ من أجلِه، ونُسافرُ لنقتاتُ على عيشِه، لنصلُ أخيرًا.. كنزان ،دارُ العطاء والنَّماء.
        </p>
        <p className='contct'>تواصل معنا <AiOutlineArrowLeft /></p>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default About
