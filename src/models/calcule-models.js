const axios = require('axios');
const { logger } = require('../middlewares');

/**
 * Passing the Parameters
 */

const apiCallOsrm = async (origin, destination, mode) => {
  try {
    return axios.get(
      `http://router.project-osrm.org/route/v1/${mode}/${origin};${destination}?overview=false`
    );
  } catch (err) {
    logger.error(err);
  }
};

module.exports = apiCallOsrm;
