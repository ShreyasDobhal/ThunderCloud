import React, { useState } from 'react';
import axios from 'axios';

const FileUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileName, setFileName] = useState('');

  const handleFileUpload = () => {
    const formData = new FormData();
    selectedFiles.forEach(file => {
      formData.append('files', file);
    });
    formData.append('name', fileName); // add the file name to the form data
    
    console.log(formData);

    axios.post('http://192.168.45.118:5000/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(() => {
      alert('Files uploaded successfully');
    }).catch(err => {
      console.log(err);
      alert('Error uploading files');
    });
  };

  const handleFileSelect = e => {
    setSelectedFiles([...selectedFiles, ...Array.from(e.target.files)]);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileSelect} />
      {/* <input type="text" value={fileName} onChange={e => setFileName(e.target.value)} /> */}
      <button onClick={handleFileUpload}>Upload Files</button>
    </div>
  );
};

export default FileUploader;
