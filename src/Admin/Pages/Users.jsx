import React, { useEffect, useState } from "react";
import { HiEye, HiPencilAlt, HiTrash } from "react-icons/hi";

const Users = () => {
  const [data, setData] = useState([]);

  const fetchuserData = async () => {
    try {
      const response = await fetch("http://localhost:4000/getalluser");
      const result = await response.json();
      if (!response.ok) {
        console.log(result.error);
      }
      console.log(result);
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchuserData();
  }, []);

  return (
    <div className="m-9">
      <h2 className="text-2xl font-semibold mb-4">Users</h2>
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
              Phoneno
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider"
            >
              Role
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
              <td className="px-6 py-4 whitespace-nowrap">{item.phoneno}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.isAdmin ? "Admin" : "User"}
              </td>

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
