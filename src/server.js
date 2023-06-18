const express = require('express');
const multer  = require('multer');
const cors = require('cors');
const path = require('path');

const morgan = require('morgan');

const app = express();
const port = 5000;

app.use(morgan('dev'));
app.use(cors({
  origin: '*'
}));


// Set up the storage configuration for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Set the upload directory
    cb(null, '../../uploads/')
  },
  filename: function (req, file, cb) {
    // Set the file name with its original extension
    cb(null, file.originalname)
  }
});

// Initialize the multer middleware with the storage configuration
const upload = multer({ storage });

app.post('/upload', upload.array('files'), (req, res) => {
  const files = req.files;
  console.log(files);
  if (!files) {
    const error = new Error('Please select files');
    error.httpStatusCode = 400;
    return next(error);
  }

  res.send('Files uploaded successfully');
});


// Serve the uploaded files
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start the server
app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
