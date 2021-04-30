const router = require('express').Router();
const DistanceController = require('../controller/calcule-controller');

const distanceController = new DistanceController();

router.get('/search/:distance', distanceController.index);

module.exports = router;
