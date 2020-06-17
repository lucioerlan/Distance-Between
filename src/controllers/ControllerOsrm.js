const apiCallOsrm = require('../models/ModelOsrm');

// Routes api /Search
// DISTÂNCIA - ENDEREÇO - LATITUDE E LONGITUDE (ROUTER PROJECT OSRM)
const getDataOsrm = (req, res, next) => {
  const { origem, destino, mode = 'driving' } = req.query;
  apiCallOsrm(origem, destino, mode)
    .then(({ data }) => {
      res.json(

        {
          "RESULTADO": [{


            "Peso": data.routes[0].weight,
            "Duração": data.routes[0].duration,
            "Distância": data.routes[0].distance,

          }],


          "ORIGEM": [{
            "Nome": data.waypoints[0].name,
            "Distância": data.waypoints[0].distance,
            "Latitude e Longitude": data.waypoints[0].location,


          }],


          "DESTINO": [{
            "Nome": data.waypoints[1].name,
            "Distância": data.waypoints[1].distance,
            "Latitude e Longitude": data.waypoints[1].location


          }  
        
        ] }

      );
    })

    .catch(err => {
      res.status(500).json({ status: 500, message: 'Erro ao mostrar os dados, visite /api/docs', type: 'Falha' });
      next(err);
    })
};

module.exports = { getDataOsrm };
