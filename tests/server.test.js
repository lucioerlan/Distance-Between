const request = require('supertest');
const app = require('../server');

describe('Must return 200 when the source and destination exist', async () => {
  it('Must return 200 when the source and destination exist', (done) => {
    request(app)
      .get('/api/search')
      .query({ origem: '-43.9353,-19.9245', destino: '-46.6333,-23.5505' })
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
