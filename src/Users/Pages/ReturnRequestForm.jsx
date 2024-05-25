// import React, { useState } from "react";

// const ReturnRequestForm = () => {

//   const [formData, setFormData] = useState({
//     reason: "",
//     isDefective,
//     comment,
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({
//       ...formData,
//       [id]: value,
//     });
//   };
//   console.log(formData);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//     >
//       <div className="mb-4">
//         <label htmlFor="reason" className="block text-gray-700 font-bold mb-2">
//           Reason*
//         </label>
//         <input
//           type="text"
//           id="reason"
//           name="reason"
//           value={reason}
//           onChange={handleChange}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label
//           htmlFor="isDefective"
//           className="block text-gray-700 font-bold mb-2"
//         >
//           Defective
//         </label>
//         <select
//           id="isDefective"
//           value={isDefective}
//           onChange={handleChange}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         >
//           <option value="">Select an option</option>
//           <option value={true}>Yes</option>
//           <option value={false}>No</option>
//         </select>
//       </div>

//       <div className="mb-4">
//         <label htmlFor="comment" className="block text-gray-700 font-bold mb-2">
//           Comments
//         </label>
//         <textarea
//           id="comment"
//           value={comment}
//           onChange={handleChange}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           rows="3"
//           placeholder="General demo comment for a sales order header."
//         />
//       </div>

//       {/* <div className="mb-4">
//         <label htmlFor="file" className="block text-gray-700 font-bold mb-2">
//           File attachments
//         </label>
//         <div className="flex items-center justify-center w-full">
//           <label
//             htmlFor="file"
//             className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-gray-400"
//           >
//             <div className="flex flex-col items-center justify-center pt-5 pb-6">
//               <svg
//                 className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
//                 stroke="currentColor"
//                 fill="none"
//                 viewBox="0 0 48 48"
//                 aria-hidden="true"
//               >
//               </svg>
//               <p className="pt-1 text-sm tracking-wider text-gray-500">
//                 Choose a file or drag it here
//               </p>
//             </div>
//             <input
//               type="file"
//               id="file"
//               onChange={(e) => setFile(e.target.files[0])}
//               className="hidden"
//             />
//           </label>
//         </div>
//       </div> */}

//       <div className="flex items-center justify-end">
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Complete return request
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ReturnRequestForm;

import React, { useState } from "react";

const ReturnRequestForm = ({ selectedProductDetails }) => {
  const [formData, setFormData] = useState({
    orderId: selectedProductDetails._id,
    reason: "",
    isDefective: false, // Initialize isDefective with a default value
    comment: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:4000/order/returnform",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to submit return request");
      }
      const data = await response.json();
      console.log("Return request submitted successfully:", data);
      alert("Sucessfull")
      // Reset form data after successful submission if needed
      setFormData({
        orderId: selectedProductDetails._id,
        reason: "",
        isDefective: false,
        comment: "",
      });
    } catch (error) {
      console.error("Error submitting return request:", error);
      // Handle error here
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <label htmlFor="reason" className="block text-gray-700 font-bold mb-2">
          Reason*
        </label>
        <input
          type="text"
          id="reason"
          name="reason"
          value={formData.reason} // Use formData.reason instead of reason directly
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="isDefective"
          className="block text-gray-700 font-bold mb-2"
        >
          Defective
        </label>
        <select
          id="isDefective"
          value={formData.isDefective} // Use formData.isDefective instead of isDefective directly
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select an option</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="comment" className="block text-gray-700 font-bold mb-2">
          Comments
        </label>
        <textarea
          id="comment"
          value={formData.comment} // Use formData.comment instead of comment directly
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows="3"
          placeholder="General demo comment for a sales order header."
        />
      </div>

      <div className="flex items-center justify-end">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Complete return request
        </button>
      </div>
    </form>
  );
};

export default ReturnRequestForm;
