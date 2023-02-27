import React from 'react';
import "./footer.css";
import logo from "../images/Kanzan_Logo 2(1).png";

const Footer = () => {
  return (
   <>
   <div className='footer'>
    <div className='footer-head'>
        <img src={logo} alt="asd" className='mb-3'/>
        <p>بنَفس اليدِ المعطاءة التي ترعرعنا بواحات أحسائنا ، وتنفّسنا مجرَى ينبوعها، وألِفت أعييننا سعف نخلِها، <br/>ومُدَّت بأرواحنا تَجرُّدها من كلِّ نتوءات خارجية، كَبرنا بِرعاها، بخريرٍ مائها، برویية وھَناء..</p>

    </div>
    <div className='footer-links'>
    <ul>
        <li>الرئيسية</li>
        <li>عن كنزان</li>
        <li>خدماتنا</li>
        <li>متجر كنزان</li>
        <li>الدورات التدريبية</li>
        <li>المدونة</li>
        <li>الاشتراكات</li>
    </ul>
    </div>
   </div>
   </>
  )
}

export default Footer