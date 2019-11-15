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
