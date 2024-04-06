// import React from "react";
// import { CiDeliveryTruck } from "react-icons/ci";
// import { IoHappyOutline } from "react-icons/io5";
// import { MdSupportAgent } from "react-icons/md";
// import { GiReturnArrow } from "react-icons/gi";

// const Incentives = () => {
//   return (
//     <div className="container mx-auto mt-6 pb-14 pr-10 pl-10 ">
//       <div className="flex justify-around p-10">
//         <div className="w-1/4">
//           <CiDeliveryTruck size={80} />
//           <h4 className="font-bold p-2">Free Shipping</h4>
//           <p className="px-2 text-xs font-semibold text-gray-500">
//             It's not actually free we just price it into the products. Someone's
//             paying for it, and it's not us.
//           </p>
//         </div>
//         <div className="w-1/4">
//           <IoHappyOutline size={80} />
//           <h4 className="font-bold p-2">Customer Satisfaction</h4>
//           <p className="px-2 text-xs font-semibold text-gray-500">
//             We prioritize your happiness. If you're not satisfied with your
//             purchase, we'll make it right.
//           </p>
//         </div>
//         <div className="w-1/4">
//           <MdSupportAgent size={80} />
//           <h4 className="font-bold p-2">24/7 Customer Support</h4>
//           <p className="px-2 text-xs font-semibold text-gray-500">
//             Our dedicated support team is available round the clock to assist
//             you with any queries or concerns.
//           </p>
//         </div>
//         <div className="w-1/4">
//           <GiReturnArrow size={80} />
//           <h4 className="font-bold p-2">Hassle-Free Returns</h4>
//           <p className="px-2 text-xs font-semibold text-gray-500">
//             Not satisfied with your purchase? No worries! We offer easy returns
//             for your convenience.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Incentives;
import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoHappyOutline } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";

const Incentives = () => {
  return (
    <div className="container mx-auto mt-6 pb-14 pr-10 pl-10">
      <div className="flex flex-col lg:flex-row justify-around p-10">
        <div className="w-full md:w-1/4 lg:w-1/5">
          <CiDeliveryTruck size={80} />
          <h4 className="font-bold p-2">Free Shipping</h4>
          <p className="px-2 text-xs font-semibold text-gray-500">
            It's not actually free we just price it into the products. Someone's
            paying for it, and it's not us.
          </p>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/5">
          <IoHappyOutline size={80} />
          <h4 className="font-bold p-2">Customer Satisfaction</h4>
          <p className="px-2 text-xs font-semibold text-gray-500">
            We prioritize your happiness. If you're not satisfied with your
            purchase, we'll make it right.
          </p>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/5">
          <MdSupportAgent size={80} />
          <h4 className="font-bold p-2">24/7 Customer Support</h4>
          <p className="px-2 text-xs font-semibold text-gray-500">
            Our dedicated support team is available round the clock to assist
            you with any queries or concerns.
          </p>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/5">
          <GiReturnArrow size={80} />
          <h4 className="font-bold p-2">Hassle-Free Returns</h4>
          <p className="px-2 text-xs font-semibold text-gray-500">
            Not satisfied with your purchase? No worries! We offer easy returns
            for your convenience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Incentives;