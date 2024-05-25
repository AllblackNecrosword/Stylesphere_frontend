// import React, { useEffect, useState } from "react";
// import { IoPersonCircle } from "react-icons/io5";
// import { userAuth } from "../../auth/userAuth";

// const Home = () => {
//   const [data, setData] = useState([]);

//   const { userid } = userAuth();

//   const fetchOrder = async () => {
//     try {
//       const response = await fetch(`http://localhost:4000/order/${userid}`);
//       if (!response.ok) {
//         console.log("Error while fetching data");
//       }
//       const result = await response.json();
//       // If result is an object, wrap it in an array
//       const dataArray = Array.isArray(result) ? result : [result];
//       setData(dataArray);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchOrder();
//   }, []);

//   console.log(data);

//   return (
//     <div className="mt-28">
//       <div className="flex items-center justify-center border mr-4 rounded-lg p-5">
//         <div>
//           <IoPersonCircle size={63} />
//         </div>
//         <div className="font-semibold">
//           <h3 className="px-2">Koshishkhadka2003@gmail.com</h3>
//           <h3 className="px-2">Phoneno: 9843023686</h3>
//         </div>
//       </div>
//       <div className="mt-6">
//         <h1 className="text-2xl font-semibold">Your orders</h1>
//         {/* Order container */}

//         {data.map((element, index) => (
//           <div className="border p-3 mt-4 rounded-lg" key={index}>
//             <div className="flex justify-between items-center">
//               <div>
//                 <p>
//                   Order ID: :{" "}
//                   <a className="text-red-700 font-bold">{element._id}</a>
//                 </p>
//                 <p className="text-red-700 font-bold">
//                   Date:{new Date(element.createdAt).toLocaleDateString()}
//                 </p>
//               </div>
//               <button className="bg-white border-red-600 border p-2 rounded-xl font-bold hover:bg-red-600 hover:text-white ">
//                 Cancel Order
//               </button>
//             </div>
//             {/* Order content */}

//             <div className="flex flex-row flex-wrap my-4">
//               {element.products.map((item, index) => (
//                 <div className="flex mx-4" key={index}>
//                   <div className="mt-2">
//                     <img src={item.image} alt="image" className="w-44" />
//                   </div>
//                   <div className="ml-2 p-2 font-semibold">
//                     <p>{item.name}</p>
//                     <p className="text-red-500">{item.price}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { userAuth } from "../../auth/userAuth";

const Home = () => {
  const [data, setData] = useState([]);

  const { userid } = userAuth();

  const fetchOrder = async () => {
    try {
      const response = await fetch(`http://localhost:4000/order/${userid}`);
      if (!response.ok) {
        console.log("Error while fetching data");
      }
      const result = await response.json();
      // If result is an object, wrap it in an array
      const dataArray = Array.isArray(result) ? result : [result];
      setData(dataArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  // const cancelOrder = async (productid) => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:4000/order/cancel/${productid}`,
  //       {
  //         method: "PATCH", // Send a PATCH request
  //       }
  //     );

  //     if (!response.ok) {
  //       console.log("Failed fetching data");
  //       return; // Return early if there's an error
  //     }

  //     // Check if the response status is 400
  //     if (response.status === 400) {
  //       // Parse the error message from the response body
  //       console.log(
  //         "Product cannot be cancelled as it's not in 'Pending' status"
  //       ); // Display the error message on the client side
  //       return; // Return after handling the error
  //     }

  //     // If everything is fine, log success message or further process response
  //     console.log("Order canceled successfully");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const cancelOrder = async (orderId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/order/cancel/${orderId}`,
        {
          method: "PATCH",
        }
      );

      // if (!response.ok) {
      //   console.log("Failed fetching data");
      //   return; // Return early if there's an error
      // }

      const responseData = await response.json();

      if (response.status === 200) {
        console.log(responseData.message); // Display success message
      } else if (response.status === 400) {
        alert("Product cannot be cancelled as it's not in 'Pending' status"); // Display error message
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(data);

  return (
    <div className="mt-28 overflow-y-auto">
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

        <div
          className="order-container mt-4"
          style={{ maxHeight: "500px", overflowY: "auto" }}
        >
          {data.map((element, index) => (
            <div className="border p-3 mt-4 rounded-lg" key={index}>
              <div className="flex justify-between items-center">
                <div>
                  <p>
                    Order ID: :{" "}
                    <a className="text-red-700 font-bold">{element._id}</a>
                  </p>
                  <p className="text-red-700 font-bold">
                    Date:{new Date(element.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="mx-3">
                  {element.cancellationStatus === "Canceled" ? (
                    <button
                      className="bg-red-700 border-red-600 border p-2 rounded-xl font-bold text-white "
                      
                    >
                      Order canceled
                    </button>
                  ) : (
                    <>
                      <button
                        className={`border p-2 rounded-xl font-bold text-white mx-3 ${
                          element.status === "Shipped"
                            ? "bg-orange-500"
                            : element.status === "Cancelled"
                            ? "bg-red-500"
                            : element.status === "Processing"
                            ? "bg-blue-500"
                            : element.status === "Pending"
                            ? "bg-gray-500"
                            : element.status === "Delivered"
                            ? "bg-green-500"
                            : "bg-white"
                        }`}
                      >
                        {element.status}
                      </button>
                      <button
                        className="bg-white border-red-600 border p-2 rounded-xl font-bold hover:bg-red-600 hover:text-white "
                        onClick={() => cancelOrder(element._id)}
                      >
                        Cancel Order
                      </button>
                    </>
                  )}
                </div>
              </div>
              {/* Order content */}

              <div className="flex flex-row flex-wrap my-4">
                {element.products.map((item, index) => (
                  <div className="flex mx-4" key={index}>
                    <div className="mt-2">
                      <img src={item.image} alt="image" className="w-44" />
                    </div>
                    <div className="ml-2 p-2 font-semibold">
                      <p>{item.name}</p>
                      <p className="text-red-500">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
