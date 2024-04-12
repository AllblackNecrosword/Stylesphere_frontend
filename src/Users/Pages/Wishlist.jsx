import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Wishlist({ favoriteProducts }) {
  console.log(favoriteProducts);
  return (
    <div className="container mx-auto px-4 md:px-6 2xl:px-0 py-12">
      <div className="flex flex-col justify-center items-center mt-9">
        <div className="mt-3 text-center">
          <h1 className="text-3xl font-serif lg:text-4xl tracking-tight font-medium leading-8 lg:leading-9 text-gray-800">
            Favourites
          </h1>
        </div>
        <div className="mt-4 text-center">
          <p className="text-2xl tracking-tight leading-6 text-gray-600">
            {favoriteProducts.length} items
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start mt-9 mr-32 ml-32">
        <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-0">
          {favoriteProducts.map((element, index) => (
            <div className="flex flex-col" key={index}>
              <div className="relative ">
                <img
                  className="block w-full rounded-lg"
                  src={`http://localhost:4000/images/${element.image}`}
                  alt="bag"
                />
                <button
                  aria-label="close"
                  className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute p-1.5 bg-gray-800 text-white hover:text-gray-400 rounded-full"
                >
                  <FaTimes size={18} />
                </button>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <Link to={`/ProductDetail/${element._id}`}>
                  <div className="flex justify-center items-center">
                    <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800">
                      {element.name}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
