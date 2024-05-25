
import React, { useState } from "react";

const Content = () => {
  const [image1, setImage1] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [text1, setText1] = useState("");

  const handleImageChange1 = (e) => {
    const file = e.target.files[0];
    setImage1(file);
    setImagePreview(URL.createObjectURL(file)); // Set the image preview
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("text", text1);
      formData.append("file", image1); // Correct field name

      // Send form data to backend
      await fetch("http://localhost:4000/content/Herobanner", {
        method: "PATCH",
        body: formData,
      });

      alert("Banner updated successfully");
    } catch (error) {
      console.error("Error updating banner:", error);
      alert("Error updating banner");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center mt-7">Banners</h2>
      <div className="flex items-start justify-center mt-10 bg-white p-9 rounded-2xl gap-10">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image1"
          >
            Image 1
          </label>
          <input
            type="file"
            id="image1"
            name="file"
            onChange={handleImageChange1}
            className="border rounded p-2 w-full"
            accept="image/*"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-4 max-w-full h-48 w-48 object-cover border"
            />
          )}
          <input
            type="text"
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            placeholder="Enter banner text"
            className="border rounded p-2 w-full mt-2"
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded mt-6"
      >
        Update Banner
      </button>
    </div>
  );
};

export default Content;
