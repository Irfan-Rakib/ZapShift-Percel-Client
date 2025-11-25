import React from "react";

const FAQ = () => {
  return (
    <div className="my-20 px-4">
      <h1 className="text-center text-3xl md:text-4xl font-extrabold text-secondary tracking-tight mb-4">
        Frequently Asked Question (FAQ)
      </h1>

      <p className="text-center mt-2 mb-10 max-w-2xl text-gray-600 mx-auto leading-relaxed">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>

      <div className="space-y-4 max-w-3xl mx-auto">
        {/* FAQ ITEM */}
        <div className="collapse collapse-arrow bg-white border border-gray-200 rounded-xl shadow-sm transition-all">
          <input type="radio" name="faq" defaultChecked />
          <div className="collapse-title text-base font-semibold py-4">
            How does this posture corrector work?
          </div>
          <div className="collapse-content text-sm  text-gray-600 leading-relaxed">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-white border border-gray-200 rounded-xl shadow-sm">
          <input type="radio" name="faq" />
          <div className="collapse-title text-base font-semibold py-4">
            Is it suitable for all ages and body types?
          </div>
          <div className="collapse-content text-sm text-gray-600 leading-relaxed">
            Yes, it is designed to fit a wide range of users comfortably.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-white border border-gray-200 rounded-xl shadow-sm">
          <input type="radio" name="faq" />
          <div className="collapse-title text-base font-semibold py-4">
            Does it really help with back pain?
          </div>
          <div className="collapse-content text-sm text-gray-600 leading-relaxed">
            It supports your posture which can significantly reduce spinal
            strain.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-white border border-gray-200 rounded-xl shadow-sm">
          <input type="radio" name="faq" />
          <div className="collapse-title text-base font-semibold py-4">
            How do I know when it's back in stock?
          </div>
          <div className="collapse-content text-sm text-gray-600 leading-relaxed">
            You will receive an email notification immediately once it is
            restocked.
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <button className="bg-primary font-bold px-6 py-3 rounded-xl   transition flex items-center gap-2 mx-auto shadow">
          See More FAQ’s
          <span className="inline-block bg-black text-white w-7 h-7 rounded-full flex items-center justify-center">
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default FAQ;
