import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import ProductContent from "./Pages/ProductContent";
import AddProduct from "../Admin/Pages/Addproduct";
import Order from "./Pages/Order";
import WhiteLogo from "../images/SS-white.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiCartAdd } from "react-icons/bi";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const navigate = useNavigate();

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="flex h-screen ">
      {/* Left Navigation */}
      <div className="bg-gray-800 w-60 sticky top-0 h-screen overflow-y-auto">
        <div className="flex justify-center pt-8">
          <img src={WhiteLogo} alt="logo" className="w-8 h-auto" />
        </div>
        <div className="flex flex-col justify-between h-full mt-14">
          <div>
            {/* Dashboard Menu Item */}
            <Link
              to="/dashboard"
              onClick={() => handleMenuClick("dashboard")}
              className={`block py-2 px-4 text-white font-semibold m-2 ${
                activeMenu === "dashboard" ? "bg-gray-900" : ""
              } hover:bg-gray-700`}
            >
              <div className="flex items-center">
                <LuLayoutDashboard size={20} className="mr-2" /> Dashboard
              </div>
            </Link>
            {/* Products Menu Item */}
            <Link
              to="/dashboard/products"
              onClick={() => handleMenuClick("products")}
              className={`block py-2 px-4 text-white  font-semibold m-2 ${
                activeMenu === "products" ? "bg-gray-900" : ""
              } hover:bg-gray-700`}
            >
              Products
            </Link>
            {/* Add Products Menu Item */}
            <Link
              to="/dashboard/add-products"
              onClick={() => handleMenuClick("add-products")}
              className={`block py-2 px-4 text-white font-semibold m-2${
                activeMenu === "add-products" ? "bg-gray-900" : ""
              } hover:bg-gray-700`}
            >
              <div className="flex items-center">
                <BiCartAdd size={23} className="mr-2" /> Add Products
              </div>
            </Link>
            {/* Orders Menu Item */}
            <Link
              to="/dashboard/orders"
              onClick={() => handleMenuClick("orders")}
              className={`block py-2 px-4 text-white font-semibold m-2${
                activeMenu === "orders" ? "bg-gray-900" : ""
              } hover:bg-gray-700`}
            >
              <div className="flex items-center">
               <MdOutlineFileDownload size={23} className="mr-2"/> Orders
              </div>
              
            </Link>
          </div>
          {/* Logout Button */}
          <button
            className="py-2 px-4 bg-red-600 text-white hover:bg-red-700"
            onClick={() => navigate("/login")}
          >
            <div className="flex items-center">
              <RiLogoutBoxLine size={25} className="mr-5"/>Logout
            </div>
            
          </button>
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-slate-200">
        {/* Display content based on the active menu */}
        {activeMenu === "dashboard" && <Home />}
        {activeMenu === "products" && <ProductContent />}
        {activeMenu === "add-products" && <AddProduct />}
        {activeMenu === "orders" && <Order />}
      </div>
    </div>
  );
};

export default Dashboard;
