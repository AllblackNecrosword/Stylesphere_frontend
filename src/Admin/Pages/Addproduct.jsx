import React, { useState } from "react";
import { TailSpin, ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
const Addproduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    productType: "",
    quantity: "",
    price: "",
    description: "",
    sizes: [],
    image: "",
  });
  const [loading, setLoading] = useState(false);

  // console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSizeChange = (e, index) => {
    const newSizes = [...formData.sizes];
    newSizes[index] = e.target.value;
    setFormData({
      ...formData,
      sizes: newSizes,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const addproduct = { ...formData };
      // Perform any validation or data processing here
      const formDataToSend = new FormData();
      Object.entries(addproduct).forEach(([key, value]) => {
        if (key === "sizes") {
          value.forEach((size, index) => {
            formDataToSend.append(`sizes[${index}]`, size);
          });
        } else if (key === "image") {
          formDataToSend.append("file", value);
        } else {
          formDataToSend.append(key, value);
        }
      });

      const response = await fetch("http://localhost:4000/api/products", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      const result = await response.json();

      if (result._id) {
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
        toast.success("Product Added Sucessfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLoading(false);
      } else {
        throw new Error("Failed to create product");
      }
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block mb-1">
            Category:
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Select Category</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="productType" className="block mb-1">
            Product Type:
          </label>
          <input
            type="text"
            id="productType"
            name="productType"
            value={formData.productType}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block mb-1">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-1">
            Price:
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="sizes" className="block mb-1">
            Sizes:
          </label>
          {formData.sizes.map((size, index) => (
            <input
              key={index}
              type="text"
              value={size}
              onChange={(e) => handleSizeChange(e, index)}
              className="w-full px-3 py-2 border rounded-md mb-2"
            />
          ))}
          <button
            type="button"
            onClick={() =>
              setFormData({ ...formData, sizes: [...formData.sizes, ""] })
            }
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add Size
          </button>
        </div>
        <div className="mb-4">
          <label htmlFor="images" className="block mb-1">
            Images:
          </label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          {loading ? (
            <TailSpin width={35} height={25} color="white" />
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default Addproduct;
