/* eslint-disable */

const request = require('supertest');

const {app} = require('../src/server');

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'Home',
      }, done);
  });
});
