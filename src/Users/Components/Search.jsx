import React from "react";
import BlackLogo from "../../images/SS-black.png";

const Search = ({ onClose }) => {
  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-gray-900 bg-opacity-50 h-screen ">
      <div className="absolute top-0 left-0 w-full h-full ">
        <div className="bg-white p-4  shadow-lg flex justify-between">
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-shrink-0">
              <img src={BlackLogo} alt="logo" className="w-5 h-auto" />
            </div>
          </div>
          {/* <div className="flex items-center justify-center"> */}

          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-3xl py-1 px-9 w-96 focus:outline-none focus:border-gray-500"
          />
          {/* </div> */}
          <button
            onClick={onClose}
            className="text-black font-extrabold hover:text-gray-900 focus:outline-none"
          >
            Cancel
          </button>

          {/* Add search results here */}
        </div>
      </div>
    </div>
  );
};

export default Search;
