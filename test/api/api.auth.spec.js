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

describe('This is for the Auth endpoints', function () {
    after(function () {
        server.close();
    });

    describe('apiKey endpoint', function () {
        it('Should have a status of 200', function (done) {
            chai.request(server)
                .get('/api/Auth/apiKey')
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    done();
                });
        });
        it('Should have no errors', function (done) {
            chai.request(server)
                .get('/api/Auth/apiKey')
                .end(function (err, res) {
                    expect(err).to.be.null;
                    done();
                });

        });
        it('Should return JSON', function (done) {
            chai.request(server)
                .get('/api/Auth/apiKey')
                .end(function (err, res) {
                    expect(res).to.be.json;
                    done();
                });
        });
        it('Should have headers', function (done) {
            chai.request(server)
                .get('/api/Auth/apiKey')
                .end(function (err, res) {
                    expect(res).to.have.headers;
                    done();
                });
        });
    });
    describe('OAuth endpoint', function () {
        it('Should have a status of 200', function (done) {
            chai.request(server)
                .get('/api/Auth/OAuth')
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    done();
                });
        });
        it('Should have no errors', function (done) {
            chai.request(server)
                .get('/api/Auth/OAuth')
                .end(function (err, res) {
                    expect(err).to.be.null;
                    done();
                });

        });
        it('Should return JSON', function (done) {
            chai.request(server)
                .get('/api/Auth/OAuth')
                .end(function (err, res) {
                    expect(res).to.be.json;
                    done();
                });
        });
        it('Should have headers', function (done) {
            chai.request(server)
                .get('/api/Auth/OAuth')
                .end(function (err, res) {
                    expect(res).to.have.headers;
                    done();
                });
        });
    });
    describe('X-Mashape-Key endpoint', function () {
        it('Should have a status of 200', function (done) {
            chai.request(server)
                .get('/api/Auth/X-Mashape-Key')
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    done();
                });
        });
        it('Should have no errors', function (done) {
            chai.request(server)
                .get('/api/Auth/X-Mashape-Key')
                .end(function (err, res) {
                    expect(err).to.be.null;
                    done();
                });

        });
        it('Should return JSON', function (done) {
            chai.request(server)
                .get('/api/Auth/X-Mashape-Key')
                .end(function (err, res) {
                    expect(res).to.be.json;
                    done();
                });
        });
        it('Should have headers', function (done) {
            chai.request(server)
                .get('/api/Auth/X-Mashape-Key')
                .end(function (err, res) {
                    expect(res).to.have.headers;
                    done();
                });
        });
    });

});
			