import React, { useState } from "react";


const Addproduct = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [category, setCategory] = useState("cloth");
  const [sizes, setSizes] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

 


  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setSizes([]);
  };

 
  const renderSizeInputs = () => {
    if (category === "shoes" || category === "cloth") {
      return (
        <div className="w-full md:w-1/2 lg:w-1/4">
          <label
            htmlFor="sizes"
            className="block text-gray-800 font-bold text-sm"
          >
            {category === "shoes" ? "Shoe Sizes" : "Cloth Sizes"}
          </label>
          <div className="mt-2">
            {sizes.map((size, index) => (
              <input
                key={index}
                type="text"
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
    setSizes([...sizes, ""]);
  };

  const handleSizeChange = (index, value) => {
    const newSizes = [...sizes];
    newSizes[index] = value;
    setSizes(newSizes);
  };


  return (
    <div className="bg-neutral-200  h-full ">
      <div className="mt-16">
        <hr className="border-t border-gray-400" />
      </div>
      <div className="px-8 py-2 text-3xl ">
        <h1 className="font-black">Inventory Status</h1>
      </div>
      {/* starts */}
      <div className="p-5">
        <div>
          <h2 className="text-2xl font-bold ">Add Product</h2>
          <p className="text-gray-600 border-b-2 pb-3">Add a new product</p>
        </div>
        {/* Forms */}
        <div className="pt-4 flex flex-wrap gap-4">
          {/* Name */}
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
                name="inputname"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
              />
            </div>
          </div>
          {/* Price */}
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
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
              />
            </div>
          </div>
          {/* Discount Price */}
          <div className="w-full md:w-1/2 lg:w-1/4">
            <label
              htmlFor="discountPrice"
              className="block text-gray-800 font-bold text-sm"
            >
              Quantity
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
              />
            </div>
          </div>
          {/* Category */}
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
                value={category}
                onChange={handleCategoryChange}
                className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
              >
                <option value="cloth">Cloth</option>
                <option value="shoes">Shoes</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>
          </div>
          {/* Color */}
          <div className="w-full md:w-1/2 lg:w-1/4">
            <label
              htmlFor="color"
              className="block text-gray-800 font-bold text-sm"
            >
              Description
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
              />
            </div>
          </div>
          {renderSizeInputs()}
        </div>
        <div className="my-6">
          <label
            htmlFor="image"
            className="block text-gray-800 font-bold text-sm"
          >
            Upload Image
          </label>
          <div className="mt-2">
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
          {imagePreview && (
            <div className="mt-4">
              <p className="text-gray-800 font-semibold text-sm">Preview:</p>
              <img
                src={imagePreview}
                alt="Image Preview"
                style={{ maxWidth: "200px", maxHeight: "150px" }}
                className="mt-2 rounded-md"
              />
            </div>
          )}
        </div>

        <button className="border p-3 rounded-xl bg-gray-900 font-semibold text-white">
          Create
        </button>
      </div>
      {/*  */}
      
    </div>
  );
};

export default Addproduct;
