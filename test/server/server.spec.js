// Node
// const path = require('path');

// Libraries
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

// Middleware
chai.use(chaiHttp);

// My modules
const server = require(process.cwd() + '/server');

describe('Root Server Path', function() {
	it('Should return 200 status', function(done) {
		chai.request(server)
			.get('/')
			.end(function(err, res) {
				// expect(res.statusCode).to.equal(404);
				expect(res).to.have.status(200);
				done();
			});

	});

	it('Should have no errors', function(done) {
		chai.request(server)
			.get('/')
			.end(function(err, res) {
				expect(err).to.be.null;
				done();
			});

	});

	it('Should return HTMl', function(done) {
		chai.request(server)
			.get('/')
			.end(function(err, res) {
				expect(res).to.be.html;
				done();
			});

	});

	it('Should have headers', function(done) {
		chai.request(server)
			.get('/')
			.end(function(err, res) {
				expect(res).to.have.headers;
				done();
			});
	});
});
