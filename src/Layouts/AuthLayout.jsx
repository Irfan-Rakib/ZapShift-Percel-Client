import React from "react";
import Logo from "../Components/Logo/Logo";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";
const AuthLayout = () => {
  return (
    <div className="container mx-auto">
      <nav>
        {" "}
        <Logo />
      </nav>
      <div className="flex items-center">
        {" "}
        <div className="flex-1">
          <Outlet />
        </div>
        <div className="flex-1">
          <img src={authImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
