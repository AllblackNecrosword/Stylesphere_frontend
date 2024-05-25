
import React, { useState } from "react";
import { IoIosReturnRight } from "react-icons/io";
import ReturnRequestForm from "../Pages/ReturnRequestForm"
const ReturnOrder = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [selectedProductDetails, setSelectedProductDetails] = useState(null);
  const [isReadOpen, setIsReadOpen] = useState(false);
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const fetchOrder = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/order/returnorder/${input}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch order");
      }
      const result = await response.json();
      setData(Array.isArray(result) ? result : [result]);
    } catch (error) {
      console.error("Error fetching order:", error);
      // Handle error here
    }
  };

  const handelform=(element)=>{
    setSelectedProductDetails(element);
    setIsReadOpen(true);
  }

  return (
    <div className="mt-24">
      <h1 className="font-serif font-bold text-3xl text-center p-4">
        Return Order
      </h1>
      <div className="bg-gray-100 p-4 rounded-md mt-5">
        <div className="flex items-center justify-center mb-4 p-4">
          <svg className="w-6 h-6 text-gray-600 mr-2" />
          <h3 className="text-lg font-semibold">Search your Return Order </h3>
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Enter your order number"
            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            onChange={handleInput}
          />
          <button
            type="button"
            className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors duration-300"
            onClick={fetchOrder}
          >
            Search
          </button>
        </div>
      </div>
      {/* Display the order detail to return */}
      <div
        className="order-container mt-4"
        style={{ maxHeight: "500px", overflowY: "auto" }}
      >
        {data.map((element, index) => (
          <div className="border p-3 mt-4 rounded-lg" key={index}>
            <div className="flex justify-between items-center">
              <div>
                <p>
                  Order ID: :{" "}
                  <span className="text-red-700 font-bold">{element._id}</span>
                </p>
                <p className="text-red-700 font-bold">
                  Date: {new Date(element.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="mx-3 ">
                <button
                  className="bg-white border-red-600 border p-2 rounded-xl font-bold hover:bg-red-600 hover:text-white flex items-center m-1 gap-1"
                  onClick={() => handelform(element)}
                >
                  <IoIosReturnRight size={25} />
                  Return Order
                </button>
              </div>
            </div>
            {/* Order content */}
            <div className="flex flex-row flex-wrap my-4">
              {element.products.map((item, index) => (
                <div className="flex mx-4" key={index}>
                  <div className="mt-2">
                    <img src={item.image} alt="image" className="w-44" />
                  </div>
                  <div className="ml-2 p-2 font-semibold">
                    <p>{item.name}</p>
                    <p className="text-red-500">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {
        isReadOpen && selectedProductDetails && (
          <ReturnRequestForm selectedProductDetails={selectedProductDetails} />
        )
      }
    </div>
  );
};

export default ReturnOrder;
