import React from "react";

const ReadOrder = ({ onClose, order }) => {
  console.log("readOrder", order);
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
        <div>
          {/* <p className="font-bold">Order ID: {order._id}</p> */}
          <p className="font-bold">Customer ID: {order.customer}</p>
          <p className="font-bold">Payment Method: {order.paymentMethod}</p>
          <p className="font-bold">Total Price: {order.totalPrice}</p>
          <p className="font-bold">Status: {order.status}</p>
          <p className="font-bold">Created At: {order.createdAt}</p>
        </div>
        {/* Products */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Products</h2>
          {order.products.map((product, index) => (
            <div key={index} className="mb-4 ">
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover"
              />
              <div>
                <p className="font-bold">{product.name}</p>
                {/* <p className="text-gray-500">{product.description}</p> */}
                <p className="font-bold">Price: {product.price}</p>
                <p className="font-bold">Quantity: {product.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Shipping Address */}
        <div className="mt-4 ">
          <h2 className="text-lg font-semibold">Shipping Address</h2>
          <p className="font-bold">Name: {order.shippingAddress.name}</p>
          <p className="font-bold">Email: {order.shippingAddress.email}</p>
          <p className="font-bold">Address: {order.shippingAddress.address}</p>
          <p className="font-bold">City: {order.shippingAddress.city}</p>
          <p className="font-bold">State: {order.shippingAddress.state}</p>
          <p className="font-bold">
            Postal Code: {order.shippingAddress.postalCode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadOrder;
