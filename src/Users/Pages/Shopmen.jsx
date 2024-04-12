import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import { TailSpin } from "react-loader-spinner";

const Shopmen = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortdata, setSortdata] = useState("");
  const getmenData = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/getmenData");
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
    getmenData();
  }, []);
  // console.log("Datas", data);

  const sortingHandler = (e) => {
    e.preventDefault();
    setSortdata(e.target.value);
    // console.log("Sorting", sortdata);
  };

  const displayData = () => {
    if (sortdata === "lowPrice") {
      return data.slice().sort((a, b) => a.price - b.price);
    } else if (sortdata === "highPrice") {
      return data.slice().sort((a, b) => b.price - a.price);
    } else if (sortdata == "") {
      return data;
    }
    
  };

  return (
    <div className="mt-28 pl-16 pr-16">
      {loading ? ( // Display loader if loading is true
        <div className="flex justify-center items-center h-screen">
          <TailSpin color="black" width={100} height={100} />
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <h1 className="font-bold text-2xl font-poppins">Mens Wear</h1>
              <p className="text-sm text-gray-500 ml-2 font-semibold">
                {data.length} products
              </p>
            </div>
            <div className="flex items-center">
              <label htmlFor="sorting" className="mr-2 rounded-2xl">
                Sort by:
              </label>
              <select
                id="sorting"
                className="px-2 py-1 border rounded"
                onChange={sortingHandler}
              >
                <option value="">choose</option>
                <option value="highPrice">Price: High to Low</option>
                <option value="lowPrice">Price: Low to High</option>
                <option value="highRating">Rating: High to Low</option>
                <option value="lowRating">Rating: Low to High</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <hr className="border-t border-gray-400" />
          </div>
          <div className="mt-4 flex gap-4">
            {/* Your category, size, color selectors */}
          </div>
          <div className="pt-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
              {displayData().map((product, index) => (
                <Link to={`/ProductDetail/${product._id}`} key={index}>
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={`http://localhost:4000/images/${product.image}`}
                        alt={product.name}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-black ">
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
                          value={props.rating}
                          edit={false}
                        />
                      </div>
                      <div>
                        <p className="text-base font-bold text-gray-900">
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
        </div>
      )}
    </div>
  );
};

export default Shopmen;
