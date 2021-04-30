const { get } = require('axios');

/**
 *
 * @param {*} rowOne
 * @param {*} rowTwo
 * @param {*} method
 *
 * return a latitude and longitude:
 * (1) origin
 * (2) destination
 * (3) search type
 */

const NominatimUrl = async (rowOne, rowTwo, method) => {
  const { data } = await get(
    `https://nominatim.openstreetmap.org/${method}?${rowOne}&${rowTwo}&format=json&polygon=0&addressdetails=1`
  );

  if (Array.isArray(data)) {
    return `${data[0].lon},${data[0].lat}`;
  }

  return `${data.lon},${data.lat}`;
};


/**
 *
 * @param {*} origin
 * @param {*} destination
 *
 * returns a distance/duration between two locations:
 * (1) origin
 * (2) destination
 * (3) search type
 */

const OsrmUrl = async (origin, destination) => {
  const { data: { routes } } = await get(
    `http://router.project-osrm.org/route/v1/driving/${origin};${destination}?overview=false`
  );

  return `Total distance is ${Math.round(
    routes[0].distance / 1000
  )} km and total time is ${Math.round(
    (routes[0].duration % 3600) / 60
  )} minutes`;
};


module.exports = {
  NominatimUrl,
  OsrmUrl,
};
