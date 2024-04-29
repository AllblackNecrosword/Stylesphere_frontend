import React from "react";

const readProduct = ({onClose}) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg mt-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Product Details</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div>
          <p className="font-semibold">Name: </p>
          <p>Apple</p>
        </div>
        <div>
          <p className="font-semibold">Category: </p>
          <p>Ball</p>
        </div>
        <div>
          <p className="font-semibold">Price: </p>
          <p>1233</p>
        </div>
        <div>
          <p className="font-semibold">Quantity: </p>
          <p>34</p>
        </div>
        <div>
          <p className="font-semibold">Description: </p>
          <p>feafew</p>
        </div>
        {/* You can add more details here */}
      </div>
    </div>
  );
};

export default readProduct;
