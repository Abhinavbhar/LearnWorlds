// multerSetup.js
import multer from 'multer';
import path from 'path';

export default function addCourses() {
  const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });

  const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }
  }).single('image');

  return function (req, res, next) {
    upload(req, res, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        if (!req.file) {
          res.status(400).json({ error: 'No file uploaded' });
        } else {
          req.uploadedFile = req.file;
          next();
        }
      }
    });
  };
}
