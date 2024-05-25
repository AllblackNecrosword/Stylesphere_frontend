import React, { useState } from "react";

const Content = () => {
  const [image1, setImage1] = useState(null);
  const [imagePreview1, setImagePreview1] = useState(null);
  const [text1, setText1] = useState("");

  const [image2, setImage2] = useState(null);
  const [imagePreview2, setImagePreview2] = useState(null);
  const [text2, setText2] = useState("");
  const [comment1, setComment1] = useState("");
  const [comment2, setComment2] = useState("");

  const handleImageChange1 = (e) => {
    const file = e.target.files[0];
    setImage1(file);
    setImagePreview1(URL.createObjectURL(file)); // Set the image preview
  };

  const handleImageChange2 = (e) => {
    const file = e.target.files[0];
    setImage2(file);
    setImagePreview2(URL.createObjectURL(file)); // Set the image preview
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("text1", text1);
      formData.append("file1", image1); 
      formData.append("text2", text2);
      formData.append("file2", image2); 
      formData.append("comment1", comment1); 
      formData.append("comment2", comment2);

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
            name="file1"
            onChange={handleImageChange1}
            className="border rounded p-2 w-full"
            accept="image/*"
          />
          {imagePreview1 && (
            <img
              src={imagePreview1}
              alt="Preview 1"
              className="mt-4 max-w-full h-48 w-48 object-cover border"
            />
          )}
          <input
            type="text"
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            placeholder="Enter banner title"
            className="border rounded p-2 w-full mt-2"
          />
            <input
            type="text"
            value={comment1}
            onChange={(e) => setComment1(e.target.value)}
            placeholder="Enter banner Comment "
            className="border rounded p-2 w-full mt-2"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image2"
          >
            Image 2
          </label>
          <input
            type="file"
            id="image2"
            name="file2"
            onChange={handleImageChange2}
            className="border rounded p-2 w-full"
            accept="image/*"
          />
          {imagePreview2 && (
            <img
              src={imagePreview2}
              alt="Preview 2"
              className="mt-4 max-w-full h-48 w-48 object-cover border"
            />
          )}
          <input
            type="text"
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            placeholder="Enter banner title"
            className="border rounded p-2 w-full mt-2"
          />
           <input
            type="text"
            value={comment2}
            onChange={(e) => setComment2(e.target.value)}
            placeholder="Enter banner Comment"
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
