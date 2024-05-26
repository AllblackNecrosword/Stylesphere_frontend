

// import React, { useState } from "react";

// const ReturnRequestForm = ({ selectedProductDetails }) => {
//   const [formData, setFormData] = useState({
//     orderId: selectedProductDetails._id,
//     reason: "",
//     isDefective: false, // Initialize isDefective with a default value
//     comment: "",
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({
//       ...formData,
//       [id]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         "http://localhost:4000/order/returnform",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Failed to submit return request");
//       }
//       const data = await response.json();
//       console.log("Return request submitted successfully:", data);
//       alert("Sucessfull")
//       // Reset form data after successful submission if needed
//       setFormData({
//         orderId: selectedProductDetails._id,
//         reason: "",
//         isDefective: false,
//         comment: "",
//       });
//     } catch (error) {
//       console.error("Error submitting return request:", error);
//       // Handle error here
//     }
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
//           value={formData.reason} // Use formData.reason instead of reason directly
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
//           value={formData.isDefective} // Use formData.isDefective instead of isDefective directly
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
//           value={formData.comment} // Use formData.comment instead of comment directly
//           onChange={handleChange}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           rows="3"
//           placeholder="General demo comment for a sales order header."
//         />
//       </div>

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
import { toast } from "react-toastify";

const ReturnRequestForm = ({ selectedProductDetails }) => {
  const [formData, setFormData] = useState({
    orderId: selectedProductDetails._id,
    reason: "",
    isDefective: "", // Initialize as empty string
    comment: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.reason) newErrors.reason = "Reason is required";
    if (formData.isDefective === "") newErrors.isDefective = "Defective status is required";
    if (!formData.comment) newErrors.comment = "Comment is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fill in all required fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/order/returnform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to submit return request");
      }
      const data = await response.json();
      console.log("Return request submitted successfully:", data);
      toast.success("Return request submitted successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      // Reset form data after successful submission if needed
      setFormData({
        orderId: selectedProductDetails._id,
        reason: "",
        isDefective: "",
        comment: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting return request:", error);
      toast.error("Error submitting return request", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
          value={formData.reason} 
          onChange={handleChange}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.reason && 'border-red-500'}`}
          required
        />
        {errors.reason && (
          <p className="text-red-500 text-xs italic">{errors.reason}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="isDefective"
          className="block text-gray-700 font-bold mb-2"
        >
          Defective*
        </label>
        <select
          id="isDefective"
          value={formData.isDefective} 
          onChange={handleChange}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.isDefective && 'border-red-500'}`}
          required
        >
          <option value="">Select an option</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        {errors.isDefective && (
          <p className="text-red-500 text-xs italic">{errors.isDefective}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="comment" className="block text-gray-700 font-bold mb-2">
          Comments*
        </label>
        <textarea
          id="comment"
          value={formData.comment} 
          onChange={handleChange}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.comment && 'border-red-500'}`}
          rows="3"
          placeholder="General demo comment for a sales order header."
          required
        />
        {errors.comment && (
          <p className="text-red-500 text-xs italic">{errors.comment}</p>
        )}
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
