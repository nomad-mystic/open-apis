// Libraries
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

// Middleware
chai.use(chaiHttp);

// My modules
const server = require(process.cwd() + '/server');


/**
 * @summary Building all test for the category endpoints
 * @author Keith Murphy - nomadmystics@gmail.com
 */

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
	describe('Books endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Books')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Books')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Books')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Books')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Business endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Business')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Business')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Business')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Business')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Calendar endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Calendar')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Calendar')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Calendar')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Calendar')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Cloud Storage & File Sharing endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Cloud Storage & File Sharing')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Cloud Storage & File Sharing')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Cloud Storage & File Sharing')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Cloud Storage & File Sharing')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Continuous Integration endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Continuous Integration')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Continuous Integration')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Continuous Integration')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Continuous Integration')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Cryptocurrency endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Cryptocurrency')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Cryptocurrency')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Cryptocurrency')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Cryptocurrency')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Currency Exchange endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Currency Exchange')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Currency Exchange')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Currency Exchange')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Currency Exchange')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Data Validation endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Data Validation')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Data Validation')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Data Validation')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Data Validation')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Development endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Development')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Development')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Development')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Development')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Dictionaries endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Dictionaries')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Dictionaries')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Dictionaries')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Dictionaries')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Documents & Productivity endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Documents & Productivity')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Documents & Productivity')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Documents & Productivity')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Documents & Productivity')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Environment endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Environment')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Environment')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Environment')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Environment')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Events endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Events')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Events')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Events')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Events')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Finance endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Finance')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Finance')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Finance')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Finance')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Food & Drink endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Food & Drink')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Food & Drink')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Food & Drink')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Food & Drink')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Fraud Prevention endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Fraud Prevention')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Fraud Prevention')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Fraud Prevention')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Fraud Prevention')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Games & Comics endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Games & Comics')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Games & Comics')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Games & Comics')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Games & Comics')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Geocoding endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Geocoding')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Geocoding')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Geocoding')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Geocoding')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Government endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Government')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Government')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Government')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Government')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Health endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Health')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Health')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Health')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Health')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Jobs endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Jobs')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Jobs')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Jobs')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Jobs')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Machine Learning endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Machine Learning')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Machine Learning')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Machine Learning')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Machine Learning')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Math endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Math')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Math')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Math')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Math')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Music endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Music')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Music')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Music')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Music')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('News endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/News')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/News')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/News')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/News')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Open Data endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Open Data')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Open Data')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Open Data')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Open Data')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Open Source Projects endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Open Source Projects')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Open Source Projects')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Open Source Projects')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Open Source Projects')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Patent endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Patent')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Patent')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Patent')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Patent')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Personality endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Personality')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Personality')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Personality')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Personality')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Photography endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Photography')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Photography')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Photography')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Photography')
				.end(function(err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Science endpoint', function() {
		it('Should have a status of 200', function(done) {
			chai.request(server)
				.get('/api/category/Science')
				.end(function(err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function(done) {
			chai.request(server)
				.get('/api/category/Science')
				.end(function(err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function(done) {
			chai.request(server)
				.get('/api/category/Science')
				.end(function(err, res) {
					expect(res).to.be.json;
					done();
				});

		});
		it('Should have headers', function(done) {
			chai.request(server)
				.get('/api/category/Science')
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
