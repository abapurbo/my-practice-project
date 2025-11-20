import React from "react";

import amazon_vector from '../../assets/brands/amazon_vector.png'
import amazon from '../../assets/brands/amazon.png'
import star from '../../assets/brands/star.png'
import start_people from '../../assets/brands/start_people.png'
import moonstar from '../../assets/brands/moonstar.png'
import casio from '../../assets/brands/casio.png'
import randstad from '../../assets/brands/randstad.png'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from "swiper/modules";
const brandLogo=[amazon_vector,amazon,star,start_people,moonstar,casio,randstad]

export default function Brands() {
  return (
    <Swiper
       loop={true}
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={20}
            grabCursor={true}
            modules={[Autoplay]}
            autoplay={{
                delay: 800,
                disableOnInteraction:false,
            }}
            >
        {
          brandLogo.map((logo,inx)=>(
            <SwiperSlide key={inx}>
              <img src={logo} alt="brans_logo" />
            </SwiperSlide>
          ))
        }
    </Swiper>
  )
}
