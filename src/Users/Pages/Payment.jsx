import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import config from "../../Khalti/Khalticonfig";
import { useEffect, useState } from "react";
import { userAuth } from "../../auth/userAuth";
import myKey from "../../Khalti/Khaltikey";
const Payment = () => {
  //Khalti
  let config = {
    // replace this key with yours
    publicKey: myKey.PublicTestKey,
    productIdentity: "1234567890",
    productName: "Style Sphere",
    productUrl: "http://gameofthrones.com/buy/Dragons",
    amount:2000,
    eventHandler: {
      onSuccess(payload) {
        // hit merchant api for initiating verfication
        console.log(payload);
        handleSubit();
      },
      // onError handler is optional
      onError(error) {
        // handle errors
        console.log(error);
      },
      onClose() {
        console.log("widget is closing");
      },
    },
    paymentPreference: [
      "KHALTI",
      "EBANKING",
      "MOBILE_BANKING",
      "CONNECT_IPS",
      "SCT",
    ],
  };
  //Khalti

  let checkout = new KhaltiCheckout(config);

  const [data, setData] = useState([]);
  const { userid } = userAuth();
  const [input, setInput] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    postalcode: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

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
        }
      } catch (error) {
        console.log(error);
        setError("An error occurred while fetching cart data.");
      }
    };
    fetchdata();
  }, [userid]);

  //   console.log("Payment data", data);

  const handleSubit = async (e) => {
    try {
      // Prepare order data
      const orderData = {
        customer: userid, // Assuming userid is the customer ID
        shippingAddress: {
          name: input.name,
          email: input.email,
          address: input.address,
          city: input.city,
          state: input.state,
          postalCode: input.postalcode,
        },
        totalPrice: totalAmount, // Assuming totalPrice is calculated elsewhere
        paymentMethod: "Khalti", // Assuming payment method is Khalti
        status: "Pending", // Assuming initial status is pending
        products: data, // Assuming data is an array of products fetched from backend
      };

      // Send order data to backend
      const response = await fetch("http://localhost:4000/order/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message || "Failed to create order");
      }

      alert("Order Sucessfull");
      
      // Order created successfully, handle next steps (e.g., redirect to thank you page)
    } catch (error) {
      console.error("Error creating order:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  const totalAmount = data.reduce(
    (total, item) => total + Number(item.price),
    0
  );


  return (
    <div className="mt-24 mb-24">
      <div className="font-[sans-serif] bg-white">
        <div className="max-lg:max-w-xl mx-auto w-full">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 max-lg:order-1 p-6 max-w-4xl mx-auto w-full">
              <div className="text-center max-lg:hidden">
                <h2 className="text-3xl font-extrabold text-[#333] inline-block border-b-4 border-[#333] pb-1">
                  Checkout
                </h2>
              </div>
              <form className="lg:mt-12">
                <div>
                  <h2 className="text-2xl font-extrabold text-[#333]">
                    Shipping info
                  </h2>
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="px-2 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                      onChange={handlechange}
                      value={input.name}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="px-2 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                      onChange={handlechange}
                      value={input.email}
                    />
                    <input
                      type="text"
                      name="address"
                      placeholder="Street address"
                      className="px-2 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                      onChange={handlechange}
                      value={input.address}
                    />
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      className="px-2 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                      onChange={handlechange}
                      value={input.city}
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      className="px-2 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                      onChange={handlechange}
                      value={input.state}
                    />
                    <input
                      type="number"
                      name="postalcode"
                      placeholder="Postal code"
                      className="px-2 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                      onChange={handlechange}
                      value={input.postalcode}
                    />
                  </div>
                </div>
                <div className="mt-12">
                  <h2 className="text-2xl font-extrabold text-[#333]">
                    Payment method
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2 mt-8">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        className="w-5 h-5 cursor-pointer"
                        id="card"
                        name="khati"
                        checked
                      />
                      <label
                        for="card"
                        className="ml-4 flex gap-2 cursor-pointer"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Khalti_Digital_Wallet_Logo.jpg/1280px-Khalti_Digital_Wallet_Logo.jpg"
                          className="w-25"
                          alt="card1"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <button
                    type="button"
                    className="min-w-[150px] px-6 py-3.5 text-sm bg-gray-100 text-[#333] rounded-md hover:bg-gray-200"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="min-w-[150px] px-6 py-3.5 text-sm bg-[#333] text-white rounded-md hover:bg-[#111]"
                    onClick={() => checkout.show({ amount: 1000 })}
                  >
                    <p className="text-green-600">Confirm payment $240</p>
                  </button>
                   {/* <button
                    type="button"
                    className="min-w-[150px] px-6 py-3.5 text-sm bg-[#333] text-white rounded-md hover:bg-[#111]"
                    onClick={handleSubit}
                  >
                    <p className="text-green-600">Confirm payment $240</p>
                  </button> */}
                </div>
              </form>
            </div>
            <div className="bg-gray-100 lg:h-screen lg:sticky lg:top-0">
              <div className="relative h-full">
                <div className="p-8 lg:overflow-auto lg:h-[calc(100vh-60px)] max-lg:mb-8">
                  <h2 className="text-2xl font-extrabold text-[#333]">
                    Order Summary
                  </h2>
                  <div className="space-y-6 mt-10">
                    {data.map((element, index) => {
                      return (
                        <>
                          <div
                            className="grid sm:grid-cols-2 items-start gap-6"
                            key={index}
                          >
                            <div className="max-w-[190px] px-4 py-6 shrink-0 bg-gray-200 rounded-md">
                              <img
                                src={element.image}
                                className="w-full object-contain"
                              />
                            </div>
                            <div>
                              <h3 className="text-base text-[#333]">
                                {element.name}
                              </h3>
                              <ul className="text-xs text-[#333] space-y-2 mt-2">
                                {/* <li className="flex flex-wrap gap-4">
                                  Size <span className="ml-auto">37</span>
                                </li> */}
                                <li className="flex flex-wrap gap-4">
                                  Quantity{}
                                  <span className="ml-auto">
                                    {element.quantity}
                                  </span>
                                </li>
                                <li className="flex flex-wrap gap-4">
                                  Total Price{" "}
                                  <span className="ml-auto">
                                    {element.price}
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="absolute left-0 bottom-0 bg-gray-200 w-full p-4">
                  <h4 className="flex flex-wrap gap-4 text-base text-[#333] font-bold">
                    Total <span className="ml-auto">{totalAmount}</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
