import React, { useEffect, useState } from "react";
import BlackLogo from "../../images/SS-black.png";

import { Link } from "react-router-dom";

const Search = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/products");
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data); // Set filtered products initially to all products
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    const filterResults = () => {
      const query = input.toLowerCase();
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    };

    // Filter products when input changes
    filterResults();
  }, [input, products]);

  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-gray-900 bg-opacity-50 h-screen">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="bg-white p-4 shadow-lg flex justify-between ">
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-shrink-0">
              <img src={BlackLogo} alt="logo" className="w-5 h-auto" />
            </div>
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={input}
            onChange={handleChange}
            className="border border-gray-300 rounded-3xl py-1 px-9 w-96 focus:outline-none focus:border-gray-500"
          />
          <button
            onClick={onClose}
            className="text-black font-extrabold hover:text-gray-900 focus:outline-none"
          >
            Cancel
          </button>
        </div>
        <div className="bg-white  shadow-lg w-full  overflow-auto text-center">
          {input &&
            filteredProducts.map((product) => (
              <div
                key={product._id}
                className=" py-3 font-semibold cursor-pointer"
                onClick={() => setInput("")}
              >
                <Link to={`/ProductDetail/${product._id}`}>
                  <p>{product.name}</p>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
