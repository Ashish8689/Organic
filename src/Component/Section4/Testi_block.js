import React from 'react';
import {SwiperSlide } from 'swiper/react';
import './section4.css';

function Testi_block({content:{id,name,designation,description,img}}) {

    return (
        // <SwiperSlide>
            <div className="testimonial-block">
                <div className="testimonial-img-container">
                    <img src="image/quote.png" className="quote" alt="acc" />
                    <div className="testimonial-mini-img-container">
                        <img src={img} alt="acc"/>
                    </div>   
                </div>

                <div className="testimonial-content">
                    <h5 className="testimonial-name">{name}</h5>

                    <div className="star-container">
                        <img src="image/star.png" alt="" />
                        <img src="image/star.png" alt="" />
                        <img src="image/star.png" alt="" />
                        <img src="image/star.png" alt="" />
                        <img src="image/star.png" alt="" />
                    </div>
                    <p className="testimonial-para">{description}</p>
                </div>
            </div>
        // </SwiperSlide>
    )
}

export default Testi_block
