import React, { useEffect, useState } from "react";
import { userAuth } from "../../auth/userAuth";

const AddToCart = () => {
  // console.log("Add to cart",cartdata);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const { userid } = userAuth();
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/doc/getcartdata/${userid}`
        );
        //  console.log("result",result);
        if (!response.ok) {
          // console.log(error);
          // setError(result.error);
          const errorMessage = await response.json(); // Parse error message from response
          setError(errorMessage.message); // Set error message state
        } else {
          const result = await response.json();
          setData(result);
        }
      } catch (error) {
        console.log(error);
        setError("An error occurred while fetching cart data.");
      }
    };
    fetchdata();
  }, [userid]);
  console.log(data);

  return (
    <div className="mt-28 px-4">
      <div className="text-2xl font-bold text-center text-blue-800 pb-8">
        My Shopping Cart
      </div>
      {error && <div className="text-red-500 text-center">{error}</div>}
      {data.length === 0 &&
        !error && ( // Conditionally render if data array is empty and there's no error
          <div className="text-center mt-4 text-red-600">
            No items found in the cart. <a href="/shop">Shop now</a> to add
            products.
          </div>
        )}
      {data.length > 0 && !error && (
        <div className="border rounded-lg overflow-hidden mr-32 ml-32">
          <div className="border rounded-lg overflow-hidden mr-32 ml-32">
            <div className="flex justify-between font-bold bg-gray-200 p-4">
              <div className="w-2/6 text-center">Description</div>
              <div className="w-1/6 text-center">Quantity</div>
              <div className="w-1/6 text-center">Remove</div>
              <div className="w-1/6 text-center">Price</div>
            </div>
            {data.length === 0}

            {data.map((element, index) => {
              return (
                <div
                  className="p-4 flex items-center justify-between"
                  key={index}
                >
                  <div className="w-2/6 flex items-center">
                    <img
                      src={`http://localhost:4000/images/${element?.image}`} // Correctly construct the image URL
                      alt={element.name}
                      className="h-full w-full object-cover object-center lg:h-40 lg:w-40 p-5"
                    />
                    <p className="text-lg font-semibold text-justify ">
                      {element.name}
                    </p>
                  </div>
                  <div className="w-1/6 flex items-center justify-center">
                    <div className="flex items-center">
                      <button className="px-3 py-1 bg-blue-800 text-white">
                        +
                      </button>
                      <p className="font-semibold p-3">1</p>
                      <button className="px-3 py-1 bg-gray-400 text-black">
                        -
                      </button>
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
              );
            })}
            <div className="ml-88">
              <button className="border-2 p-3 rounded-lg bg-blue-800 text-white">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
