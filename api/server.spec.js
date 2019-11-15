const request = require('supertest')
const server = require('./server')

describe('server', () => {
  describe('[GET] / endpoint testing', () => {

    test('should return 200 OK', async () => {
      const response = await request(server).get('/')
      expect(response.status).toBe(200)
    })


    test('with supertest syntax', () => {
      return request(server).get('/')
        .expect(200)
        .expect({ message: 'Welcome to the default zone, please specify a path' })
        .expect('Content-Length', "64")
        .expect('Content-Type', /json/)
    })

  })
})

describe("jokes router", () => {
  it ("you get a 400 error when you try to get in without header", async () => {
      return await request(server).get("/api/jokes").expect(401);
  })

  it(" returns a json object", () => {
      const response = request(server).get("/api/jokes");
      expect(response.type);
  })
})

//Remember to change the username after each Post/register test,
//because in the database the username is unique thus cannot be used more than once

describe('POST /register', function() {
  it('responds with json', function(done) {
    request(server)
      .post('/api/auth/register')
      .send({
        "username": "John Doe",
        "password":"Anytime"
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', "application/json; charset=utf-8")
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});


describe('POST /login', function() {
  it('responds with json', function(done) {
    request(server)
      .post('/api/auth/login')
      .send({
        "username": "JohnyD",
        // "password":"Anytime"
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', "application/json; charset=utf-8")
      .expect(500)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});