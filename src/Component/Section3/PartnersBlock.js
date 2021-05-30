import React from 'react';
import {SwiperSlide } from 'swiper/react';
import './section3.css';

function PartnersBlock({content:{id,img}}) {

    return (
        // <SwiperSlide>
            <div className="partners-block">
                <div className="partners-img-container">
                        <img src={img} alt=""/>
                </div>
            </div>
        // </SwiperSlide>
    )
}

export default PartnersBlock
