const router = require('express').Router();

const GetDataController = require('../controllers/calcule-controller');

const getDataController = new GetDataController();

router.get('/search', getDataController.index);

module.exports = router;
