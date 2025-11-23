import React, { use } from "react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import Img from "../../../assets/customer-top.png";
const Reviews = ({ ReviewsPromise }) => {
  const ReviewsData = use(ReviewsPromise);

  return (
    <div className="my-20 bg-gray-100">
      <div className=" py-16 px-4 flex flex-col items-center justify-center text-center">
        <img src={Img} alt="" className="mb-8" />
        {/* 2. Main Title */}
        <h2 className="text-3xl font-extrabold text-secondary md:text-5xl tracking-tight mb-5">
          What our customers are sayings
        </h2>

        {/* 3. Subtitle/Description */}
        <p className="mt-4 max-w-2xl text-lg text-gray-600 mx-auto leading-relaxed">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 30,
          stretch: "70%",
          depth: 200,
          modifier: 1,
          scale: 0.75,

          slideShadows: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="mySwiper w-full max-w-4xl"
      >
        {ReviewsData.map((Review) => (
          <SwiperSlide key={Review.id}>
            <ReviewCard Review={Review}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
