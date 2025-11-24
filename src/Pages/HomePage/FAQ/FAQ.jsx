import React from "react";

const FAQ = () => {
  return (
    <div className="my-20 px-4">
      <h1 className="text-center text-3xl font-extrabold text-secondary md:text-4xl tracking-tight mb-5">
        Frequently Asked Question (FAQ)
      </h1>
      <p className="text-center mt-4 mb-10 max-w-2xl text-lg text-gray-600 mx-auto leading-relaxed">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>{" "}
      <div className="space-y-5">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 ">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-sm">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
      </div>
      <button className="text-center  mt-6">See More FAQ’s</button>
    </div>
  );
};

export default FAQ;
