import React from 'react';
import './section4.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import SwiperCore, { Autoplay,  Pagination} from 'swiper';
import Testi_block from './Testi_block';

SwiperCore.use([Pagination, Autoplay]);

function Testimonial() {

    const testimonials = [
         {
            id:1,
            name:"Ashwin",
            designation: "CEO",
            img: process.env.PUBLIC_URL + '/image/a.png',
            description:"Ashish is an excellent web developer as he is hard working and dedicated to his job, even he has the best knowledge of colour schemes. His work is quite appreciable, one can easily trust on him and his work anyday.",
        },
        {
            id:2,
            name:"Sajid Shaikh",
            designation: "Developer",
            img: process.env.PUBLIC_URL + '/image/a.png',
            description:"Ashish has shown steadfast commitment to his work always. He has always been patient, consistent and great at what he does.",
        },
        {
            id:3,
            name:"Naved Shaikh",
            designation: "Developer",
            img: process.env.PUBLIC_URL + '/image/a.png',
            description:"Ashish had worked as a Web developer on one of our projects. We started with only a rough idea in the mind yet the quality of the work delivered was fabulous and far more than what was expected.",
        }
    ]
    
    return (
        <div className="testimonials">
            <div className="container">

                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    >

                        {testimonials.map(testimonial =>(
                           <SwiperSlide key={testimonial.id}>
                               <Testi_block content={testimonial}/>
                           </SwiperSlide>
                        ))}
                </Swiper>
                   
            </div> 
            <img src="image/left-leaf.png" className="leaf" alt="oranic" />
        </div>
    )
}

export default Testimonial
