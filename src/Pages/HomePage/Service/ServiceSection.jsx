import React from "react";
import tracking from "../../../assets/live-tracking.png";
import safeDelivery from "../../../assets/safe-delivery.png";

const services = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    img: tracking,
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    img: safeDelivery,
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    img: safeDelivery,
  },
];

const ServiceSection = () => {
  return (
    <div className="w-full mx-auto px-4 py-10 space-y-6">
      {services.map((item) => (
        <div
          key={item.id}
          className="bg-gray-50 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-md"
        >
          {/* Left Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={item.img}
              alt={item.title}
              className="w-48 md:w-56 object-contain"
            />
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block border-r border-dotted border-gray-400 h-28"></div>

          {/* Right Content */}
          <div className="w-full ">
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSection;
