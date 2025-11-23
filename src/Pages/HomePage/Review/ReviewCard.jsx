import { Quote } from "lucide-react";
import React from "react";

const ReviewCard = ({ Review }) => {
  const { review, user_photoURL, userName, userDesignation } = Review;

  return (
    <div className="bg-gray-50 rounded-xl shadow-md p-8 max-w-sm mx-auto mb-10 ">
      {/* Professional Quote Icon */}
      <div className="text-blue-300 mb-4 leading-none">
        <Quote size={30} />
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-base mb-6 leading-relaxed">{review}</p>

      {/* Dotted Divider */}
      <div className="border-t border-dashed border-gray-300 my-6"></div>

      {/* User Info */}
      <div className="flex items-center space-x-4">
        {user_photoURL ? (
          <img
            className="w-12 h-12 rounded-full object-cover bg-secondary"
            src={user_photoURL}
            alt={`${userName}'s avatar`}
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white text-lg font-semibold">
            {userName?.charAt(0) || "A"}
          </div>
        )}

        <div>
          <p className="text-secondary font-semibold text-lg">{userName}</p>
          <p className="text-gray-500 text-sm">{userDesignation}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
