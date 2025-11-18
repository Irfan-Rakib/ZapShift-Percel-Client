import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Pages/SharedPages/Navbar/Navbar";
import Footer from "../Pages/SharedPages/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="">
      <div className="bg-base-100 shadow-sm">
        {" "}
        <Navbar />
      </div>

      <div className="container mx-auto">
        {" "}
        <Outlet />
      </div>
      <div className="bg-[#0B0B0B]">
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
