import React from "react";
import image from "../../images/Another.jpg";

const AddToCart = () => {
  const cartdata = [
    {
      id: 1,
      image:image ,
      name: "Mens Hat collection",
      price: 12200,
    },
    {
      id: 2,
      image:  image ,
      name: "Womes Hat collection",
      price: 122,
    },
    {
      id: 3,
      image:  image ,
      name: "Apple Hat collection",
      price: 89,
    },
  ];
  return (
    <div className="mt-28 px-4">
      <div className="text-2xl font-bold text-center text-blue-800 pb-8">
        My Shopping Cart
      </div>
      <div className="border rounded-lg overflow-hidden mr-32 ml-32">
        <div className="flex justify-between font-bold bg-gray-200 p-4">
          <div className="w-2/6 text-center">Description</div>
          <div className="w-1/6 text-center">Quantity</div>
          <div className="w-1/6 text-center">Remove</div>
          <div className="w-1/6 text-center">Price</div>
        </div>
        {
          cartdata.map((element)=>{
            return(
              <div className="p-4 flex items-center justify-between" >
              <div className="w-2/6 flex items-center">
                <img
                  src={element.image}
                  alt="Product Image"
                  className="w-24 h-24 object-cover rounded mr-5"
                />
                <p className="text-lg font-semibold">{element.name}</p>
              </div>
              <div className="w-1/6 flex items-center justify-center">
                <div className="flex items-center">
                  <button className="px-3 py-1 bg-blue-800 text-white">+</button>
                  <p className="font-semibold p-3">1</p>
                  <button className="px-3 py-1 bg-gray-400 text-black">-</button>
                </div>
              </div>
              <div className="w-1/6 flex items-center justify-center">
                <button className="px-3 py-1 bg-blue-800 text-white rounded-lg">
                  Remove
                </button>
              </div>
              <div className="w-1/6 flex items-center justify-center font-semibold">
                ${element.price}
              </div>
            </div>
            )
          })
        }
      <div className="ml-88">
        <button className="border-2 p-3 rounded-lg bg-blue-800 text-white">Checkout</button>
      </div>
      </div>
     
    </div>
  );
};

export default AddToCart;
