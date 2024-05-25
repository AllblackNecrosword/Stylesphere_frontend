import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import { TailSpin } from "react-loader-spinner";

const Shopmen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortdata, setSortdata] = useState("");
  const [productType, setProductType] = useState("");
  const [sort, setSort] = useState({});

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
  console.log("Datas", data);

  const getsingleproduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/getsingleMenproduct/${sortdata}`
      );
      if (!response.ok) {
        console.log(response.error);
      }
      if (response.ok) {
        const result = await response.json();
        setSort(result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(sort);

  const sortingHandler = (e) => {
    e.preventDefault();
    setSortdata(e.target.value);
    // console.log("Sorting", sortdata);
    getsingleproduct();
  };

  const handleProductTypeChange = (e) => {
    setProductType(e.target.value); // Update the selected product type
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
    <div className="mt-24 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24 lg:mt-6">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <TailSpin color="black" width={100} height={100} />
        </div>
      ) : (
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="flex gap-3 items-center">
              <h1 className="font-bold text-2xl font-poppins">Mens Wear</h1>
              <p className="text-sm text-gray-500 ml-2 font-semibold">
                {data.length} products
              </p>
            </div>
            <div className="flex items-center font-bold mt-4 sm:mt-0">
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

              {/* <div className="flex items-center mx-4">
                <label htmlFor="category" className="mr-2 rounded-2xl ">
                 Type:
                </label>
                <select
                  id="category"
                  className="px-2 py-1 border rounded"
                  value={productType}
                  onChange={handleProductTypeChange}
                >
                  <option value="">choose</option>
                  <option value="shoes">Shoes</option>
                  <option value="accessories">Accessories</option>
                  <option value="clothes">Clothes</option>
                </select>
              </div> */}
            </div>
          </div>
          <div className="mt-4">
            <hr className="border-t border-gray-400" />
          </div>
          <div className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
            {/* Your category, size, color selectors */}
          </div>
          <div className="pt-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
              {displayData().map((product, index) => (
                <Link to={`/ProductDetail/${product._id}`} key={index}>
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm font-extrabold text-black ">
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
                          value={product.rating}
                          color="#f9b115"
                          size="18px"
                          onChange={() => console.log("rate: ", product._id)}
                        />
                      </div>
                      <p className="mt-1 text-lg font-bold text-gray-900">
                        ${product.price}
                      </p>
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
