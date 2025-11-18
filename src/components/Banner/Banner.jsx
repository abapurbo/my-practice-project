import React from "react";
import banner1 from '../../assets/banner/banner1.png'
import banner2 from '../../assets/banner/banner2.png'
import banner3 from '../../assets/banner/banner3.png'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Banner() {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
        >
            <div>
                <img src={banner1} alt="banner-img-1" />
            </div>
            <div>
                <img src={banner2} alt="banner-img-2" />
            </div>
            <div>
                <img src={banner3} alt="banner-img-3" />
            </div>
        </Carousel>
    );
}
