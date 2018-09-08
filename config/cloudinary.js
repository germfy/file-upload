const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: 'dvkzmpwxk',
    api_key: '295393989199328',
    api_secret: 'dESAvDNG2djSPB7jOg5Mn3-Lm5c'
});

let storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: '/ironhack',
    allowed_formats: ['jpg', 'png'],
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const uploadCloud = multer({ storage : storage });

module.exports = uploadCloud;