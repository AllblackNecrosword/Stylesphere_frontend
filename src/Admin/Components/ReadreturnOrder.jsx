import React, { useEffect, useState } from "react";

const ReadreturnOrder = ({ onClose, order }) => {
  // console.log("readOrder", order);
  const [data, setData] = useState([]);

  const fetchorderdetail = async () => {
    const response = await fetch(
      `http://localhost:4000/order/returnorder/${order.orderId}`
    );
    if (!response.ok) {
      console.log(error);
    }
    const result = await response.json();
    setData(Array.isArray(result) ? result : [result]);
  };
  useEffect(()=>{
    fetchorderdetail();
  },[]);
  console.log("Koshishb ",data);
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
      <div className="absolute top-16 bg-gray-200 p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-3/4 overflow-scroll">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Order Details</h2>
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
        {/* Order Information */}
        {/* <div>
        
          <p className="font-bold">Order ID: {order.orderId}</p>
        </div> */}
        {/* Products */}
        {/* Shipping Address */}
        <div className="mt-4 ">
          <h2 className="text-lg font-semibold">Return Reasons</h2>
          <p className="font-bold">Comment: {order.comment}</p>
          <p className="font-bold">reason: {order.reason}</p>
          {/* <p className="font-bold">Address: {order.shippingAddress.address}</p> */}
        </div>
        {/* Detail */}
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
      </div>
    </div>
  );
};

export default ReadreturnOrder;
