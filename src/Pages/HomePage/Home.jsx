import React from "react";
import Banner from "./Banner/Banner";
import HowItWorks from "./HowItWorks";
import OurServices from "./Our Service/OurServices";
import Brands from "./BrandsCarousel/Brands";

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <OurServices />
      <Brands />
    </div>
  );
};

export default Home;
