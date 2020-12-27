const apiCallOsrm = require('../models/calcule-models');

/**
 * Get Json From API Osrm.
 *
 * @param data origem, destino
 * @return the set of data provided by the uri
 */

class GetDataController {
  async index(req, res) {
    try {
      const { origem, destino, mode = 'driving' } = req.query;
      
      const { data } = await apiCallOsrm(origem, destino, mode);

      return res.status(200).json({
        RESULTADO: [
          {
            Peso: data.routes[0].weight,
            Duração: data.routes[0].duration,
            Distância: data.routes[0].distance,
          }
        ],
        ORIGEM: [
          {
            Nome: data.waypoints[0].name,
            Distância: data.waypoints[0].distance,
            'Latitude e Longitude': data.waypoints[0].location,
          }
        ],
        DESTINO: [
          {
            Nome: data.waypoints[1].name,
            Distância: data.waypoints[1].distance,
            'Latitude e Longitude': data.waypoints[1].location,
          }
        ],
      });
      
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
}

module.exports = GetDataController;
