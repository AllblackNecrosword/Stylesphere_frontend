import React, { useState } from "react";

const OTP = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="flex flex-col items-center">
        <h2 className="m-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-500">
          Verify your OTP
        </h2>
        <p className="pb-5">Please enter the verification code sent to </p>
        <div className="flex items-center">
          <input
            type="text"
            className="w-32 h-12 text-2xl mx-1 text-center border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <button className="ml-4 px-4  py-2 mt-5 bg-black text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Check OTP
        </button>
      </div>
    </div>
  );
};

export default OTP;
