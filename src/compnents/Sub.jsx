
import React from 'react';
import image from "../images/Group 839.png";
import "./course.css";
import "./sub.css"

import {AiOutlineArrowLeft} from "react-icons/ai";


const Sub = () => {
  return (
    <>
     <div className='courses Sub'  data-aos="fade-up-left">
        <div className='container courses-cont'>
            <div className='courses-right'>
                <h1 className='mb-5'>اشتراكات القهوة</h1>
                <p>
                في كنزان، تأتيا حبة البن بأصل واحد من الطبية، من أرض تملك خصائص منشئها تختلف بإختلاف حاملها، وإلى متذوقها، بعضها لاذع مُر، وأخرى مرهف حلو، إلى سلسل ومعقّد، نجذّر من خلال التذوق لدينا هدف يميز                </p>
                <p className='contct'>أعرف المزيد <AiOutlineArrowLeft /></p>
            </div>
        
        </div>
     </div>
    </>
  )
}

export default Sub
