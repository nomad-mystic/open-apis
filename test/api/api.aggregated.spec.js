const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;

chai.use(chaiHttp);

const server = require(process.cwd() + '/server');


describe('This is the aggregated endpoint', function() {

	after(function() {
		server.close();
	});

	it('should have a status of 200', function (done) {
		chai.request(server)
			.get('/api/sample/10')
			.end(function(err, res) {
				expect(res).to.have.status(200);
				done();
			});
	});

});
