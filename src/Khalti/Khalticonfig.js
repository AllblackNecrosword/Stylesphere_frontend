import myKey from "./Khaltikey";

let config = {
  // replace this key with yours
  publicKey: myKey.PublicTestKey,
  productIdentity: "1234567890",
  productName: "Style Sphere",
  productUrl: "http://gameofthrones.com/buy/Dragons",
  eventHandler: {
    onSuccess(payload) {
      // hit merchant api for initiating verfication
      console.log(payload);
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

export default config;
// import myKey from "./Khaltikey";

// let config = {
//   // replace this key with yours
//   publicKey: myKey.PublicTestKey,
//   productIdentity: "1234567890",
//   productName: "Style Sphere",
//   productUrl: "http://gameofthrones.com/buy/Dragons",
//   eventHandler: {
//     async onSuccess(payload) {
//       try {
//         // hit merchant api for initiating verification
//         // console.log(payload);
//         let data = {
//           token: payload.token,
//           amount: payload.amount,
//         };

//         let config = {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               myKey.secretKey,
//           },
//           body: JSON.stringify(data),
//         };

//         const response = await fetch(
//           "https://khalti.com/api/v2/payment/verify/",
//           config
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const responseData = await response.json();
//         console.log(responseData);
//       } catch (error) {
//         console.log(error);
//       }
//     },
//     // onError handler is optional
//     onError(error) {
//       // handle errors
//       console.log(error);
//     },
//     onClose() {
//       console.log("widget is closing");
//     },
//   },
//   paymentPreference: [
//     "KHALTI",
//     "EBANKING",
//     "MOBILE_BANKING",
//     "CONNECT_IPS",
//     "SCT",
//   ],
// };

// export default config;
