import React, { useState } from "react";
import ReactStars from "react-stars";

const Productpage = () => {
  // Sample product data
  const product = {
    title: "British Style All-Match Board Leather Men's Dress Shoes ",
    size: "Large",
    rating: 4.5,
    description:
     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ",
    imageUrl:
      "https://images.unsplash.com/photo-1494496195158-c3becb4f2475?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1200,
  };

  // State to manage whether full description is shown
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Function to toggle full description
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="container mx-auto mt-28 flex flex-wrap items-start justify-center">
      {/* Product Image */}
      <div className="w-full md:w-1/2">
        <div className="h-98 md:h-full">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full md:h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      {/* Product Details */}
      <div className="w-full md:w-1/2 p-9">
        <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
        <div className="flex items-center mb-4">
          <ReactStars
            count={5}
            size={24}
            color2={"#ffd700"}
            value={product.rating}
            edit={false}
          />
        </div>
        <div className="text-2xl font-black text-red-700">
          {product.price}$
        </div>
        {/* Render full description if showFullDescription is true, otherwise render truncated description */}
        <p className="text-lg pt-8">
          {showFullDescription
            ? product.description
            : product.description.slice(0, 150) + "..."}
          {!showFullDescription && (
            <button
              className="text-blue-500 hover:underline focus:outline-none"
              onClick={toggleDescription}
            >
              Read More
            </button>
          )}
        </p>
        {/* Add to Cart button */}
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Productpage;
