import React, { useEffect, useState } from "react";
import { HiEye, HiTrash } from "react-icons/hi";
import ReadOrder from "../Components/ReadOrder";

const Cancelorder = () => {
  const [data, setData] = useState([]);
  const [isReadOpen, setIsReadOpen] = useState(false);
  const [selectedProductDetails, setSelectedProductDetails] = useState(null);

  const fetchOrder = async () => {
    try {
      const response = await fetch(`http://localhost:4000/order/cancelorder`);
      if (!response.ok) {
        console.log("Error fetching data");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  const handleReadClick = (product) => {
    setSelectedProductDetails(product);
    setIsReadOpen(true);
  };

  const handleDelete = async (item) => {
    const orderid = item._id;
    try {
      const response = await fetch(
        `http://localhost:4000/order/deleteorder/${orderid}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete the order");
      }
      // Remove the deleted item from the state
      alert("Sucessfully deleted the order");
      setData((prevData) => prevData.filter((order) => order._id !== orderid));
    } catch (error) {
      console.error("Delete error:", error);
    }
  };
  // console.log(data);

  return (
    <div className="m-9">
      <h2 className="text-2xl font-semibold mb-4">Users</h2>
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
              <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>

              <td className="px-6 py-4 whitespace-nowrap flex gap-2 items-center">
                <HiEye
                  className="text-blue-600 cursor-pointer mr-2"
                  size={30}
                  onClick={() => handleReadClick(item)}
                />
                <button
                  className="bg-red-700 p-2 rounded-2xl text-white"
                  onClick={() => handleDelete(item)}
                >
                  Cancel
                </button>
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

export default Cancelorder;
