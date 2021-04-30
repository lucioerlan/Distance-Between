const request = require('supertest');
const app = require('../src/index');

describe('Lat and Lon Calculate', async () => {
  it('if you can calculate the distance using Lat Lon as parameters', (done) => {
    request(app)
      .get('/api/search')
      .query({
        OriginOne: 'lat=-9.9765362',
        OriginTwo: 'lon=-67.8220778',
        DestOne: 'lat=-3.1316333',
        DestTwo: 'lon=-59.9825041',
        method: 'reverse',
      })
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('Address Calculate', async () => {
  it('if you can calculate the distance using Address as parameters', (done) => {
    request(app)
      .get('/api/search')
      .query({
        OriginOne: 'city=Rio Branco',
        OriginTwo: 'state=AC',
        DestOne: 'city=Manaus',
        DestTwo: 'state=AM',
        method: 'search',
      })
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
