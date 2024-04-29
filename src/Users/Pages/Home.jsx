import React from "react";
import { IoPersonCircle } from "react-icons/io5";
import Image from "../../images/banner.jpg"
const Home = () => {
  return (
    <div className="mt-28">
      <div className="flex items-center justify-center border mr-4 rounded-lg p-5">
        <div>
          <IoPersonCircle size={63} />
        </div>
        <div className="font-semibold">
          <h3 className="px-2">Koshishkhadka2003@gmail.com</h3>
          <h3 className="px-2">Phoneno: 9843023686</h3>
        </div>
      </div>
      <div className="mt-6">
        <h1 className="text-2xl font-semibold">Your orders</h1>
        {/* Order container */}
        <div className="border p-3 mt-4 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
            <p>Order ID: 99898 : <a className="text-red-700 font-bold">Pending</a></p>
            <p>Date: 16 December 2018</p>
          </div>
          <button className="bg-white border-red-600 border p-2 rounded-xl font-bold hover:bg-red-600 hover:text-white ">Cancel Order</button>
          </div>
          {/* Order content */}
         
          <div className="flex flex-row flex-wrap my-4">
            {/*  */}
            <div className="flex mx-4">
               <div className="mt-2">
              <img src={Image} alt="image" className="w-44"/>
            </div>
            <div className="ml-2 p-2 font-semibold">
              <p>Denim jacket got men</p>
              <p className="text-red-500">1200$</p>
            </div>
            </div>
            {/*  */}
            <div className="flex">
               <div className="mt-2">
              <img src={Image} alt="image" className="w-44"/>
            </div>
            <div className="ml-2 p-2 font-semibold">
              <p>Denim jacket got men</p>
              <p className="text-red-500">1200$</p>
            </div>
            </div>
            <div className="flex">
               <div className="mt-2">
              <img src={Image} alt="image" className="w-44"/>
            </div>
            <div className="ml-2 p-2 font-semibold">
              <p>Denim jacket got men</p>
              <p className="text-red-500">1200$</p>
            </div>
            </div>
            
           

          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Home;
