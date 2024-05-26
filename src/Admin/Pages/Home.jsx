import React, { useEffect, useState } from "react";
import { MdProductionQuantityLimits } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { MdGetApp } from "react-icons/md";
import { HiEye, HiPencilAlt, HiTrash } from "react-icons/hi";
import UpdateCard from "../Components/updateProduct"; // Import the UpdateCard component
import ReadCard from "../Components/ReadCard";
import Swal from "sweetalert2";

const Home = (props) => {
  const [data, setData] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [isReadOpen, setIsReadOpen] = useState(false);
  const [selectedProductDetails, setSelectedProductDetails] = useState(null);
  const [numorder, setNumorder] = useState(null);
  const [usernum, setUsernum] = useState(null);

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
  
  const getTotalPrice = (products) => {
    return products.reduce((total, product) => {
      return total + parseFloat(product.price);
    }, 0);
  };

  // Calculate total price
  const totalPrice = getTotalPrice(data);
  console.log("Total Price:", totalPrice);
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

  const getuserNumber = async()=>{
    const response = await fetch(" http://localhost:4000/api/totalusers");
    if(!response.ok){
      console.log(error);
    }
    const result = await response.json();
    setUsernum(result)
  }

  // Get all the total order number from the callback

  useEffect(() => {
    getProductData();
    getTotalProducts();
    getuserNumber();
  }, [usernum,data,numorder]);

  const handleReadClick = (product) => {
    setSelectedProductDetails(product);
    setIsReadOpen(true);
  };

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

  const handleDelete = (productId) => {
    // Show SweetAlert confirmation dialog
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // If user confirms the deletion
      if (result.isConfirmed) {
        // Call the deleteProduct function
        deleteProduct(productId);
      }
    });
  };

  const deleteProduct = async (productId) => {
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
        // Show success message using SweetAlert
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      // Show error message using SweetAlert
      Swal.fire({
        title: "Error!",
        text: "There was an error deleting the product.",
        icon: "error",
      });
    }
  };

  return (
    <div className="bg-slate-200  p-2">
      <div className="m-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {/* Total product card */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-300 p-7 rounded-2xl flex flex-col justify-center items-center hover:shadow-lg">
          <HiOutlineShoppingCart size={55} color="white" />
          <h2 className="font-semibold text-2xl mt-4 p-2 text-white">
            Total products
          </h2>
          <p className="text-white text-3xl p-2">{totalProducts}</p>
        </div>
        {/* out of stock card */}
        <div className="bg-gradient-to-r from-green-500 to-green-300 p-7 rounded-2xl flex flex-col justify-center items-center hover:shadow-lg">
          <MdProductionQuantityLimits size={55} color="white" />
          <h2 className="font-semibold text-2xl mt-4 p-2  text-white">
            Store value{" "}
          </h2>
          <p className="text-white text-3xl p-2">{totalPrice}</p>
        </div>
        {/* order card */}
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 p-7 rounded-2xl flex flex-col justify-center items-center hover:shadow-lg">
          <MdGetApp size={55} color="white" />
          <h2 className="font-semibold text-2xl mt-4 p-2 text-white">
            Total Order
          </h2>
          <p className="text-white text-3xl p-2">{props.numorder}</p>
        </div>
        {/* dummy */}
        <div className="bg-gradient-to-r from-teal-500 to-teal-300 p-7 rounded-2xl flex flex-col justify-center items-center hover:shadow-lg">
          <MdGetApp size={55} color="white" />
          <h2 className="font-semibold text-2xl mt-4 p-2 text-white">Users</h2>
          <p className="text-white text-3xl p-2">{usernum}</p>
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
                    onClick={() => handleReadClick(item)}
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
      {isReadOpen && selectedProductDetails && (
        <ReadCard
          product={selectedProductDetails}
          onClose={() => setIsReadOpen(false)}
        />
      )}
    </div>
  );
};

export default Home;
