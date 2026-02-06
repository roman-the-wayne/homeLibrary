import React from 'react';
import { uploadImage } from '../services/imageAPI';

function ImageUploader() {
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const result = await uploadImage(file);
      alert("Успех: " + result.message);
    } catch (error) {
      alert("Ошибка: " + error.message);
    }
  };

  return (
    <div className="uploader-card">
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
}

export default ImageUploader;