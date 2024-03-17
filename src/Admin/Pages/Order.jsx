import React, { useState } from "react";

const Order = () => {
  const [file, setFile] = useState();
  const handleUpload = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("file", file);

    const response = await fetch("http://localhost:4000/upload", {
      method: "POST",
      body: formdata,
    });
  };
  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Order;
