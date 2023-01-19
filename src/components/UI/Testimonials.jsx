import React from 'react'
import './Testimonials.css'
import Slider from 'react-slick'

import picture1 from '../../assets/all-images/ava-4.jpg'
import picture2 from '../../assets/all-images/ava-1.jpg'
import picture3 from '../../assets/all-images/ava-2.jpg'
import picture4 from '../../assets/all-images/ava-3.jpg'


const Testimonials = () => {

    const settings = {
        dots: true,
        inifinite: true,
        autoplay: true,
        speed: 3000,
        swipeToSlide: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slideToShow: 2,
                    slidesToScroll: 1,
                    inifinite: true,
                    dots: true
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                },
            },
        ],
    }

  return (
    <>
      <Slider {...settings}>

        <div className="testimonial py-4 px-3">
            <p className="section-description">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas culpa dolorum reiciendis assumenda quis, aut eligendi rem molestiae, necessitatibus ut omnis.
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={picture1} alt="" className='w-25' />

                <div>
                    <h6 className="mb-0 mt-3">Britney Spears</h6>
                    <p className="section-description">Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p className="section-description">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas culpa dolorum reiciendis assumenda quis, aut eligendi rem molestiae, necessitatibus ut omnis.
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={picture2} alt="" className='w-25' />

                <div>
                    <h6 className="mb-0 mt-3">Ken Braisley</h6>
                    <p className="section-description">Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p className="section-description">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas culpa dolorum reiciendis assumenda quis, aut eligendi rem molestiae, necessitatibus ut omnis.
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={picture3} alt="" className='w-25' />

                <div>
                    <h6 className="mb-0 mt-3">Darwin Ruth</h6>
                    <p className="section-description">Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p className="section-description">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas culpa dolorum reiciendis assumenda quis, aut eligendi rem molestiae, necessitatibus ut omnis.
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={picture4} alt="" className='w-25' />

                <div>
                    <h6 className="mb-0 mt-3">Brody Mac</h6>
                    <p className="section-description">Customer</p>
                </div>
            </div>
        </div>
      </Slider>
    </>
  )
}

export default Testimonials