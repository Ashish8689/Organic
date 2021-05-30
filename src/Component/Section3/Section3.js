import React from 'react';
import './section3.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import SwiperCore, { Autoplay,  Pagination} from 'swiper';
import PartnersBlock from './PartnersBlock';
import SectionHeader from '../SectionHeader/SectionHeader'

SwiperCore.use([Autoplay , Pagination]);

function Section3() {

    const partners = [
         {
            id:1,
            img: process.env.PUBLIC_URL + '/image/t1.png',
        },
        {
            id:2,
            img: process.env.PUBLIC_URL + '/image/t2.png',
        },
        {
            id:3,
            img: process.env.PUBLIC_URL + '/image/t3.png',
        }
       
    ]
    
    return (
        <div className="section-3">
            <div className="container">
                <SectionHeader 
                    title="Proudly presented by" 
                    para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua." 
                />


                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    // navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        320: {
                        slidesPerView: 1,
                        },
                        500: {
                        slidesPerView: 1,
                        },
                        640: {
                        slidesPerView: 2,
                        },
                        768: {
                        slidesPerView: 2,
                        },
                        1200: {
                        slidesPerView: 4,
                        }
                    }}
                    >

                        {partners.map(partner =>(
                           <SwiperSlide key={partner.id}>
                               <PartnersBlock content={partner}/>
                           </SwiperSlide>
                        ))}
                </Swiper>
                   
            </div> 

        </div>
    )
}

export default Section3
