import React from "react";
import {
  FaTruckPickup,
  FaMoneyBillWave,
  FaWarehouse,
  FaBuilding,
} from "react-icons/fa";

const HowItWorks = () => {
  const services = [
    {
      icon: <FaTruckPickup className="text-3xl text-secondary mb-4" />,
      title: "Booking Pick & Drop",
      text: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-secondary mb-4" />,
      title: "Cash On Delivery",
      text: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <FaWarehouse className="text-3xl text-secondary mb-4" />,
      title: "Delivery Hub",
      text: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <FaBuilding className="text-3xl  text-secondary mb-4" />,
      title: "Booking SME & Corporate",
      text: "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];

  return (
    <div className="w-full py-10">
      <h1 className="text-secondary font-bold text-2xl mb-8 px-4">
        How it Works
      </h1>
      <div className="flex flex-wrap gap-6 justify-center ">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full max-w-xs bg-gray-50  rounded-xl shadow-md p-6 hover:shadow-md transition"
          >
            {service.icon}
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {service.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
