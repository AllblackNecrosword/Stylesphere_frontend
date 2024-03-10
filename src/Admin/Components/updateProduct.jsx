import React, { useState } from "react";

const updateProduct = ({ product, onUpdate, onClose }) => {
    const [updatedProduct, setUpdatedProduct] = useState({ ...product });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProduct((prevProduct) => ({
          ...prevProduct,
          [name]: value,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(updatedProduct);
      };


  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Update Product</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={updatedProduct.name}
            onChange={handleChange}
          />
          {/* Add more input fields for other product data */}
          <button type="submit">Update</button>
          <button onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  )
}

export default updateProduct
