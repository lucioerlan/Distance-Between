const router = require('express').Router();

//Methods
const { getDataOsrm } = require('../controllers/ControllerOsrm');

//Routes
router.use('/search', getDataOsrm);


module.exports = router;
