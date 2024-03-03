import multer from "multer";

import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb - callback
    cb(null, "./public/temp"); // (Error|null, destination)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // not a good practice, can be multiple files with same name from user
  },
});

export const upload = multer({
  storage: storage,
});
