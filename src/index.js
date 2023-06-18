import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FileUpload from './FileUpload';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <FileUpload />
  </React.StrictMode>
);
