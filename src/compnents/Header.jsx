import React from 'react';
import {AiOutlineArrowLeft} from "react-icons/ai";
import "./header.css";
import 'aos/dist/aos.css';

const Header = () => {
  return (
    <>
    <div className='header' data-aos="fade-down"
>
        <div className='container cont mb-5'>
            <div className='heading'>
                
            <h1 className='mb-5'>مجتمع كنزان</h1>
                <p className='mb-3 text-black-50'> فى كنزان,نحاكى الإختلافات المتقدمة.نلبى الطبقات الأتيةإلينا<br/>للتذوق للتجربة </p>
                <p className='contct'>تواصل معنا <AiOutlineArrowLeft /></p>
            </div>
        
        </div>

    </div>

    </>
  )
}

export default Header
