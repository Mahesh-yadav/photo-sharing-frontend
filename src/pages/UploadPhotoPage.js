import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { uploadFile } from '../api/uploadFile';

export default function UploadPhotoPage() {
  const [title, setTitle] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const history = useHistory();

  const onPhotoUpload = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', selectedFile);

    const response = await uploadFile('/photos/upload', formData);

    if (response) {
      alert('Photo successfully uploaded');
      history.push('/');
    } else {
      alert('Photo upload failed');
    }
  };

  return (
    <div className="centered-container">
      <h1>Upload A New Photo</h1>
      <label>
        Title:
        <input
          type="text"
          placeholder="Enter photo title"
          className="full-width space-after"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <input
        type="file"
        className="full-width space-after"
        accept="image/png image/jpeg"
        onChange={(e) => {
          const file = e.target.files[0];
          setSelectedFile(file);
        }}
      />

      <button className="full-width" onClick={onPhotoUpload}>
        Upload Photo
      </button>
    </div>
  );
}
