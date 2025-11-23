import React from "react";
import Banner from "./Banner/Banner";
import HowItWorks from "./HowItWorks";
import OurServices from "./Our Service/OurServices";
import Brands from "./BrandsCarousel/Brands";
import ServiceSection from "./Service/ServiceSection";
import Banner2 from "./Banner/Banner2";

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <OurServices />
      <Brands />
      <ServiceSection />
      <Banner2 />
    </div>
  );
};

export default Home;
