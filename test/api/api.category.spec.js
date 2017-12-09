// Libraries
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

// Middleware
chai.use(chaiHttp);

// My modules
const server = require(process.cwd() + '/server');


describe('This is for the category endpoint', function() {
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
	});
});
