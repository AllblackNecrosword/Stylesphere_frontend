import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { userAuth } from "../../auth/userAuth";

export default function Wishlist() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const { userid } = userAuth();

  const fetchdata = async () => {
    try {
      const response = await fetch(
        ` http://localhost:4000/doc/getfavdata/${userid}`
      );

      if (!response.ok) {
        const errorMessage = await response.json();
        setError(errorMessage.message);
      } else {
        const result = await response.json();
        setData(result);
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred while fetching fav data.");
    }
  };
  useEffect(() => {
    fetchdata();
  }, [userid]);
  console.log("fav data", data);

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
            {data.length} items
          </p>
        </div>
      </div>
      {error && <div className="text-red-500 text-center">{error}</div>}
      {data.length === 0 &&
        !error && ( // Conditionally render if data array is empty and there's no error
          <div className="text-center mt-4 text-red-600">
            No items found in the cart. <a href="/shop">Shop now</a> to add
            products.
          </div>
        )}
      {data.length > 0 && !error && (
        <div className="flex flex-col justify-start items-start mt-9 mr-32 ml-32">
          <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-0">
            {data.map((element, index) => (
              <div className="flex flex-col" key={index}>
                <div className="relative ">
                  <img
                    className="block w-full rounded-lg"
                    src={element.image}
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
      )}
    </div>
  );
}
