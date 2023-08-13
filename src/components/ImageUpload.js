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
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setSelectedImage(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleImageUpload = async (e) => {
    e.preventDefault()
    console.log(selectedImage)
    
    instance.put('/api/v1/admin/updateImage/1', {image: selectedImage}, {
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhcHRlY2hAZ21haWwuY29tIiwiaWF0IjoxNjkxODQ4MDAzLCJleHAiOjE2OTc5MDYwMDN9.m5nLy22ACHzdR--WAW5VblsJAjgsQqMdnpSz278wNnhxThMahxhTow-Jl4qoNxie'
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
