import React, { useState } from 'react';
import axios from 'axios';

export const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [url, setUrl] = useState('http://res.cloudinary.com/sunil-dhakad/image/upload/v1709359725/uzwigt8heeelin5rc3ef.png')
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', 'khai2wez');
    try {
      setUploadStatus('Uploading...');
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/sunil-dhakad/image/upload',
        formData
      );
      setUploadStatus('Upload successful!');
      const { data } = response;
      setUrl(data.url)
      console.log('File uploaded:', data.url);
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus('Upload failed');
    }
  };

  return (
    <div style={{ padding: "10px", border: "1px solid grey", margin: "2px" }}>
      <input type="file" onChange={handleFileChange} />

      <button style={{ marginTop: "5px", cursor: "pointer", padding: "5px", backgroundColor: "blue", color: "white", borderRadius: "5px", border: "1px solid grey" }} onClick={handleUpload}>Upload</button>
      <p>{uploadStatus}</p>
      {url && <img src={url} alt="Not found" width="50" height="60"></img>}
    </div>
  );
};


