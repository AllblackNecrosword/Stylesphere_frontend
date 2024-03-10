import React from "react";
import Cart from '../Components/Cart'
const Shopmen = () => {
  return (
    <div className="mt-28 pl-16 pr-16">
      <div className="items-center flex justify-center m-5">
      <a href="">Clothing /</a>
          <a href="">  Shoes /</a>
          <a href=""> Accessories</a>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <h1 className="font-bold text-xl">Mens Wear</h1>
          <p className="text-sm text-gray-500 ml-2">1280 products</p>
        </div>
        <div className="flex items-center">
          <label htmlFor="sorting" className="mr-2 rounded-2xl">
            Sort by:
          </label>
          <select id="sorting" className="px-2 py-1 border rounded">
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="ratingHighToLow">Rating: High to Low</option>
            <option value="ratingLowToHigh">Rating: Low to High</option>
          </select>
        </div>
      </div>
      <div className="mt-4">
        <hr className="border-t border-gray-400" />
      </div>
      <div className="mt-4 flex gap-4">
        <div className="flex items-center">
          <label htmlFor="category" className="mr-2 rounded-2xl">
            Category:
          </label>
          <select id="category" className="px-2 py-1 border rounded">
            <option value="shirts">Shirts</option>
            <option value="pants">Pants</option>
            <option value="jackets">Jackets</option>
          </select>
        </div>
        <div className="flex items-center">
          <label htmlFor="size" className="mr-2 rounded-2xl">
            Size:
          </label>
          <select id="size" className="px-2 py-1 border rounded">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div className="flex items-center">
          <label htmlFor="color" className="mr-2 rounded-2xl">
            Color:
          </label>
          <select id="color" className="px-2 py-1 border rounded">
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
        </div>
      </div>
      <div className="pt-8">
       <Cart/> 
      </div>
      
    </div>
  );
};

export default Shopmen;
