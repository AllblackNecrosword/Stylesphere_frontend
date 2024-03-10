import React from "react";
import menfashion from "../../images/Men-fashion.jpg";
import womenfashion from "../../images/Women-fashion.jpg";
import kidsfashion from "../../images/kids-fashion.jpg";
import image from "../../images/Hero-banner.jpg";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div className="grid grid-cols-3 gap-1 pr-24 pl-24 pt-20 mb-20">
      <div className="category relative m-4">
        <img
          src={menfashion}
          alt="Men"
          className="w-full h-full object-cover"
        />
        <button className="bg-white text-black font-bold px-4 py-2 absolute bottom-0 left-0 right-0 mx-auto mb-4 w-28 rounded-2xl">
          <Link to={"/men"}>Shop Men</Link>
        </button>
      </div>
      <div className="category relative  m-4">
        <img src={image} alt="Women" className="w-full h-full object-cover" />
        <button className="bg-white text-black font-bold px-4 py-2 absolute bottom-0 left-0 right-0 mx-auto mb-4 w-28 rounded-2xl">
        <Link to={"/women"}>Shop Women</Link>
        </button>
      </div>
      <div className="category relative m-4">
        <img
          src={kidsfashion}
          alt="Kids"
          className="w-full h-full object-cover"
        />
        <button className="bg-white text-black font-bold px-4 py-2 absolute bottom-0 left-0 right-0 mx-auto mb-4 w-28 rounded-2xl">
        <Link to={"/kids"}>Shop Kids</Link>
        </button>
      </div>
    </div>
  );
};

export default Category;
