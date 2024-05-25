import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import AddProduct from "../Admin/Pages/Addproduct";
import Order from "./Pages/Order";
import WhiteLogo from "../images/SS-white.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiCartAdd } from "react-icons/bi";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import Users from "./Pages/Users";
import { userAuth } from "../auth/userAuth";
import Cancelorder from "./Pages/Cancelorder";
// import Returnorder from "./Pages/Returnorder";
import Returnorder from "./Pages/Returnorder";
import Content from "./Pages/Content";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const navigate = useNavigate();
  const { Logout } = userAuth();
  const [numorder, setNumorder] = useState(null);

  const getTotalorder = (value) => {
    setNumorder(value);
  };
  // console.log("Number is",numorder);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="flex h-screen ">
      {/* Left Navigation */}
      <div className="bg-gray-800 w-60 sticky top-0 h-screen overflow-y-auto">
        <div className="flex justify-center pt-8">
          <Link to="/">
            <img src={WhiteLogo} alt="logo" className="w-8 h-auto" />
          </Link>
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
                <MdOutlineFileDownload size={23} className="mr-2" /> Orders
              </div>
            </Link>
            {/* CancelOrders Menu Item */}
            <Link
              to="/dashboard/cancelorder"
              onClick={() => handleMenuClick("cancelorders")}
              className={`block py-2 px-4 text-white font-semibold m-2${
                activeMenu === "cancelorders" ? "bg-gray-900" : ""
              } hover:bg-gray-700`}
            >
              <div className="flex items-center">
                <MdOutlineFileDownload size={23} className="mr-2" /> Cancel
                Orders
              </div>
            </Link>
            {/* Return order */}
            <Link
              to="/dashboard/returnorder"
              onClick={() => handleMenuClick("returnorder")}
              className={`block py-2 px-4 text-white font-semibold m-2${
                activeMenu === "orders" ? "bg-gray-900" : ""
              } hover:bg-gray-700`}
            >
              <div className="flex items-center">
                <MdOutlineFileDownload size={23} className="mr-2" /> Return
                Orders
              </div>
            </Link>
            {/* Users list */}
            <Link
              to="/dashboard/users"
              onClick={() => handleMenuClick("users")}
              className={`block py-2 px-4 text-white font-semibold m-2${
                activeMenu === "users" ? "bg-gray-900" : ""
              } hover:bg-gray-700`}
            >
              <div className="flex items-center">
                <MdOutlineFileDownload size={23} className="mr-2" /> Users
              </div>
            </Link>
            {/* Content Management */}
            <Link
              to="/dashboard/content"
              onClick={() => handleMenuClick("content")}
              className={`block py-2 px-4 text-white font-semibold m-2${
                activeMenu === "content" ? "bg-gray-900" : ""
              } hover:bg-gray-700`}
            >
              <div className="flex items-center">
                <MdOutlineFileDownload size={23} className="mr-2" /> Content
              </div>
            </Link>
          </div>

          {/* Logout Button */}
          <button
            className="py-2 px-4 bg-red-600 text-white hover:bg-red-700"
            onClick={Logout}
          >
            <Link to="/login">
              {" "}
              <div className="flex items-center">
                <RiLogoutBoxLine size={25} className="mr-5" />
                Logout
              </div>
            </Link>
          </button>
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-slate-200">
        {/* Display content based on the active menu */}
        {activeMenu === "dashboard" && <Home numorder={numorder} />}
        {activeMenu === "add-products" && <AddProduct />}
        {activeMenu === "orders" && <Order getTotalorder={getTotalorder} />}
        {activeMenu === "cancelorders" && <Cancelorder />}
        {activeMenu === "returnorder" && <Returnorder />}
        {activeMenu === "users" && <Users />}
        {activeMenu === "content" && <Content />}
      </div>
    </div>
  );
};

export default Dashboard;
