const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
	describe('GET /', () => {
		it('should return hello world response', (done) => {
			request(app)
				.get('/')
				.expect(404)
				// .expect({error: 'Page not found'})
				.expect((res) => {
					expect(res.body).toInclude({
						error: 'Page not found'
					})
				})
				.end(done);
		});
	});
	describe('GET /users', () => {
		it('should return users list at users toute', (done) => {
			request(app)
				.get('/users')
				.expect(200)
				.expect((res) => {
					expect(res.body).toInclude({
						name: 'Sakis',
						age: 35	
					})
				})
				.end(done);
		});
	});
});



