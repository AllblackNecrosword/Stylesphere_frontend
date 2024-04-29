import React from "react";
import ReactStars from "react-stars";

const ReadCard = ({ onClose, product }) => {
  console.log("product detail", product);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
      <div className="absolute top-16 bg-gray-200 p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-3/4 overflow-scroll">
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
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt="Product"
            className="w-64 h-64 object-cover"
          />
        </div>
        {/* Product Details */}
        <div className="mt-4">
          <h2 className="text-2xl font-bold font-serif">{product.name}</h2>
          <ReactStars
            count={5}
            size={24}
            color2={"gold"}
            value={5}
            edit={false}
          />
          <span className="title-font font-bold text-xl text-red-600">
            $1200
          </span>
          <p className="leading-relaxed py-2 text-justify">
            {product.description}
          </p>
          <p className="font-bold mt-3">Product Category: {product.category}</p>
        </div>
        {/* Product Sizes */}
        <div className="flex mt-3 items-center pb-5 border-b-2 border-gray-200 mb-5">
          <div>
            <p className="font-bold">Product Sizes</p>
            <div className="mt-4 flex flex-wrap">
              {product.sizes &&
                product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className={` text-white bg-slate-900 mx-2 p-2 rounded-lg  border}`}
                  >
                    {size}
                  </button>
                ))}
            </div>
          </div>
        </div>
        {/* You can add more details here */}
      </div>
    </div>
  );
};

export default ReadCard;
