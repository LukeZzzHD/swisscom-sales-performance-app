const express = require('express');
const userController = require('../controllers/user.controller');
const multer = require('multer');
const uuidv4 = require('uuid/v4');

module.exports.getUserRouter = () => {
    const router = express.Router();
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/profile_pictures');
        },
        filename: (req, file, cb) => {
            cb(null, `${uuidv4()}.${file.mimetype.split('/')[1]}`);
        }
    });

    const upload = multer({
        storage,
        limits: {
            fileSize: 1024 * 1024 * 5
        }
    });

    router.post('/signup', upload.single('profilePicture'), userController.signUp);
    router.post('/signin', userController.signIn);
    router.post('/verify', userController.verify);
    router.post('/verifyAdmin', userController.verifyAdmin);

    return router;
};
