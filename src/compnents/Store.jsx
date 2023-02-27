import React from 'react';
import "./store.css";
import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
import image4 from "../images/cup-coffee-with-cream-coffee-beans-chocolate-spices-dark-wooden-table-world-coffee-day.png";
import {AiOutlineShoppingCart} from "react-icons/ai";

const Store = () => {
  return (
  <>
  <div className='store'>
    <div className='container store-content'>

        <div className='store-heading'>
            <div>
            <h2 className='mb-4'>متجر كنزان</h2>
            <p>انتقل إلى عالمك الخاص، إلى رائحة منزلك، إلى ضيافتك وطموحاتك، إلى التخيلات العميقة لمستقبلك، إلى الروح التي تنتمي بأصلبها<br/> للطبيعة ، وحبة البن الذهبية</p>
            </div>
        </div>
        <div className='store-types' data-aos="flip-left">
            <ul>
                <li><div className='store-page first'><span className='ms-2'><img src={image1} alt="type" /></span><p>التحميص</p></div></li>
                <li><div className='store-page'><span className='ms-2'><img src={image1} alt="type" /></span><p>القهوة</p></div></li>
                <li><div className='store-page'><span className='ms-2'><img src={image2} alt="type" /></span><p>مطاحن القهوة</p></div></li>
                <li><div className='store-page'><span className='ms-2'><img src={image3} alt="type" /></span><p>معدات الاسبريسو</p></div></li>
                <li><div className='store-page'><span className='ms-2'><img src={image2} alt="type" /></span><p>معدات القهوة</p></div></li>
                <li><div className='store-page'><span className='ms-2'><img src={image1} alt="type" /></span><p>مستلزمات القهوة</p></div></li>
                
            </ul>
        </div>

        <div className='store-cards' v data-aos="fade-up">
        <div class="card">
           <img src={image4} alt="cup" />
          <div className='card-content'>
          <p className='text-black-50 mt-3  h5'>قهوة مختصة مختلطة الأصل</p>
            <p className='mt-4 mb-5 fw-bold'>15ر.س</p>
          </div>
          <div>
          <p className='fw-bold text-center border-top pt-2 add'><AiOutlineShoppingCart/>  اضف الى العربة</p>
          </div>
        </div>

        <div class="card">
           <img src={image4} alt="cup" />
          <div className='card-content'>
            <p className='text-black-50 mt-3  h5'>قهوة مختصة مختلطة الأصل</p>
            <p className='mt-4 mb-5 fw-bold'>15ر.س</p>
          </div>
          <div>
          <p className='fw-bold text-center border-top pt-2 add'><AiOutlineShoppingCart/>  اضف الى العربة</p>
          </div>
        </div>
        <div class="card">
           <img src={image4} alt="cup" />
          <div className='card-content'>
          <p className='text-black-50 mt-3  h5'>قهوة مختصة مختلطة الأصل</p>
            <p className='mt-4 mb-5 fw-bold'>15ر.س</p>
          </div>
          <div>
          <p className='fw-bold text-center border-top pt-2 add'><AiOutlineShoppingCart/>  اضف الى العربة</p>
          </div>
        </div>
        <div class="card">
           <img src={image4} alt="cup" />
          <div className='card-content'>
          <p className='text-black-50 mt-3  h5'>قهوة مختصة مختلطة الأصل</p>
            <p className='mt-4 mb-5 fw-bold'>15ر.س</p>
          </div>
          <div>
            <p className='fw-bold text-center border-top pt-2 add'><AiOutlineShoppingCart/>  اضف الى العربة</p>
          </div>
        </div>

    </div>
  </div>
  </div>
  </>
  )
}

export default Store;
