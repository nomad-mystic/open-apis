// Node
const path = require('path');

// Libraries
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

// My modules
const server = require(process.cwd() + '/server.js');

describe('Root Server Path', () => {

	it('Should return 200 status', () => {
		chai.request(server)
			.get('/')
			.end((err, res) => {
				expect(res).to.have.status(200);
			});
	});

	it('Should have no errors', () => {
		chai.request(server)
			.get('/')
			.end((err, res) => {
				expect(err).to.be.null;
			});
	});

});