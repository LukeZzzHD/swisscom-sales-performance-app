const express = require('express');
const salesperformanceController = require('../controllers/salesperformance.controller');

module.exports.getSalesperformanceRouter = () => {
    const router = express.Router();

    router.post(
        '/increase/:performance_name',
        salesperformanceController.increase,
    );
    router.post(
        '/decrease/:performance_name',
        salesperformanceController.decrease,
    );
    router.post('/weekly', salesperformanceController.weekly);
    router.post('/monthly', salesperformanceController.monthly);
    router.post('/yearly', salesperformanceController.yearly);
    router.post('/allPerformances', salesperformanceController.allPerformances);

    return router;
};
