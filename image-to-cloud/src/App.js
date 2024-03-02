import React, { useState } from "react";
import { v2 as cloudinary } from 'cloudinary'

const App = () => {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const uploadImage = () => {
    cloudinary.uploader
      .upload("my_image.jpg")
      .then(result => console.log(result));

  };
  return (
    <div>
      <div>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        <button onClick={uploadImage}>Upload</button>
      </div>
      <div>
        <h1>Uploaded image will be displayed here</h1>
        <img src={url} alt='img' />
      </div>
    </div>
  );
};
export default App;
