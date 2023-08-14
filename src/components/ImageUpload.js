import React, { useState } from 'react';
import instance from '../config/api';


function ImageUpload() {
    function convertToBase64(file){
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)

            fileReader.onload = () => {
                resolve(fileReader.result)
            }

            fileReader.onerror = (error) => {
                reject(error)
            }
        }) 
    }
  const [selectedImage, setSelectedImage] = useState(null);
  const onUpload = async (e) => {
    setSelectedImage(e.target.files[0])
  };

  const handleImageUpload = (e) => {
    e.preventDefault()
    console.log(selectedImage)
    const formData = new FormData()
    formData.append("image", selectedImage)
    instance.post('/api/v1/admin/image-upload/1', formData, {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhcHRlY2hAZ21haWwuY29tIiwiaWF0IjoxNjkxODQ4MDAzLCJleHAiOjE2OTc5MDYwMDN9.m5nLy22ACHzdR--WAW5VblsJAjgsQqMdnpSz278wNnhxThMahxhTow-Jl4qoNxie',
        
        "Content-Type": "multipart/form-data"
    }
    })
    .then((response) => {
        console.log(response.data)
        console.log('successful')
    })
    .catch((error) => {
        console.error('Error uploading image:', error);
    })
  };

  return (
    <form onSubmit={handleImageUpload} method='post' >
      <input type="file" accept="image/*" onChange={onUpload} />
      <button type='submit'>Upload Image</button>
      {/* Display the uploaded image */}
      {/* {selectedImage && <img src={selectedImage} alt="Uploaded" />} */}
    </form>
  );
}

export default ImageUpload;
