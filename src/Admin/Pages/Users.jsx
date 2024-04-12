import React, { useState } from "react";
import { HiEye, HiPencilAlt, HiTrash } from "react-icons/hi";

const Users = () => {
  const [data, setData] = useState([
    {
      name: "John Doe",
      category: "Category A",
      price: 10,
      quantity: 5,
      _id: "1", // Dummy ID
    },
    {
      name: "Jane Smith",
      category: "Category B",
      price: 20,
      quantity: 10,
      _id: "2", // Dummy ID
    },
  ]);
  return (
    <div className="m-9">
      <h2 className="text-2xl font-semibold mb-4">Inventory Products</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs  text-black font-bold uppercase tracking-wider"
            >
              S.N
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs text-black font-bold  uppercase tracking-wider"
            >
              Category
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
              Quantity
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
              {/* <td className="px-6 py-4 whitespace-nowrap">{item.name}</td> */}
              <td className="px-6 py-4 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-xs">
                <span className="inline-block max-w-xs overflow-hidden overflow-ellipsis">
                  {item.name}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
              <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                <HiEye
                  className="text-blue-600 cursor-pointer mr-2"
                  size={20}
                />
                <HiPencilAlt
                  className="text-green-600 cursor-pointer mr-2"
                  size={20}
                  onClick={() => handleUpdateClick(item)}
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
    </div>
  );
};

export default Users;
