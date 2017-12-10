// Libraries
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

// Middleware
chai.use(chaiHttp);

// My modules
const server = require(process.cwd() + '/server');


describe('This is for the category endpoints', function() {
	after(function() {
		server.close();
	});

	describe('Animals endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Animals')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Animals')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Animals')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Animals')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});

	describe('Art & Design endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Art & Design')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Art & Design')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Art & Design')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Art & Design')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Security endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Security')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Security')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Security')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Security')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Shopping endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Shopping')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Shopping')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Shopping')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Shopping')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Social endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Social')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Social')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Social')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Social')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Sports & Fitness endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Sports & Fitness')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Sports & Fitness')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Sports & Fitness')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Sports & Fitness')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Test Data endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Test Data')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Test Data')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Test Data')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Test Data')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Text Analysis endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Text Analysis')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Text Analysis')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Text Analysis')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Text Analysis')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Tracking endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Tracking')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Tracking')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Tracking')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Tracking')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transportation endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Transportation')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Transportation')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});
		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Transportation')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Transportation')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('University endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/University')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/University')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});
		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/University')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/University')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('URL Shorteners endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/URL Shorteners')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/URL Shorteners')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});
		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/URL Shorteners')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/URL Shorteners')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Vehicle endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Vehicle')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Vehicle')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});
		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Vehicle')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Vehicle')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Video endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Video')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Video')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});
		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Video')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Video')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Weather endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Weather')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Weather')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});
		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Weather')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Weather')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
}); // Parent Category endpoint
