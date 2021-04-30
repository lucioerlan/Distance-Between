const GetData = require('../models/calcule-models');
const Util = require('../utils/Utils');

const util = new Util();

/**
 * Get From API Osrm.
 *
 * @class DistanceController 
 * @return returns the distance/duration between two locations
 */


class DistanceController {
  async index(req, res) {
    try {   
      const { OriginOne, OriginTwo, DestOne, DestTwo, method } = req.query;

      const data = await GetData.Calcule(
        OriginOne, OriginTwo, DestOne, DestTwo, method);

      if (data) {
        util.setSuccess(200, data);
      } else {
        util.setError(400, 'no data!');
      }

      return util.send(res);
    } catch (err) {
      util.setError(500, err.message);
      return util.send(res);
    }
  }
}

module.exports = DistanceController;
