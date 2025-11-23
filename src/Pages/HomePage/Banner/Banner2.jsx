import React from "react";
import BgWave from "../../../assets/be-a-merchant-bg.png";
import BoxIllustration from "../../../assets/location-merchant.png";

const Banner2 = () => {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-secondary text-white my-14">
      {/* TOP BG WAVE (desktop only) */}
      <img
        src={BgWave}
        alt="wave"
        className="absolute hidden md:block top-0 left-0 w-full pointer-events-none select-none"
        style={{
          objectFit: "cover",
          height: "100%",
          opacity: 0.35,
        }}
      />

      {/* MAIN CONTENT */}
      <div
        className="
          relative z-10 max-w-6xl mx-auto px-8 py-16 
          flex flex-col md:flex-row 
          items-center justify-between gap-10
        "
      >
        {/* IMAGE — mobile top, desktop right */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
          <img
            src={BoxIllustration}
            alt="Illustration"
            className="w-[75%] md:w-[80%] object-contain"
          />
        </div>

        {/* TEXT — mobile bottom, desktop left */}
        <div className="w-full md:w-1/2 space-y-6 order-2 md:order-1">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>

          <p className="text-gray-200 leading-relaxed max-w-md">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-6 py-3 bg-primary text-black rounded-full font-semibold shadow-md hover:opacity-90 transition">
              Become a Merchant
            </button>

            <button className="px-6 py-3 border border-primary text-primary rounded-full font-semibold hover:bg-[#D4FF79] hover:text-black transition">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
