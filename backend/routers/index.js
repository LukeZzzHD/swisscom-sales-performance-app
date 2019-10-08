const express = require('express');
const { getUserRouter } = require('./user.router');
const { getSalesperformanceRouter } = require('./salesperformance.router');

const getApiRouter = () => {
	const router = express.Router();

	router.use('/users', getUserRouter());
	router.use('/salesperformance', getSalesperformanceRouter());

	return router;
};

module.exports = getApiRouter;
