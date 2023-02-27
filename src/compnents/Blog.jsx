import React from 'react';
import "./blog.css";
import image1 from "../images/blog1.png";


const Blog = () => {
  return (
    <>
    <div className='blog'   data-aos="zoom-in-up">
        <div className='container'>
            <div className='blog-heading'>
                <div>
                <h1 className='mb-4'>المدونة</h1>
                <p>هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية هذا النص يمكن استبداله بنص اخر بديل<br/> من معجم اللغة العربية</p>
            </div>
            </div>
            <div className='blog-content'>
                <div className='blog-detail'>
                    <div className='blog-img'>
                        <img src={image1} alt='df' />


                        <div className='blog-title'>
                        <p className='text-white ps-2 pe-2'>فهم تخصصات القهوة</p>

                        </div>
                    </div>
                    <h3 className='h5'>هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية</h3>
                    <p>هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية</p>
                </div>
                <div className='blog-detail'>
                    <div className='blog-img'>
                        <img src={image1} alt='df' />


                        <div className='blog-title'>
                        <p className='text-white ps-2 pe-2'>فهم تخصصات القهوة</p>

                        </div>
                    </div>
                    <h3 className='h5'>هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية</h3>
                    <p>هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية</p>
                </div>
                <div className='blog-detail'>
                    <div className='blog-img'>
                        <img src={image1} alt='df' />


                        <div className='blog-title'>
                            <p className='text-white ps-2 pe-2'>فهم تخصصات القهوة</p>

                        </div>
                    </div>
                    <h3 className='h5'>هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية</h3>
                    <p>هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية هذا النص يمكن استبداله بنص اخر بديل من معجم اللغة العربية</p>
                </div>





            </div>
        </div>
    </div>
    </>
  )
}

export default Blog