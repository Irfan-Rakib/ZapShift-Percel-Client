import React from "react";
import {
  LuTruck,
  LuClock,
  LuGlobe,
  LuPackageSearch,
  LuBuilding2,
  LuRefreshCcw,
} from "react-icons/lu";

const OurServices = () => {
  const services = [
    {
      icon: <LuClock className="text-3xl text-teal-700" />,
      title: "Express & Standard Delivery",
      text: "We deliver parcels within 24–72 hours across major cities. Express options available within Dhaka.",
    },
    {
      icon: <LuGlobe className="text-3xl text-teal-700" />,
      title: "Nationwide Delivery",
      text: "We deliver parcels nationwide with home delivery in every district, ensuring timely and reliable service.",
    },
    {
      icon: <LuPackageSearch className="text-3xl text-teal-700" />,
      title: "Fulfillment Solution",
      text: "Includes inventory management, packaging, processing, and complete order handling support.",
    },
    {
      icon: <LuTruck className="text-3xl text-teal-700" />,
      title: "Cash on Home Delivery",
      text: "Cash collection service anywhere across Bangladesh with safe and verified delivery.",
    },
    {
      icon: <LuBuilding2 className="text-3xl text-teal-700" />,
      title: "Corporate Service / Contract in Logistics",
      text: "Tailored logistics for businesses including warehousing and inventory support.",
    },
    {
      icon: <LuRefreshCcw className="text-3xl text-teal-700" />,
      title: "Parcel Return",
      text: "Customers can easily return or exchange products using our reverse logistics system.",
    },
  ];

  return (
    <div className="w-full bg-[#03312E] text-white py-14 px-20 rounded-3xl mt-10">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-3">Our Services</h2>
        <p className="text-sm text-gray-200">
          Enjoy fast, reliable parcel delivery with real-time tracking and
          hassle-free service. From personal packages to business shipments — we
          deliver on time, every time.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-2xl py-10 shadow-md  bg-white text-black hover:bg-primary"
          >
            {/* Icon */}
            <div className="w-14 h-14 mx-auto mb-4 bg-[#E8F8F6] rounded-full flex items-center justify-center">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-center text-secomdary mb-2">
              {service.title}
            </h3>

            {/* Text */}
            <p className="text-sm text-center text-gray-700 leading-relaxed">
              {service.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
