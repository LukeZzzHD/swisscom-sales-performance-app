const express = require('express');
const userController = require('../controllers/user.controller');

module.exports.getUserRouter = () => {
	const router = express.Router();

	router.post('/signup', userController.signUp);
	router.post('/signin', userController.signIn);
	router.post('/verify', userController.verify);
	router.post('/verifyAdmin', userController.verifyAdmin);

	return router;
};
