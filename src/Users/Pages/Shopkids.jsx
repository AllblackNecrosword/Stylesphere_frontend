import React, { useState, useEffect } from "react";
import Cart from "../Components/Cart";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const Shopkids = () => {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(0);
  const [loading, setLoading] = useState(false);

  const getkidData = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/getkidData");
      const result = await response.json();
      if (!response.ok) {
        console.log(result.error);
      }
      if (response.ok) {
        setData(result);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };



  useEffect(() => {
    getkidData();

  }, []);

  return (
    <div className="mt-28 pl-16 pr-16">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <TailSpin color="black" width={100} height={100} />
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <h1 className="font-bold text-xl">Kid's Wear</h1>
              <p className="text-sm text-gray-500 ml-2">{data.length} products</p>
            </div>
            <div className="flex items-center">
              <label htmlFor="sorting" className="mr-2 rounded-2xl">
                Sort by:
              </label>
              <select id="sorting" className="px-2 py-1 border rounded">
                <option value="priceHighToLow">Price: High to Low</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="ratingHighToLow">Rating: High to Low</option>
                <option value="ratingLowToHigh">Rating: Low to High</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <hr className="border-t border-gray-400" />
          </div>
          <div className="mt-4 flex gap-4">
            <div className="flex items-center">
              <label htmlFor="category" className="mr-2 rounded-2xl">
                Category:
              </label>
              <select id="category" className="px-2 py-1 border rounded">
                <option value="shirts">Shirts</option>
                <option value="pants">Pants</option>
                <option value="jackets">Jackets</option>
              </select>
            </div>
            <div className="flex items-center">
              <label htmlFor="size" className="mr-2 rounded-2xl">
                Size:
              </label>
              <select id="size" className="px-2 py-1 border rounded">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div className="flex items-center">
              <label htmlFor="color" className="mr-2 rounded-2xl">
                Color:
              </label>
              <select id="color" className="px-2 py-1 border rounded">
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
              </select>
            </div>
          </div>
          <div className="pt-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
              {data.map((product, index) => (
                <Link to={`/ProductDetail/${product._id}`}>
                  <div key={index} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      {/* <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                /> */}
                      <img
                        src={`http://localhost:4000/images/${product.image}`} // Correctly construct the image URL
                        alt={product.name}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-black ">
                          <a href={product.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </a>
                        </h3>
                        <ReactStars
                          count={5}
                          size={18}
                          color2={"#ffd700"}
                          value={4}
                          edit={false}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          <span className="text-red-500 line-through px-4">
                            {/* ${product.price} */}
                          </span>
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Shopkids;
