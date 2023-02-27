import React from 'react';
import image from "../images/top-view-coffee-cup-with-chemex-book.png";
import "./course.css";
import {MdStickyNote2} from "react-icons/md";
import {AiOutlineArrowLeft} from "react-icons/ai";


const Courses = () => {
  return (
    <>
     <div className='courses'>
        <div className='container courses-cont'>
            <div className='courses-right' data-aos="flip-right" >
                <h1 className='mb-5'>الدورات التدريبية</h1>
                <p>
                أتينا لبوّابة كنزان ، محمّلين بالرُّوح الأحسائية ، المُخضرمة بسنين من المعَاوِل والتنقُّل والفَخر، لنقدّم لأجيالنا الطَّموحَة، الدعم المتكامل لتثقيفه، ولتلقين درسه ، حاملين قصّة الشَّرق الحيّ في قلوبنا، القصة الأصيلة كما خُلِقت ، عبر أكاديمية قهوة مُتخصّصة بالتجربة النَّوعية الخلاّقة، قاصدين منها مُجتمعنا السُّعودي الشُّغوف بالصّنعة المحلية ، الطَّموح لتوثيق تجربته من الخطوة الأولى، وإلى إحتراف ذائقته، وصولا إلى المنشآت المختصة بالتدريب ، حيث نوفر كامل إحتياجاته، تحت سفح .كنزان السخي
                </p>
                <p className='contct'>أعرف المزيد <AiOutlineArrowLeft /></p>
            </div>
            <div className='courses-left' data-aos="flip-left">
                <div className='card'>
                    <img src={image} alt="asd" />
                    <p className='mt-4'>الحبوب الخضراء</p>
                    <p className='text-black-50'>هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية هذا النص يمكن استبداله بنص اخر بديل</p>
                    <p>بواسطة أحمد</p>
                    <p className='fw-bold text-center border-top pt-2 add'>  ابدأ الان    <MdStickyNote2 /></p>
                </div>

                
            </div>


        </div>
     </div>
    </>
  )
}

export default Courses
