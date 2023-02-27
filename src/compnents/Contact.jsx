import React from 'react';
import "./contact.css";
import map from "../images/google-maps-apparently-told-someone-to-drive-into-a-mango-tree-the-internet-goes-nuts-177726_1.jpg";
import {AiOutlineMail} from "react-icons/ai";
import {BiPhoneCall} from "react-icons/bi";
import {BsInstagram,BsWhatsapp} from "react-icons/bs";
import {FiFacebook,FiTwitter} from "react-icons/fi";


const Contact = () => {
  return (
   <>
   <div className='contact'>
    <div className='container'>
    <div className='contact-heading'>
        <div>
            <h1 className='mb-4'>تواصل معنا</h1>
            <p>كوب قهوة لذيذة خير ما نبدأ فيه حديثنا, تواصل معنا عبر</p>
        </div>
    </div>
    <div className='contact-img'>
        <img src={map} alt="ff" />
    </div>
    <div className='contact-type'>
        <div>
            <h3 className='h4 mb-2'>اشترك في النشرة الاخبارية</h3>
            <p>ادخل البريد الالكتروني ليصلك عروضنا واخبارنا</p>
            <p className='mt-5 text-end'>البريد الالكتروني   <AiOutlineMail /></p>
        </div>
        <div>
            <h3 className='h4 mb-5' >اتصل بنا</h3>
            <p className='phone'> <BiPhoneCall />   012xxxx</p>
        </div>
        <div>
            <h3 className='h4 mb-5'>وسائل التواصل الاجتماعي</h3>
            <div className='social-icons'>
                <BsInstagram />
                <FiFacebook />
                <FiTwitter />
                <BsWhatsapp />
            </div>
        </div>
    </div>
   </div>
   </div>
   </>
  )
}

export default Contact