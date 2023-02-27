import React from 'react';
import image1 from "../images/KANZAN_Insta-021-2-2048x2048.png";
import "./events.css";
import {AiOutlineArrowLeft} from "react-icons/ai";


const Events = () => {
  return (
   <>
      <div className='events'>
        <div className='container event-cont'>
            <div className='event-left  '  data-aos="fade-left" >
            <div class="card">
           <img src={image1} alt="cup" />
          <div className='card-content'>
          <p className='text-black-50 mt-3  h5'>تجربة شاي الضحى</p>
            <p className='mt-4 mb-5 fw-bold'>يبدأ من:60س ر غ</p>
          </div>
          <div>
          <p className='fw-bold text-center border-top pt-2 add'> احجز معنا الان</p>
          </div>
        </div>
            </div>
            <div className='event-right'data-aos="fade-right">
                <h1 className='mb-4'>الفعاليات القادمة</h1>
                <p className='mb-3 text-black-50'>نغمس مزاجنـا في كوب شاي، لفكرة لاتغادر البال أبدًا بصحبة من تحبون نستضيفكم مع توليفة لرحلة تثقيفية عن الشاي المختص وصنع أكوابكم متقنة المزاج ومشاركتنـا بأجود خيارات المخبوزات من كنزان</p>
                <p className='first'>إعرف المزيد<AiOutlineArrowLeft /></p>
            </div>
        </div>
      </div>
   </>
  )
}

export default Events