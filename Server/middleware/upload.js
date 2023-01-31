const multer = require("multer");

const avatarstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../Client/src/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const avatarUpload = multer({ storage: avatarstorage }).single("avatar");

const cartStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../Client/src/images/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const cartUpload = multer({ storage: cartStorage }).single('uploads')

exports.avatarUpload = avatarUpload;
exports.cartUpload = cartUpload;
