import React, { useEffect, useState } from "react";
import { HiEye, HiTrash } from "react-icons/hi";
import ReadOrder from "../Components/ReadOrder";

const Order = (props) => {
  const [data, setData] = useState([]);
  const [isReadOpen, setIsReadOpen] = useState(false);
  const [selectedProductDetails, setSelectedProductDetails] = useState(null);

  const handleStatusupdate = async (e, productId) => {
    const newStatus = e.target.value;
    try {
      const response = await fetch(`http://localhost:4000/order/${productId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("Failed to update order");
      }

      // Update the status in the local state
      const updatedData = data.map((item) => {
        if (item._id === productId) {
          return { ...item, status: newStatus };
        }
        return item;
      });
      setData(updatedData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReadClick = (product) => {
    setSelectedProductDetails(product);
    setIsReadOpen(true);
  };

  const fetchOrder = async () => {
    try {
      const response = await fetch(`http://localhost:4000/order/getorder`);
      if (!response.ok) {
        console.log("Error fetching data");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  props.getTotalorder(data.length);

  const handleDelete = async (productId) => {
    try {
      // Add code to handle deletion of order
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <div className="m-9">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider"
            >
              S.N
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider"
            >
              Products
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider"
            >
              items
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider"
            >
              Price
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider"
            >
              Customer
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 font-bold">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-xs">
                <span className="inline-block max-w-xs overflow-hidden overflow-ellipsis">
                  {item.products.map((product) => product.name).join(", ")}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.products.length}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{item.totalPrice}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.shippingAddress.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <select
                  value={item.status}
                  className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  onChange={(e) => handleStatusupdate(e, item._id)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>

              <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                <HiEye
                  className="text-blue-600 cursor-pointer mr-2"
                  size={20}
                  onClick={() => handleReadClick(item)}
                />
                <HiTrash
                  className="text-red-600 cursor-pointer"
                  size={20}
                  onClick={() => handleDelete(item._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isReadOpen && selectedProductDetails && (
        <ReadOrder
          order={selectedProductDetails}
          onClose={() => setIsReadOpen(false)}
        />
      )}
    </div>
  );
};

export default Order;
