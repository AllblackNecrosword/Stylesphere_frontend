
import React, { useState } from "react";
import Home from "../Pages/Home";
import OrderHistory from "../Pages/OrderHistory";

const Profile = () => {
  const [activeOption, setActiveOption] = useState("ACCOUNT"); // Set default option to 'ACCOUNT'

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="flex h-screen">
      <div className="w-60 sticky top-0 h-screen overflow-y-auto border rounded-lg text-center font-semibold mt-12">
        <div
          className={`mt-14 cursor-pointer hover:bg-blue-100 p-3 ${
            activeOption === "ACCOUNT" && "bg-blue-100"
          }`}
          onClick={() => handleOptionClick("ACCOUNT")}
        >
          MY ACCOUNT
        </div>
        <div
          className={`mt-8 cursor-pointer hover:bg-blue-100 p-3 ${
            activeOption === "HISTORY" && "bg-blue-100"
          }`}
          onClick={() => handleOptionClick("HISTORY")}
        >
          ORDER HISTORY
        </div>
        <div
          className={`mt-8 cursor-pointer hover:bg-blue-100 p-3 ${
            activeOption === "CART" && "bg-blue-100"
          }`}
          onClick={() => handleOptionClick("CART")}
        >
          MY CART
        </div>
        <div
          className={`mt-8 cursor-pointer hover:bg-blue-100 p-3 ${
            activeOption === "WISHLIST" && "bg-blue-100"
          }`}
          onClick={() => handleOptionClick("WISHLIST")}
        >
          MY WISHLIST
        </div>
        <div
          className={`mt-8 cursor-pointer hover:bg-red-100 p-3 ${
            activeOption === "LOGOUT" && "bg-red-100"
          }`}
          onClick={() => handleOptionClick("LOGOUT")}
        >
          LOGOUT
        </div>
      </div>
      <div className="flex-1">
        {activeOption && (
          <div className="ml-4 ">
            {/* Render content based on activeOption */}
            {activeOption === "ACCOUNT" && <Home />}
            {activeOption === "HISTORY" && <OrderHistory />}
            {/* {activeOption === 'CART' && <div>Cart content</div>}
            {activeOption === 'WISHLIST' && <div>Wishlist content</div>}
            {activeOption === 'LOGOUT' && <div>Logout content</div>} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
