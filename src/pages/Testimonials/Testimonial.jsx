import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "../../components/Card/TestimonialCard";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
const reviewPromise = fetch('/reviews.json').then(res => res.json());
export default function Testimonial() {
    const reviews = use(reviewPromise)
    console.log(reviews)
    return (
        <Swiper
            loop={true}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
                rotate: 10,
                stretch: '10%',
                depth: 200,
                modifier: 1,
                scale:0.75,
                slideShadows: true
            }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false
            }}

            pagination={true}
            modules={[Autoplay, Pagination, EffectCoverflow]}
        >
            {
                reviews.map((card, index) => (
                    <SwiperSlide key={index}>
                        <TestimonialCard card={card}></TestimonialCard>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}
