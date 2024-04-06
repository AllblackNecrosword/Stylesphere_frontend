// import React, { useState } from "react";

// const updateProduct = ({ product, onUpdate, onClose }) => {

//   const [input, setInput] = useState({
//     name: "",
//     category: "",
//     productType: "",
//     quantity: "",
//     price: "",
//     description: "",
//     sizes: [],
//     image: "",
//   });

//   const inputhandler = (e) => {
//     setInput({ ...input, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div
//       className="fixed top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-50 flex justify-center items-center"
//       style={{ zIndex: 1000 }}
//     >
//       <div className="bg-white p-8 rounded-lg shadow-lg mt-8 w-1/3">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-lg font-semibold">Update Product</h2>
//           {/* <button className="text-gray-600" onClick={onClose}>
//             Close
//           </button> */}
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 font-bold mb-2"
//               htmlFor="name"
//             >
//               Name
//             </label>
//             <input
//               className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
//               id="name"
//               type="text"
//               name="name"
//               value={input.name}
//               onChange={inputhandler}
//             />
//           </div>
//           {/* Price */}
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 font-bold mb-2"
//               htmlFor="name"
//             >
//               Price
//             </label>
//             <input
//               className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
//               id="price"
//               type="text"
//               name="name"
//               value={updatedProduct.price}
//               onChange={inputhandler}
//             />
//           </div>
//           {/* category */}
//           <div className="mb-4">
//             <label htmlFor="category" className="block mb-1">
//               Category:
//             </label>
//             <select
//               id="category"
//               name="category"
//               value={input.category}
//               onChange={inputhandler}
//               className="w-full px-3 py-2 border rounded-md"
//             >
//               <option value="">Select Category</option>
//               <option value="men">Men</option>
//               <option value="women">Women</option>
//               <option value="kids">Kids</option>
//             </select>
//           </div>
//           {/* Product type */}
//           <div className="mb-4">
//             <label htmlFor="productType" className="block mb-1">
//               Product Type:
//             </label>
//             <input
//               type="text"
//               id="productType"
//               name="productType"
//               value={input.productType}
//               onChange={inputhandler}
//               className="w-full px-3 py-2 border rounded-md"
//             />
//           </div>
//           {/* Quantity */}
//           <div className="mb-4">
//             <label htmlFor="quantity" className="block mb-1">
//               Quantity:
//             </label>
//             <input
//               type="number"
//               id="quantity"
//               name="quantity"
//               value={input.quantity}
//               onChange={inputhandler}
//               className="w-full px-3 py-2 border rounded-md"
//             />
//           </div>
//           {/*  Description*/}
//           <div className="mb-4">
//             <label htmlFor="description" className="block mb-1">
//               Description:
//             </label>
//             <textarea
//               id="description"
//               name="description"
//               value={input.description}
//               onChange={inputhandler}
//               className="w-full px-3 py-2 border rounded-md"
//             ></textarea>
//           </div>
//           {/* Sizes */}
//           <div className="mb-4">
//             <label htmlFor="sizes" className="block mb-1">
//               Sizes:
//             </label>
//             {input.sizes.map((size, index) => (
//               <input
//                 key={index}
//                 type="text"
//                 id="sizes"
//                 value={size}
//                 onChange={(e) => handleSizeChange(e, index)}
//                 className="w-full px-3 py-2 border rounded-md mb-2"
//               />
//             ))}
//             <button
//               type="button"
//               onClick={() =>
//                 setInput({ ...input, sizes: [...input.sizes, ""] })
//               }
//               className="bg-blue-500 text-white px-4 py-2 rounded-md"
//             >
//               Add Size
//             </button>
//           </div>
//           {/* Images */}
//           <div className="mb-4">
//             <label htmlFor="images" className="block mb-1">
//               Images:
//             </label>
//             <input
//               type="file"
//               id="images"
//               name="images"
//               accept="image/*"
//               multiple
//               onChange={inputhandler}
//               className="w-full px-3 py-2 border rounded-md"
//             />
//           </div>
//           {/* Add more input fields for other product data */}
//           <div className="flex items-center justify-end mt-4">
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mr-2"
//               type="submit"
//             >
//               Update
//             </button>
//             <button
//               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
//               onClick={onClose}
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default updateProduct;
import React, { useState } from "react";

const UpdateProduct = ({ product, onUpdate, onClose }) => {
  const [input, setInput] = useState({
    name: "",
    category: "",
    productType: "",
    quantity: "",
    price: "",
    description: "",
    sizes: [],
    image: "",
  });

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
    // console.log(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    // You can call onUpdate function here passing input object
  };
  const handleSizeChange = (e, index) => {
    const newSizes = [...formData.sizes];
    newSizes[index] = e.target.value;
    setFormData({
      ...formData,
      sizes: newSizes,
    });
  };
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg mt-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Update Product</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="h-96 overflow-auto">
          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={input.name}
              onChange={inputHandler}
              className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* Category */}
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-gray-700 font-bold mb-2"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={input.category}
              onChange={inputHandler}
              className="w-full border rounded-md py-2 px-3"
            >
              <option value="">Select Category</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
            </select>
          </div>
          {/* Product Type */}
          <div className="mb-4">
            <label
              htmlFor="productType"
              className="block text-gray-700 font-bold mb-2"
            >
              Product Type
            </label>
            <input
              id="productType"
              type="text"
              name="productType"
              value={input.productType}
              onChange={inputHandler}
              className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* Quantity */}
          <div className="mb-4">
            <label
              htmlFor="quantity"
              className="block text-gray-700 font-bold mb-2"
            >
              Quantity
            </label>
            <input
              id="quantity"
              type="text"
              name="quantity"
              value={input.quantity}
              onChange={inputHandler}
              className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* Price */}
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-bold mb-2"
            >
              Price
            </label>
            <input
              id="price"
              type="text"
              name="price"
              value={input.price}
              onChange={inputHandler}
              className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={input.description}
              onChange={inputHandler}
              className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* Sizes */}
          <div className="mb-4">
            <label
              htmlFor="sizes"
              className="block text-gray-700 font-bold mb-2"
            >
              Sizes
            </label>
            {input.sizes.map((size, index) => (
              <input
                key={index}
                type="text"
                id="sizes"
                value={size}
                onChange={(e) => handleSizeChange(e, index)}
                className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            ))}
            <button
              type="button"
              onClick={() =>
                setInput({ ...input, sizes: [...input.sizes, ""] })
              }
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg mt-2"
            >
              Add Size
            </button>
          </div>
          {/* Image */}
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 font-bold mb-2"
            >
              Image
            </label>
            <input
              id="image"
              type="file"
              name="image"
              accept="image/*"
              onChange={inputHandler}
              className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* Buttons */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mr-2"
            >
              Update
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
