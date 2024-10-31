import React from "react";

const ThankYouMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-white">
      {/* Envelope Icon */}
      <div className="p-4 mb-4 rounded-full bg-[#F2871C]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-10 h-10 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 12l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </div>
      {/* Thank You Message */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Thanks for submitting!
      </h1>
      <p className="text-gray-600 mb-6">Your message has been sent!</p>
      {/* Buttons */}
      <div className="flex gap-4">
        <a
          href="/"
          className="px-6 py-3 font-semibold text-white rounded-full bg-[#F2871C] hover:bg-opacity-90 transition"
        >
          Go Home
        </a>
        <a
          href="tel:+971509344668"
          className="px-6 py-3 font-semibold text-white rounded-full bg-[#F2871C] hover:bg-opacity-90 transition"
        >
          Call Now
        </a>
      </div>
    </div>
  );
};

export default ThankYouMessage;
