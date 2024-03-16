import React, { useEffect, useState } from "react";
import { MdProductionQuantityLimits } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { MdGetApp } from "react-icons/md";
import { HiEye, HiPencilAlt, HiTrash } from "react-icons/hi";
import UpdateCard from "../Components/updateProduct"; // Import the UpdateCard component

const Home = () => {
  const [data, setData] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);

  // Get all the product data from the database
  const getProductData = async () => {
    const response = await fetch("http://localhost:4000/api/products");
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
    }
    if (response.ok) {
      setData(result);
    }
  };

  // Get all the total product number from the database
  const getTotalProducts = async () => {
    const response = await fetch(
      "http://localhost:4000/api/products/totalproducts"
    ); // Update the endpoint here
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
    }
    if (response.ok) {
      setTotalProducts(result.product); // Assuming the response from backend is an object with a property named 'product'
    }
  };

  useEffect(() => {
    getProductData();
    getTotalProducts();
  }, []);

  const handleUpdateClick = (product) => {
    setSelectedProduct(product);
    setIsUpdateOpen(true);
  };

  const handleUpdate = async (updatedProduct) => {
    // Your implementation to update the product data
    console.log("Updated Product:", updatedProduct);
    setIsUpdateOpen(false);
    // Optionally, you can call getProductData() again to refresh the product data after updating
  };

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/products/${productId}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();

      if (!response.ok) {
        console.log(result.error);
      } else {
        // Remove the deleted product from the state
        setData(data.filter((product) => product._id !== productId));
        console.log("Product deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="bg-slate-200  p-2">
      <div className="m-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {/* Total product card */}
        <div className="bg-white p-7 rounded-2xl flex flex-col justify-center items-center hover:shadow-lg">
          <HiOutlineShoppingCart size={55} />
          <h2 className="font-semibold text-2xl mt-4 p-2 text-gray-500">
            Total products
          </h2>
          <p className="text-gray-500 text-3xl p-2">{totalProducts}</p>
        </div>
        {/* out of stock card */}
        <div className="bg-white p-7 rounded-2xl flex flex-col justify-center items-center hover:shadow-lg">
          <MdProductionQuantityLimits size={55} />
          <h2 className="font-semibold text-2xl mt-4 p-2  text-gray-500">
            Out of Stock{" "}
          </h2>
          <p className="text-gray-500 text-3xl p-2">20</p>
        </div>
        {/* order card */}
        <div className="bg-white p-7 rounded-2xl flex flex-col justify-center items-center hover:shadow-lg">
          <MdGetApp size={55} color="" />
          <h2 className="font-semibold text-2xl mt-4 p-2 text-gray-500">
            Order products
          </h2>
          <p className="text-gray-500 text-3xl p-2">20</p>
        </div>
        {/* dummy */}
        <div className="bg-white p-7 rounded-2xl flex flex-col justify-center items-center hover:shadow-lg">
          <MdGetApp size={55} color="" />
          <h2 className="font-semibold text-2xl mt-4 p-2 text-gray-500">
            Order products
          </h2>
          <p className="text-gray-500 text-3xl p-2">20</p>
        </div>
      </div>
      <div className="mt-3">
        <hr className="border-t border-gray-400" />
      </div>
      {/* Inventory data */}
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
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
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
      {/* Update card */}
      {isUpdateOpen && selectedProduct && (
        <UpdateCard
          product={selectedProduct}
          onUpdate={handleUpdate}
          onClose={() => setIsUpdateOpen(false)}
        />
      )}
    </div>
  );
};

export default Home;
