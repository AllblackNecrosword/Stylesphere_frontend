import React, { useEffect, useState } from "react";
import { userAuth } from "../../auth/userAuth";
import KhaltiCheckout from "khalti-checkout-web";
import config from "../../Khalti/Khalticonfig";
import { HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CartItems = ({ props }) => {
  let checkout = new KhaltiCheckout(config);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const { userid } = userAuth();
  // console.log("User id",userid);
  // console.log("The cart data", data);




  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/doc/getcartdata/${userid}`
        );
        if (!response.ok) {
          const errorMessage = await response.json(); // Parse error message from response
          setError(errorMessage.message); // Set error message state
        } else {
          const result = await response.json();
          setData(result);
          props.handlecheckout(data);
        }
      } catch (error) {
        console.log(error);
        setError("An error occurred while fetching cart data.");
      }
    };
    fetchdata();
  }, [userid]);
  console.log(data);

  const updateCart = async (updatedData) => {
    try {
      const response = await fetch("http://localhost:4000/doc/updatecart", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userid,
          cartData: updatedData,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to update cart data");
      }
      console.log("Cart data updated successfully");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const totalAmount = data.reduce(
    (total, item) => total + Number(item.price),
    0
  );
  const Amount = data.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncreaseQuantity = (index) => {
    const updatedData = [...data];
    updatedData[index].quantity += 1;
    setData(updatedData);
    updateCart(updatedData);
  };

  const handleDecreaseQuantity = (index) => {
    const updatedData = [...data];
    if (updatedData[index].quantity > 1) {
      updatedData[index].quantity -= 1;
      setData(updatedData);
      updateCart(updatedData);
    }
  };

  const handleDelete = async (productId, userId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/doc/delete/${userId}/${productId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete product from cart");
      }
      // If deletion is successful, update the UI by fetching updated cart data
      if (response.ok) {
        // If deletion is successful, update the UI by fetching updated cart data
        const result = await response.json(); // Parse the response // Set data to the updated cart data array
        alert("Deleted successfully");
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="h-screen pt-20 mt-6 overflow-y-auto">
      <h1 className="mb-10 text-center text-4xl font-black">Cart Items</h1>
      {/* <div className="border rounded-lg mr-36 ml-36"> */}
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 p-5">
        <div className="rounded-lg md:w-2/3">
          {data.map((element, index) => {
            return (
              <div
                className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                key={index}
              >
                <img
                  src={element.image}
                  alt="product-image"
                  className="w-full rounded-lg sm:w-40"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                      {element.name}
                    </h2>
                  </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                      <span
                        className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        onClick={() => handleDecreaseQuantity(index)}
                      >
                        {" "}
                        -{" "}
                      </span>
                      <input
                        className="h-8 w-8 border bg-white text-center text-xs outline-none"
                        type="number"
                        value={element.quantity}
                        min="1"
                      />
                      <span
                        className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        onClick={() => handleIncreaseQuantity(index)}
                      >
                        {" "}
                        +{" "}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm">
                        {element.price * element.quantity}
                      </p>
                      <HiTrash
                        onClick={() => handleDelete(element._id, userid)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sub total */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${totalAmount}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$0.00</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              {}
              <p className="mb-1 text-lg font-bold">${totalAmount} USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            <Link to={"/payment"}>Check out</Link>
          </button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default CartItems;
