const axios = require('axios');


// Routes api /search
// ROTA - ENDEREÇO - (OSRM)
const apiCallOsrm = async (origin, destination, mode) => {
  try {
    return await axios.get(
      `http://router.project-osrm.org/route/v1/${mode}/${origin};${destination}?overview=false   
      `
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = apiCallOsrm;