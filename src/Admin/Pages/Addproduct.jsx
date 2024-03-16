// import React, { useState } from "react";

// const Addproduct = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     quantity: "",
//     description: "",
//     category: "",
//     productType: "",
//     sizes: [],
//     image: "", // Add image property to formData
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleImage = (e) => {
//     const file = e.target.files[0];
//     setFileToBase(file);
//   };

//   const setFileToBase = (file) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//       setFormData({
//         ...formData,
//         image: reader.result, // Update image property in formData
//       });
//     };
//   };

//   const handleCategoryChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//       sizes: [],
//     });
//   };

//   // const handleProductTypeChange = (event) => {
//   //   const { name, value } = event.target;
//   //   setFormData({
//   //     ...formData,
//   //     [name]: value,
//   //   });
//   // };

//   const renderSizeInputs = () => {
//     if (formData.category === "shoes" || formData.category === "cloth") {
//       return (
//         <div className="w-full md:w-1/2 lg:w-1/4">
//           <label
//             htmlFor="sizes"
//             className="block text-gray-800 font-bold text-sm"
//           >
//             {formData.category === "shoes" ? "Shoe Sizes" : "Cloth Sizes"}
//           </label>
//           <div className="mt-2">
//             {formData.sizes.map((size, index) => (
//               <input
//                 key={index}
//                 type="text"
//                 name={`size-${index}`}
//                 value={size}
//                 onChange={(e) => handleSizeChange(index, e.target.value)}
//                 className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 mb-2"
//               />
//             ))}
//             <button
//               onClick={addSizeInput}
//               className="text-blue-600 cursor-pointer"
//             >
//               + Add Size
//             </button>
//           </div>
//         </div>
//       );
//     }
//     return null;
//   };

//   const addSizeInput = () => {
//     setFormData({
//       ...formData,
//       sizes: [...formData.sizes, ""],
//     });
//   };

//   const handleSizeChange = (index, value) => {
//     const newSizes = [...formData.sizes];
//     newSizes[index] = value;
//     setFormData({
//       ...formData,
//       sizes: newSizes,
//     });
//   };

//   const submitHandler = async (e) => {
//     try {
//       e.preventDefault();
//       const addproduct = { ...formData };
//       console.log("Submitting data:", addproduct); // Debugging: Log submitted data
//       // Optimize image size before uploading (optional)
//       // Implement image optimization logic here if needed

//       const response = await fetch("http://localhost:4000/api/products", {
//         method: "POST",
//         body: JSON.stringify(addproduct),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       console.log("Server response:", response); // Debugging: Log server response

//       if (!response.ok) {
//         // Handle error response
//         throw new Error("Unexpected response from server. Please try again.");
//       } else {
//         // Parse the JSON response
//         const result = await response.json();
//         console.log("Response data:", result); // Debugging: Log response data

//         if (result.success) {
//           alert("Successfully created a product");
//           setFormData({
//             name: "",
//             price: "",
//             quantity: "",
//             description: "",
//             category: "",
//             productType: "",
//             sizes: [],
//             image: "",
//           });
//         } else {
//           throw new Error("Failed to create product");
//         }
//       }
//     } catch (error) {
//       alert(error.message);
//       console.error(error);
//     }
//   };

//   return (
//     <div className="h-full">
//       <div className="mt-16">
//         <hr className="border-t border-gray-400" />
//       </div>
//       <div className="px-8 py-2 text-3xl">
//         <h1 className="font-black">Inventory Status</h1>
//       </div>
//       <div className="p-5">
//         <div>
//           <h2 className="text-2xl font-bold">Add Product</h2>
//           <p className="text-gray-600 border-b-2 pb-3">Add a new product</p>
//         </div>
//         <div className="pt-4 flex flex-wrap gap-4">
//           <div className="w-full md:w-1/2 lg:w-1/4">
//             <label
//               htmlFor="inputname"
//               className="block text-gray-800 font-bold text-sm"
//             >
//               Name
//             </label>
//             <div className="mt-2">
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
//               />
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 lg:w-1/4">
//             <label
//               htmlFor="price"
//               className="block text-gray-800 font-bold text-sm"
//             >
//               Price
//             </label>
//             <div className="mt-2">
//               <input
//                 type="text"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleInputChange}
//                 className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
//               />
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 lg:w-1/4">
//             <label
//               htmlFor="quantity"
//               className="block text-gray-800 font-bold text-sm"
//             >
//               Quantity
//             </label>
//             <div className="mt-2">
//               <input
//                 type="text"
//                 name="quantity"
//                 value={formData.quantity}
//                 onChange={handleInputChange}
//                 className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
//               />
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 lg:w-1/4">
//             <label
//               htmlFor="category"
//               className="block text-gray-800 font-bold text-sm"
//             >
//               Category
//             </label>
//             <div className="mt-2">
//               <select
//                 id="category"
//                 name="category"
//                 value={formData.category}
                
//                 className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
//               >
//                 <option value="men">men</option>
//                 <option value="women">women</option>
//                 <option value="kid">kid</option>
//               </select>
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 lg:w-1/4">
//             <label
//               htmlFor="productType"
//               className="block text-gray-800 font-bold text-sm"
//             >
//               Product Type
//             </label>
//             <div className="mt-2">
//               <select
//                 id="productType"
//                 name="productType"
//                 value={formData.productType}
//                 // onChange={handleProductTypeChange}
//                 onChange={handleCategoryChange}
//                 className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
//               >
//                 <option value="clothes">clothes</option>
//                 <option value="shoes">shoes</option>
//                 <option value="accessories">accessories</option>
//               </select>
//             </div>
//           </div>
//           <div className="w-full">
//             <label
//               htmlFor="description"
//               className="block text-gray-800 font-bold text-sm"
//             >
//               Description
//             </label>
//             <div className="mt-2">
//               <textarea
//                 name="description"
//                 value={formData.description}
//                 onChange={handleInputChange}
//                 className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
//               ></textarea>
//             </div>
//           </div>
//           {renderSizeInputs()}
//         </div>
//         <div className="form-outline mb-4">
//           <input
//             onChange={handleImage}
//             type="file"
//             id="formupload"
//             name="image"
//             className="form-control"
//           />
//           <label className="form-label" htmlFor="form4Example2">
//             Image
//           </label>
//         </div>
//         <img className="img-fluid" src={formData.image} alt="Preview" />
//         <button
//           onClick={submitHandler}
//           className="border p-3 rounded-xl bg-gray-900 font-semibold text-white"
//         >
//           Create
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Addproduct;
import React, { useState } from "react";

const Addproduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
    description: "",
    category: "",
    productType: "",
    sizes: [],
    image: "", // Add image property to formData
  });
  console.log(formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: reader.result, // Update image property in formData
      });
    };
  };

  const handleCategoryChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      sizes: [],
    });
  };

  const renderSizeInputs = () => {
    if (formData.productType === "clothes" || formData.productType === "shoes") {
      return (
        <div className="w-full md:w-1/2 lg:w-1/4">
          <label
            htmlFor="sizes"
            className="block text-gray-800 font-bold text-sm"
          >
            {formData.productType === "shoes" ? "Shoe Sizes" : "Cloth Sizes"}
          </label>
          <div className="mt-2">
            {formData.sizes.map((size, index) => (
              <input
                key={index}
                type="text"
                name={`size-${index}`}
                value={size}
                onChange={(e) => handleSizeChange(index, e.target.value)}
                className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 mb-2"
              />
            ))}
            <button
              onClick={addSizeInput}
              className="text-blue-600 cursor-pointer"
            >
              + Add Size
            </button>
          </div>
        </div>
      );
    }
    return null;
  };

  const addSizeInput = () => {
    setFormData({
      ...formData,
      sizes: [...formData.sizes, ""],
    });
  };

  const handleSizeChange = (index, value) => {
    const newSizes = [...formData.sizes];
    newSizes[index] = value;
    setFormData({
      ...formData,
      sizes: newSizes,
    });
  };

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const addproduct = { ...formData };
      console.log("Submitting data:", addproduct); // Debugging: Log submitted data
      // Optimize image size before uploading (optional)
      // Implement image optimization logic here if needed

      const response = await fetch("http://localhost:4000/api/products", {
        method: "POST",
        body: JSON.stringify(addproduct),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Server response:", response); // Debugging: Log server response

      if (!response.ok) {
        // Handle error response
        throw new Error("Unexpected response from server. Please try again.");
      } else {
        // Parse the JSON response
        const result = await response.json();
        console.log("Response data:", result); // Debugging: Log response data

        if (result.success) {
          alert("Successfully created a product");
          setFormData({
            name: "",
            price: "",
            quantity: "",
            description: "",
            category: "",
            productType: "",
            sizes: [],
            image: "",
          });
        } else {
          throw new Error("Failed to create product");
        }
      }
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };

  return (
    <div className="h-full">
      <div className="mt-16">
        <hr className="border-t border-gray-400" />
      </div>
      <div className="px-8 py-2 text-3xl">
        <h1 className="font-black">Inventory Status</h1>
      </div>
      <div className="p-5">
        <div>
          <h2 className="text-2xl font-bold">Add Product</h2>
          <p className="text-gray-600 border-b-2 pb-3">Add a new product</p>
        </div>
        <div className="pt-4 flex flex-wrap gap-4">
          <div className="w-full md:w-1/2 lg:w-1/4">
            <label
              htmlFor="inputname"
              className="block text-gray-800 font-bold text-sm"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <label
              htmlFor="price"
              className="block text-gray-800 font-bold text-sm"
            >
              Price
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <label
              htmlFor="quantity"
              className="block text-gray-800 font-bold text-sm"
            >
              Quantity
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <label
              htmlFor="category"
              className="block text-gray-800 font-bold text-sm"
            >
              Category
            </label>
            <div className="mt-2">
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleCategoryChange}
                className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
              >
                <option value="men">men</option>
                <option value="women">women</option>
                <option value="kid">kid</option>
              </select>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <label
              htmlFor="productType"
              className="block text-gray-800 font-bold text-sm"
            >
              Product Type
            </label>
            <div className="mt-2">
              <select
                id="productType"
                name="productType"
                value={formData.productType}
                onChange={handleInputChange}
                className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
              >
                <option value="clothes">clothes</option>
                <option value="shoes">shoes</option>
                <option value="accessories">accessories</option>
              </select>
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="description"
              className="block text-gray-800 font-bold text-sm"
            >
              Description
            </label>
            <div className="mt-2">
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
              ></textarea>
            </div>
          </div>
          {renderSizeInputs()}
        </div>
        <div className="form-outline mb-4">
          <input
            onChange={handleImage}
            type="file"
            id="formupload"
            name="image"
            className="form-control"
          />
          <label className="form-label" htmlFor="form4Example2">
            Image
          </label>
        </div>
        <img className="img-fluid" src={formData.image} alt="Preview" />
        <button
          onClick={submitHandler}
          className="border p-3 rounded-xl bg-gray-900 font-semibold text-white"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Addproduct;
