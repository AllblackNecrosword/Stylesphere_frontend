import React, { useEffect, useState } from "react";
import { HiEye, HiTrash } from "react-icons/hi";
import ReadreturnOrder from "../Components/ReadreturnOrder";
const returnOrder = () => {
    const [data, setData] = useState([]);
    const [isReadOpen, setIsReadOpen] = useState(false);
    const [selectedProductDetails, setSelectedProductDetails] = useState(null);
  
    const fetchOrder = async () => {
      try {
        const response = await fetch(`http://localhost:4000/order/returndata`);
        if (!response.ok) {
          console.log("Error fetching data");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error.message);
      }
    };
    console.log(data);
  
    useEffect(() => {
      fetchOrder();
    }, []);
  
    const handleReadClick = (product) => {
      setSelectedProductDetails(product);
      setIsReadOpen(true);
    };
    // console.log(data);
  
    return (
      <div className="m-9">
        <h2 className="text-2xl font-semibold mb-4">Return Order</h2>
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
                Order number
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider"
              >
                Return Date
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
                    {item.orderId}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
        
                <td className="px-6 py-4 whitespace-nowrap flex gap-2 items-center">
                  <HiEye
                    className="text-blue-600 cursor-pointer mr-2"
                    size={30}
                    onClick={() => handleReadClick(item)}
                  />
                  <button className="bg-green-700 p-2 rounded-2xl text-white">
                    Return
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isReadOpen && selectedProductDetails && (
          <ReadreturnOrder
            order={selectedProductDetails}
            onClose={() => setIsReadOpen(false)}
          />
        )}
      </div>
    );
}

export default returnOrder
