import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import amazon_vector from "../../../assets/brands/amazon_vector.png";
import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import star_people from "../../../assets/brands/start_people.png";

const Brands = () => {
  const brandsLogo = [
    amazon_vector,
    amazon,
    casio,
    moonstar,
    randstad,
    star,
    star_people,
  ];

  const loopSlides = [...brandsLogo, ...brandsLogo];

  return (
    <div className="my-20 px-3">
      <h1 className="text-center font-bold text-xl md:text-2xl mb-10">
        We've helped thousands of sales teams
      </h1>

      <Swiper
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 12 },
          480: { slidesPerView: 3, spaceBetween: 15 },
          640: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 25 },
          1280: { slidesPerView: 6, spaceBetween: 30 },
        }}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={2500}
        modules={[Autoplay]}
      >
        {loopSlides.map((Logo, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img src={Logo} alt="Brand Logo" className="transition" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
