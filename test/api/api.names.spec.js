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

describe('This is for the names endpoints', function () {
	after(function () {
		server.close();
	});

	describe('Dogs endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Dogs')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Dogs')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Dogs')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Dogs')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('IUCN endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/IUCN')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/IUCN')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/IUCN')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/IUCN')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Movebank endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Movebank')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Movebank')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Movebank')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Movebank')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Petfinder endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Petfinder')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Petfinder')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Petfinder')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Petfinder')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('RescueGroups endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/RescueGroups')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/RescueGroups')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/RescueGroups')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/RescueGroups')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('AniList endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/AniList')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/AniList')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/AniList')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/AniList')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Jikan endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Jikan')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Jikan')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Jikan')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Jikan')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Kitsu endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Kitsu')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Kitsu')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Kitsu')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Kitsu')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Studio Ghibli endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Studio Ghibli')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Studio Ghibli')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Studio Ghibli')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Studio Ghibli')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('AlienVault Open Threat Exchange (OTX) endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/AlienVault Open Threat Exchange (OTX)')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/AlienVault Open Threat Exchange (OTX)')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/AlienVault Open Threat Exchange (OTX)')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/AlienVault Open Threat Exchange (OTX)')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Certly endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Certly')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Certly')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Certly')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Certly')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Google Safe Browsing endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Google Safe Browsing')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Google Safe Browsing')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Google Safe Browsing')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Google Safe Browsing')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Metacert endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Metacert')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Metacert')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Metacert')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Metacert')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('VirusTotal endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/VirusTotal')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/VirusTotal')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/VirusTotal')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/VirusTotal')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Web Of Trust (WOT) endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Web Of Trust (WOT)')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Web Of Trust (WOT)')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Web Of Trust (WOT)')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Web Of Trust (WOT)')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Behance endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Behance')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Behance')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Behance')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Behance')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Cooper Hewitt endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Cooper Hewitt')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Cooper Hewitt')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Cooper Hewitt')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Cooper Hewitt')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Dribbble endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Dribbble')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Dribbble')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Dribbble')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Dribbble')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Harvard Art Museums endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Harvard Art Museums')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Harvard Art Museums')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Harvard Art Museums')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Harvard Art Museums')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Iconfinder endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Iconfinder')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Iconfinder')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Iconfinder')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Iconfinder')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Icons8 endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Icons8')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Icons8')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Icons8')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Icons8')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Noun Project endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Noun Project')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Noun Project')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Noun Project')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Noun Project')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Rijksmuseum endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Rijksmuseum')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Rijksmuseum')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Rijksmuseum')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Rijksmuseum')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('British National Bibliography endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/British National Bibliography')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/British National Bibliography')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/British National Bibliography')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/British National Bibliography')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Goodreads endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Goodreads')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Goodreads')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Goodreads')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Goodreads')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Google Books endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Google Books')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Google Books')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Google Books')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Google Books')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Open Library endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Open Library')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Open Library')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Open Library')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Open Library')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Charity Search endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Charity Search')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Charity Search')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Charity Search')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Charity Search')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Clearbit Logo API endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Clearbit Logo API')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Clearbit Logo API')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Clearbit Logo API')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Clearbit Logo API')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Domainsdb.info endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Domainsdb.info')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Domainsdb.info')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Domainsdb.info')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Domainsdb.info')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Gmail endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Gmail')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Gmail')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Gmail')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Gmail')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Google Analytics endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Google Analytics')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Google Analytics')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Google Analytics')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Google Analytics')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('mailgun endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/mailgun')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/mailgun')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/mailgun')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/mailgun')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('markerapi endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/markerapi')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/markerapi')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/markerapi')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/markerapi')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Trello endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Trello')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Trello')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Trello')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Trello')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Church Calendar endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Church Calendar')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Church Calendar')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Church Calendar')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Church Calendar')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Czech Namedays Calendar endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Czech Namedays Calendar')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Czech Namedays Calendar')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Czech Namedays Calendar')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Czech Namedays Calendar')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Google Calendar endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Google Calendar')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Google Calendar')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Google Calendar')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Google Calendar')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Hebrew Calendar endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Hebrew Calendar')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Hebrew Calendar')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Hebrew Calendar')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Hebrew Calendar')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Holidays endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Holidays')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Holidays')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Holidays')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Holidays')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('LectServe endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/LectServe')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/LectServe')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/LectServe')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/LectServe')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Non-Working Days endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Non-Working Days')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Non-Working Days')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Non-Working Days')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Non-Working Days')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Box endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Box')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Box')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Box')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Box')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Dropbox endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Dropbox')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Dropbox')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Dropbox')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Dropbox')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Google Drive endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Google Drive')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Google Drive')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Google Drive')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Google Drive')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('OneDrive endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/OneDrive')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/OneDrive')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/OneDrive')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/OneDrive')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Pastebin endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Pastebin')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Pastebin')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Pastebin')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Pastebin')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('CircleCI endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/CircleCI')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/CircleCI')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/CircleCI')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/CircleCI')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Codeship endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Codeship')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Codeship')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Codeship')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Codeship')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Travis CI endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Travis CI')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Travis CI')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Travis CI')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Travis CI')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Blockchain endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Blockchain')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Blockchain')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Blockchain')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Blockchain')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Coinbase endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Coinbase')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Coinbase')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Coinbase')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Coinbase')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('CoinBin endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/CoinBin')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/CoinBin')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/CoinBin')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/CoinBin')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('CoinDesk endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/CoinDesk')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/CoinDesk')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/CoinDesk')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/CoinDesk')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('CoinMarketCap endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/CoinMarketCap')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/CoinMarketCap')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/CoinMarketCap')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/CoinMarketCap')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('CryptoCompare endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/CryptoCompare')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/CryptoCompare')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/CryptoCompare')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/CryptoCompare')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('MercadoBitcoin endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/MercadoBitcoin')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/MercadoBitcoin')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/MercadoBitcoin')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/MercadoBitcoin')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('1Forge endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/1Forge')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/1Forge')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/1Forge')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/1Forge')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Currencylayer endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Currencylayer')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Currencylayer')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Currencylayer')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Currencylayer')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Czech National Bank endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Czech National Bank')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Czech National Bank')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Czech National Bank')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Czech National Bank')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Fixer.io endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Fixer.io')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Fixer.io')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Fixer.io')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Fixer.io')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('languagelayer endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/languagelayer')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/languagelayer')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/languagelayer')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/languagelayer')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Lob.com endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Lob.com')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Lob.com')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Lob.com')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Lob.com')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('mailboxlayer endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/mailboxlayer')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/mailboxlayer')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/mailboxlayer')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/mailboxlayer')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('MailTest endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/MailTest')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/MailTest')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/MailTest')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/MailTest')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('NumValidate endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/NumValidate')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/NumValidate')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/NumValidate')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/NumValidate')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('numverify endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/numverify')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/numverify')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/numverify')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/numverify')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('PurgoMalum endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/PurgoMalum')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/PurgoMalum')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/PurgoMalum')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/PurgoMalum')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('vatlayer endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/vatlayer')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/vatlayer')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/vatlayer')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/vatlayer')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('ApiLeap endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/ApiLeap')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/ApiLeap')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/ApiLeap')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/ApiLeap')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('APIs.guru endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/APIs.guru')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/APIs.guru')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/APIs.guru')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/APIs.guru')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('BetterMeta endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/BetterMeta')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/BetterMeta')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/BetterMeta')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/BetterMeta')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Bitbucket endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Bitbucket')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Bitbucket')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Bitbucket')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Bitbucket')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Browshot endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Browshot')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Browshot')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Browshot')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Browshot')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('CDNJS endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/CDNJS')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/CDNJS')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/CDNJS')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/CDNJS')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Changelogs.md endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Changelogs.md')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Changelogs.md')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Changelogs.md')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Changelogs.md')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Count.io endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Count.io')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Count.io')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Count.io')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Count.io')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('DigitalOcean Status endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/DigitalOcean Status')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/DigitalOcean Status')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/DigitalOcean Status')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/DigitalOcean Status')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('DomainDb Info endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/DomainDb Info')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/DomainDb Info')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/DomainDb Info')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/DomainDb Info')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Faceplusplus endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Faceplusplus')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Faceplusplus')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Faceplusplus')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Faceplusplus')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Genderize.io endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Genderize.io')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Genderize.io')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Genderize.io')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Genderize.io')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Github endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Github')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Github')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Github')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Github')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Gitter endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Gitter')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Gitter')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Gitter')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Gitter')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('HackerRank endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/HackerRank')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/HackerRank')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/HackerRank')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/HackerRank')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('HTTP2.Pro endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/HTTP2.Pro')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/HTTP2.Pro')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/HTTP2.Pro')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/HTTP2.Pro')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('import.io endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/import.io')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/import.io')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/import.io')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/import.io')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('IPify endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/IPify')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/IPify')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/IPify')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/IPify')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('IPinfo endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/IPinfo')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/IPinfo')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/IPinfo')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/IPinfo')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('JSON 2 JSONP endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/JSON 2 JSONP')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/JSON 2 JSONP')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/JSON 2 JSONP')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/JSON 2 JSONP')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('JSONbin.io endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/JSONbin.io')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/JSONbin.io')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/JSONbin.io')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/JSONbin.io')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Judge0 API endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Judge0 API')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Judge0 API')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Judge0 API')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Judge0 API')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Kairos endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Kairos')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Kairos')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Kairos')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Kairos')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Lets Validate endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Let\'s Validate')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Let\'s Validate')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Let\'s Validate')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Let\'s Validate')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('LiveEdu endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/LiveEdu')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/LiveEdu')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/LiveEdu')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/LiveEdu')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Myjson endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Myjson')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Myjson')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Myjson')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Myjson')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Plino endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Plino')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Plino')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Plino')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Plino')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Public APIs endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Public APIs')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Public APIs')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Public APIs')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Public APIs')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('QR code endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/QR code')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/QR code')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/QR code')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/QR code')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('ReqRes endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/ReqRes')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/ReqRes')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/ReqRes')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/ReqRes')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Scrape Website Email endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Scrape Website Email')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Scrape Website Email')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Scrape Website Email')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Scrape Website Email')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('SHOUTCLOUD endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/SHOUTCLOUD')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/SHOUTCLOUD')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/SHOUTCLOUD')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/SHOUTCLOUD')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('StackExchange endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/StackExchange')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/StackExchange')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/StackExchange')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/StackExchange')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Verse endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Verse')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Verse')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Verse')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Verse')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('XML to JSON endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/XML to JSON')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/XML to JSON')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/XML to JSON')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/XML to JSON')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Oxford endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Oxford')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Oxford')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Oxford')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Oxford')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Wordnik endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Wordnik')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Wordnik')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Wordnik')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Wordnik')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Words endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Words')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Words')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Words')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Words')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('File.io endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/File.io')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/File.io')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/File.io')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/File.io')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Mercury endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Mercury')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Mercury')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Mercury')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Mercury')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('pdflayer API endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/pdflayer API')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/pdflayer API')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/pdflayer API')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/pdflayer API')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Pocket endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Pocket')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Pocket')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Pocket')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Pocket')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('PrexView endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/PrexView')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/PrexView')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/PrexView')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/PrexView')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Restpack endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Restpack')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Restpack')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Restpack')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Restpack')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Todoist endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Todoist')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Todoist')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Todoist')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Todoist')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Wunderlist endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Wunderlist')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Wunderlist')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Wunderlist')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Wunderlist')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('AirVisual endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/AirVisual')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/AirVisual')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/AirVisual')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/AirVisual')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('OpenAQ endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/OpenAQ')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/OpenAQ')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/OpenAQ')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/OpenAQ')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('PM2.5.in endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/PM2.5.in')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/PM2.5.in')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/PM2.5.in')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/PM2.5.in')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('UK Carbon Intensity endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/UK Carbon Intensity')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/UK Carbon Intensity')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/UK Carbon Intensity')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/UK Carbon Intensity')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Eventbrite endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Eventbrite')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Eventbrite')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Eventbrite')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Eventbrite')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Picatic endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Picatic')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Picatic')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Picatic')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Picatic')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Ticketmaster endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Ticketmaster')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Ticketmaster')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Ticketmaster')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Ticketmaster')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Alpha Vantage endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Alpha Vantage')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Alpha Vantage')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Alpha Vantage')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Alpha Vantage')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Barchart OnDemand endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Barchart OnDemand')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Barchart OnDemand')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Barchart OnDemand')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Barchart OnDemand')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Consumer Financial Protection Bureau endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Consumer Financial Protection Bureau')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Consumer Financial Protection Bureau')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Consumer Financial Protection Bureau')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Consumer Financial Protection Bureau')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('IEX endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/IEX')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/IEX')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/IEX')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/IEX')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('IG endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/IG')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/IG')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/IG')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/IG')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Plaid endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Plaid')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Plaid')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Plaid')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Plaid')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Razorpay IFSC endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Razorpay IFSC')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Razorpay IFSC')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Razorpay IFSC')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Razorpay IFSC')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('RoutingNumbers.info endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/RoutingNumbers.info')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/RoutingNumbers.info')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/RoutingNumbers.info')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/RoutingNumbers.info')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('VAT Rates endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/VAT Rates')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/VAT Rates')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/VAT Rates')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/VAT Rates')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('BigOven endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/BigOven')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/BigOven')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/BigOven')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/BigOven')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('BreweryDB endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/BreweryDB')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/BreweryDB')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/BreweryDB')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/BreweryDB')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Edamam endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Edamam')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Edamam')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Edamam')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Edamam')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Food2Fork endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Food2Fork')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Food2Fork')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Food2Fork')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Food2Fork')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('LCBO endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/LCBO')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/LCBO')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/LCBO')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/LCBO')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Open Food Facts endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Open Food Facts')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Open Food Facts')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Open Food Facts')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Open Food Facts')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('PunkAPI endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/PunkAPI')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/PunkAPI')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/PunkAPI')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/PunkAPI')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Recipe Puppy endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Recipe Puppy')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Recipe Puppy')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Recipe Puppy')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Recipe Puppy')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('TacoFancy endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/TacoFancy')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/TacoFancy')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/TacoFancy')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/TacoFancy')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('The Report of the Week endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/The Report of the Week')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/The Report of the Week')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/The Report of the Week')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/The Report of the Week')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('TheCocktailDB endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/TheCocktailDB')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/TheCocktailDB')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/TheCocktailDB')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/TheCocktailDB')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('TheMealDB endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/TheMealDB')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/TheMealDB')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/TheMealDB')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/TheMealDB')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('What\'s on the menu? endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/What\'s on the menu?')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/What\'s on the menu?')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/What\'s on the menu?')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/What\'s on the menu?')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Yummly endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Yummly')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Yummly')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Yummly')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Yummly')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Zomato endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Zomato')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Zomato')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Zomato')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Zomato')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Whitepages Pro endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Whitepages Pro')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Whitepages Pro')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Whitepages Pro')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Whitepages Pro')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Whitepages Pro endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Whitepages Pro')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Whitepages Pro')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Whitepages Pro')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Whitepages Pro')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Whitepages Pro endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Whitepages Pro')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Whitepages Pro')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Whitepages Pro')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Whitepages Pro')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Whitepages Pro endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Whitepages Pro')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Whitepages Pro')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Whitepages Pro')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Whitepages Pro')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Whitepages Pro endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Whitepages Pro')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Whitepages Pro')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Whitepages Pro')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Whitepages Pro')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Battle.net endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Battle.net')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Battle.net')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Battle.net')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Battle.net')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Battlefield 4 endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Battlefield 4')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Battlefield 4')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Battlefield 4')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Battlefield 4')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Chuck Norris Database endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Chuck Norris Database')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Chuck Norris Database')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Chuck Norris Database')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Chuck Norris Database')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Clash of Clans endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Clash of Clans')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Clash of Clans')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Clash of Clans')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Clash of Clans')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Clash Royale endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Clash Royale')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Clash Royale')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Clash Royale')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Clash Royale')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Comic Vine endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Comic Vine')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Comic Vine')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Comic Vine')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Comic Vine')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Deck of Cards endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Deck of Cards')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Deck of Cards')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Deck of Cards')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Deck of Cards')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Destiny The Game endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Destiny The Game')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Destiny The Game')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Destiny The Game')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Destiny The Game')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Dota 2 endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Dota 2')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Dota 2')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Dota 2')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Dota 2')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Eve Online endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Eve Online')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Eve Online')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Eve Online')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Eve Online')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Games endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Games')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Games')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Games')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Games')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Giant Bomb endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Giant Bomb')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Giant Bomb')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Giant Bomb')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Giant Bomb')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Guild Wars 2 endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Guild Wars 2')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Guild Wars 2')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Guild Wars 2')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Guild Wars 2')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Halo endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Halo')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Halo')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Halo')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Halo')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Hearthstone endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Hearthstone')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Hearthstone')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Hearthstone')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Hearthstone')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Jokes endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Jokes')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Jokes')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Jokes')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Jokes')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Jservice endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Jservice')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Jservice')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Jservice')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Jservice')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Magic The Gathering endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Magic The Gathering')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Magic The Gathering')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Magic The Gathering')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Magic The Gathering')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Marvel endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Marvel')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Marvel')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Marvel')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Marvel')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Open Trivia endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Open Trivia')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Open Trivia')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Open Trivia')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Open Trivia')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('PandaScore endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/PandaScore')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/PandaScore')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/PandaScore')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/PandaScore')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('PlayerUnknown\'s Battlegrounds endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/PlayerUnknown\'s Battlegrounds')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/PlayerUnknown\'s Battlegrounds')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/PlayerUnknown\'s Battlegrounds')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/PlayerUnknown\'s Battlegrounds')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Pokéapi endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Pokéapi')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Pokéapi')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Pokéapi')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Pokéapi')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Qriusity endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Qriusity')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Qriusity')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Qriusity')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Qriusity')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Riot Games endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Riot Games')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Riot Games')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Riot Games')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Riot Games')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Steam endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Steam')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Steam')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Steam')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Steam')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('xkcd endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/xkcd')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/xkcd')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/xkcd')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/xkcd')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('adresse.data.gouv.fr endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/adresse.data.gouv.fr')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/adresse.data.gouv.fr')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/adresse.data.gouv.fr')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/adresse.data.gouv.fr')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Battuta endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Battuta')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Battuta')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Battuta')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Battuta')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Bing Maps endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Bing Maps')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Bing Maps')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Bing Maps')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Bing Maps')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('City Context endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/City Context')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/City Context')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/City Context')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/City Context')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('CitySDK endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/CitySDK')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/CitySDK')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/CitySDK')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/CitySDK')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Daum Maps endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Daum Maps')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Daum Maps')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Daum Maps')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Daum Maps')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('FreeGeoIP endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/FreeGeoIP')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/FreeGeoIP')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/FreeGeoIP')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/FreeGeoIP')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('GeoApi endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/GeoApi')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/GeoApi')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/GeoApi')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/GeoApi')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Geocode.xyz endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Geocode.xyz')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Geocode.xyz')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Geocode.xyz')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Geocode.xyz')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('GeoNames endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/GeoNames')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/GeoNames')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/GeoNames')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/GeoNames')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Google Maps endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Google Maps')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Google Maps')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Google Maps')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Google Maps')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('GraphLoc endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/GraphLoc')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/GraphLoc')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/GraphLoc')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/GraphLoc')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('IP 2 Country endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/IP 2 Country')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/IP 2 Country')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/IP 2 Country')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/IP 2 Country')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('IP Address Details endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/IP Address Details')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/IP Address Details')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/IP Address Details')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/IP Address Details')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('IP Location endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/IP Location')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/IP Location')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/IP Location')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/IP Location')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('IP Sidekick endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/IP Sidekick')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/IP Sidekick')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/IP Sidekick')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/IP Sidekick')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('IP Vigilante endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/IP Vigilante')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/IP Vigilante')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/IP Vigilante')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/IP Vigilante')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Mapbox endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Mapbox')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Mapbox')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Mapbox')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Mapbox')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Mapzen Search endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Mapzen Search')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Mapzen Search')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Mapzen Search')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Mapzen Search')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Mexico endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Mexico')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Mexico')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Mexico')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Mexico')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('One Map, Singapore endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/One Map, Singapore')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/One Map, Singapore')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/One Map, Singapore')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/One Map, Singapore')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('OnWater endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/OnWater')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/OnWater')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/OnWater')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/OnWater')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('OpenCage endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/OpenCage')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/OpenCage')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/OpenCage')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/OpenCage')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('OpenStreetMap endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/OpenStreetMap')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/OpenStreetMap')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/OpenStreetMap')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/OpenStreetMap')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('PostcodeData.nl endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/PostcodeData.nl')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/PostcodeData.nl')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/PostcodeData.nl')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/PostcodeData.nl')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Postcodes.io endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Postcodes.io')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Postcodes.io')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Postcodes.io')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Postcodes.io')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('REST Countries endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/REST Countries')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/REST Countries')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/REST Countries')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/REST Countries')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Uebermaps endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Uebermaps')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Uebermaps')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Uebermaps')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Uebermaps')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Utah AGRC endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Utah AGRC')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Utah AGRC')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Utah AGRC')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Utah AGRC')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('ViaCep endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/ViaCep')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/ViaCep')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/ViaCep')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/ViaCep')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Zippopotam endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Zippopotam')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Zippopotam')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Zippopotam')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Zippopotam')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('BCLaws endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/BCLaws')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/BCLaws')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/BCLaws')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/BCLaws')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('BusinessUSA endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/BusinessUSA')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/BusinessUSA')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/BusinessUSA')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/BusinessUSA')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Census.gov endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Census.gov')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Census.gov')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Census.gov')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Census.gov')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('EPA endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/EPA')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/EPA')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/EPA')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/EPA')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('FEC endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/FEC')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/FEC')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/FEC')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/FEC')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Food Standards Agency endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Food Standards Agency')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Food Standards Agency')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Food Standards Agency')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Food Standards Agency')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Regulations.gov endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Regulations.gov')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Regulations.gov')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Regulations.gov')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Regulations.gov')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('BetterDoctor endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/BetterDoctor')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/BetterDoctor')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/BetterDoctor')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/BetterDoctor')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Diabetes endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Diabetes')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Diabetes')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Diabetes')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Diabetes')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Flutrack endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Flutrack')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Flutrack')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Flutrack')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Flutrack')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Healthcare.gov endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Healthcare.gov')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Healthcare.gov')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Healthcare.gov')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Healthcare.gov')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Lexigram endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Lexigram')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Lexigram')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Lexigram')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Lexigram')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Makeup endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Makeup')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Makeup')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Makeup')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Makeup')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Medicare endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Medicare')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Medicare')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Medicare')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Medicare')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('NPPES endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/NPPES')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/NPPES')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/NPPES')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/NPPES')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Nutritionix endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Nutritionix')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Nutritionix')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Nutritionix')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Nutritionix')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('openFDA endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/openFDA')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/openFDA')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/openFDA')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/openFDA')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('USDA Nutrients endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/USDA Nutrients')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/USDA Nutrients')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/USDA Nutrients')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/USDA Nutrients')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Adzuna endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Adzuna')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Adzuna')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Adzuna')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Adzuna')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Authentic Jobs endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Authentic Jobs')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Authentic Jobs')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Authentic Jobs')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Authentic Jobs')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Careerjet endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Careerjet')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Careerjet')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Careerjet')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Careerjet')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Github Jobs endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Github Jobs')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Github Jobs')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Github Jobs')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Github Jobs')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Indeed endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Indeed')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Indeed')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Indeed')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Indeed')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Jobs2Careers endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Jobs2Careers')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Jobs2Careers')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Jobs2Careers')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Jobs2Careers')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Jooble endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Jooble')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Jooble')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Jooble')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Jooble')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Juju endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Juju')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Juju')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Juju')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Juju')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Open Skills endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Open Skills')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Open Skills')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Open Skills')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Open Skills')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Reed endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Reed')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Reed')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Reed')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Reed')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Search.gov Jobs endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Search.gov Jobs')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Search.gov Jobs')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Search.gov Jobs')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Search.gov Jobs')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('The Muse endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/The Muse')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/The Muse')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/The Muse')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/The Muse')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Upwork endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Upwork')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Upwork')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Upwork')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Upwork')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('USAJOBS endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/USAJOBS')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/USAJOBS')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/USAJOBS')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/USAJOBS')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('ZipRecruiter endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/ZipRecruiter')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/ZipRecruiter')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/ZipRecruiter')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/ZipRecruiter')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Clarifai endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Clarifai')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Clarifai')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Clarifai')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Clarifai')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Cleverbot endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Cleverbot')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Cleverbot')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Cleverbot')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Cleverbot')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Dialogflow endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Dialogflow')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Dialogflow')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Dialogflow')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Dialogflow')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Keen IO endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Keen IO')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Keen IO')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Keen IO')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Keen IO')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Unplugg endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Unplugg')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Unplugg')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Unplugg')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Unplugg')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Wit.ai endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Wit.ai')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Wit.ai')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Wit.ai')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Wit.ai')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Newton endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Newton')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Newton')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Newton')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Newton')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Numbers API endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Numbers API')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Numbers API')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Numbers API')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Numbers API')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Bandsintown endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Bandsintown')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Bandsintown')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Bandsintown')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Bandsintown')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Deezer endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Deezer')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Deezer')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Deezer')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Deezer')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Discogs endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Discogs')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Discogs')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Discogs')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Discogs')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Genius endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Genius')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Genius')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Genius')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Genius')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('iTunes Search endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/iTunes Search')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/iTunes Search')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/iTunes Search')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/iTunes Search')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Jamendo endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Jamendo')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Jamendo')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Jamendo')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Jamendo')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('LastFm endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/LastFm')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/LastFm')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/LastFm')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/LastFm')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Lyrics.ovh endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Lyrics.ovh')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Lyrics.ovh')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Lyrics.ovh')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Lyrics.ovh')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Mixcloud endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Mixcloud')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Mixcloud')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Mixcloud')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Mixcloud')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('MusicBrainz endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/MusicBrainz')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/MusicBrainz')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/MusicBrainz')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/MusicBrainz')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Musikki endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Musikki')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Musikki')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Musikki')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Musikki')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Musixmatch endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Musixmatch')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Musixmatch')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Musixmatch')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Musixmatch')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Songkick endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Songkick')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Songkick')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Songkick')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Songkick')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Songsterr endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Songsterr')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Songsterr')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Songsterr')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Songsterr')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Soundcloud endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Soundcloud')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Soundcloud')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Soundcloud')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Soundcloud')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Spotify endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Spotify')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Spotify')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Spotify')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Spotify')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('TasteDive endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/TasteDive')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/TasteDive')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/TasteDive')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/TasteDive')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('TheAudioDB endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/TheAudioDB')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/TheAudioDB')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/TheAudioDB')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/TheAudioDB')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Vagalume endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Vagalume')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Vagalume')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Vagalume')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Vagalume')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Chronicling America endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Chronicling America')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Chronicling America')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Chronicling America')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Chronicling America')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Feedbin endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Feedbin')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Feedbin')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Feedbin')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Feedbin')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('New York Times endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/New York Times')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/New York Times')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/New York Times')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/New York Times')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('News API endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/News API')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/News API')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/News API')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/News API')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('NPR One endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/NPR One')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/NPR One')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/NPR One')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/NPR One')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('The Guardian endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/The Guardian')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/The Guardian')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/The Guardian')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/The Guardian')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('18F endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/18F')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/18F')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/18F')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/18F')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Abbreviation endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Abbreviation')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Abbreviation')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Abbreviation')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Abbreviation')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Callook.info endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Callook.info')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Callook.info')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Callook.info')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Callook.info')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('CARTO endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/CARTO')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/CARTO')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/CARTO')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/CARTO')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Celebinfo endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Celebinfo')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Celebinfo')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Celebinfo')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Celebinfo')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Colorado Data Engine endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Colorado Data Engine')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Colorado Data Engine')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Colorado Data Engine')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Colorado Data Engine')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Colorado Information Marketplace endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Colorado Information Marketplace')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Colorado Information Marketplace')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Colorado Information Marketplace')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Colorado Information Marketplace')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Data USA endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Data USA')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Data USA')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Data USA')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Data USA')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Datakick endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Datakick')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Datakick')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Datakick')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Datakick')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Dronestream endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Dronestream')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Dronestream')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Dronestream')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Dronestream')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Federal Register endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Federal Register')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Federal Register')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Federal Register')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Federal Register')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('fonoApi endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/fonoApi')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/fonoApi')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/fonoApi')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/fonoApi')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('French Address Search endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/French Address Search')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/French Address Search')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/French Address Search')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/French Address Search')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Marijuana Strains endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Marijuana Strains')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Marijuana Strains')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Marijuana Strains')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Marijuana Strains')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Microlink.io endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Microlink.io')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Microlink.io')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Microlink.io')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Microlink.io')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Open Government, Australia endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, Australia')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, Australia')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, Australia')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, Australia')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Open Government, Canada endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, Canada')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, Canada')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, Canada')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, Canada')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Open Government, France endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, France')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, France')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, France')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, France')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Open Government, India endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, India')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, India')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, India')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, India')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Open Government, New Zealand endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, New Zealand')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, New Zealand')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, New Zealand')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, New Zealand')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Open Government, Taiwan endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, Taiwan')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, Taiwan')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, Taiwan')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, Taiwan')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Open Government, USA endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, USA')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, USA')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, USA')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Open Government, USA')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Outpan endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Outpan')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Outpan')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Outpan')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Outpan')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Prague Opendata endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Prague Opendata')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Prague Opendata')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Prague Opendata')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Prague Opendata')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Quandl endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Quandl')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Quandl')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Quandl')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Quandl')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Represent by Open North endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Represent by Open North')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Represent by Open North')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Represent by Open North')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Represent by Open North')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Scoop.it endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Scoop.it')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Scoop.it')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Scoop.it')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Scoop.it')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Teleport endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Teleport')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Teleport')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Teleport')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Teleport')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('UPC database endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/UPC database')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/UPC database')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/UPC database')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/UPC database')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Wikidata endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Wikidata')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Wikidata')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Wikidata')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Wikidata')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Wikipedia endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Wikipedia')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Wikipedia')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Wikipedia')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Wikipedia')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Yelp endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Yelp')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Yelp')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Yelp')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Yelp')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Countly endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Countly')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Countly')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Countly')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Countly')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Drupal.org endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Drupal.org')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Drupal.org')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Drupal.org')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Drupal.org')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Libraries.io endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Libraries.io')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Libraries.io')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Libraries.io')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Libraries.io')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('EPO endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/EPO')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/EPO')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/EPO')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/EPO')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('TIPO endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/TIPO')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/TIPO')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/TIPO')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/TIPO')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('USPTO endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/USPTO')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/USPTO')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/USPTO')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/USPTO')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('chucknorris.io endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/chucknorris.io')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/chucknorris.io')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/chucknorris.io')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/chucknorris.io')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('FavQs.com endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/FavQs.com')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/FavQs.com')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/FavQs.com')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/FavQs.com')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Forismatic endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Forismatic')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Forismatic')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Forismatic')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Forismatic')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('icanhazdadjoke endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/icanhazdadjoke')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/icanhazdadjoke')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/icanhazdadjoke')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/icanhazdadjoke')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Medium endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Medium')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Medium')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Medium')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Medium')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Quotes on Design endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Quotes on Design')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Quotes on Design')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Quotes on Design')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Quotes on Design')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Traitify endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Traitify')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Traitify')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Traitify')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Traitify')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('tronalddump.io endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/tronalddump.io')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/tronalddump.io')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/tronalddump.io')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/tronalddump.io')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('500px endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/500px')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/500px')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/500px')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/500px')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Flickr endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Flickr')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Flickr')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Flickr')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Flickr')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Getty Images endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Getty Images')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Getty Images')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Getty Images')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Getty Images')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Gfycat endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Gfycat')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Gfycat')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Gfycat')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Gfycat')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Giphy endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Giphy')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Giphy')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Giphy')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Giphy')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Gyazo endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Gyazo')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Gyazo')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Gyazo')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Gyazo')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Imgur endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Imgur')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Imgur')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Imgur')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Imgur')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Pixabay endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Pixabay')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Pixabay')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Pixabay')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Pixabay')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Pixhost endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Pixhost')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Pixhost')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Pixhost')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Pixhost')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('PlaceKitten endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/PlaceKitten')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/PlaceKitten')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/PlaceKitten')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/PlaceKitten')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('ScreenShotLayer endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/ScreenShotLayer')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/ScreenShotLayer')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/ScreenShotLayer')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/ScreenShotLayer')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Unsplash endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Unsplash')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Unsplash')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Unsplash')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Unsplash')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('arcsecond.io endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/arcsecond.io')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/arcsecond.io')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/arcsecond.io')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/arcsecond.io')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('CORE endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/CORE')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/CORE')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/CORE')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/CORE')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('inspirehep.net endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/inspirehep.net')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/inspirehep.net')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/inspirehep.net')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/inspirehep.net')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Launch Library endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Launch Library')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Launch Library')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Launch Library')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Launch Library')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Minor Planet Center endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Minor Planet Center')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Minor Planet Center')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Minor Planet Center')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Minor Planet Center')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('NASA endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/NASA')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/NASA')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/NASA')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/NASA')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Open Notify endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Open Notify')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Open Notify')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Open Notify')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Open Notify')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('SpaceX endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/SpaceX')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/SpaceX')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/SpaceX')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/SpaceX')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Sunrise and Sunset endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Sunrise and Sunset')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Sunrise and Sunset')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Sunrise and Sunset')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Sunrise and Sunset')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('USGS Earthquake Hazards Program endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/USGS Earthquake Hazards Program')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/USGS Earthquake Hazards Program')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/USGS Earthquake Hazards Program')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/USGS Earthquake Hazards Program')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('USGS Water Services endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/USGS Water Services')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/USGS Water Services')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/USGS Water Services')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/USGS Water Services')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('World Bank endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/World Bank')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/World Bank')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/World Bank')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/World Bank')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('AXFR Database endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/AXFR Database')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/AXFR Database')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/AXFR Database')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/AXFR Database')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('HaveIBeenPwned endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/HaveIBeenPwned')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/HaveIBeenPwned')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/HaveIBeenPwned')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/HaveIBeenPwned')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('UK Police endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/UK Police')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/UK Police')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/UK Police')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/UK Police')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Best Buy endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Best Buy')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Best Buy')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Best Buy')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Best Buy')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('eBay endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/eBay')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/eBay')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/eBay')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/eBay')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Wal-Mart endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Wal-Mart')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Wal-Mart')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Wal-Mart')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Wal-Mart')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Buffer endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Buffer')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Buffer')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Buffer')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Buffer')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Cisco Spark endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Cisco Spark')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Cisco Spark')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Cisco Spark')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Cisco Spark')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Discord endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Discord')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Discord')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Discord')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Discord')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('DonReach Social Count endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/DonReach Social Count')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/DonReach Social Count')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/DonReach Social Count')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/DonReach Social Count')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Facebook endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Facebook')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Facebook')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Facebook')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Facebook')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Foursquare endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Foursquare')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Foursquare')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Foursquare')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Foursquare')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Fuck Off as a Service endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Fuck Off as a Service')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Fuck Off as a Service')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Fuck Off as a Service')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Fuck Off as a Service')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Full Contact endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Full Contact')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Full Contact')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Full Contact')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Full Contact')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('HackerNews endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/HackerNews')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/HackerNews')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/HackerNews')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/HackerNews')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Instagram endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Instagram')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Instagram')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Instagram')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Instagram')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('LinkedIn endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/LinkedIn')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/LinkedIn')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/LinkedIn')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/LinkedIn')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Meetup.com endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Meetup.com')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Meetup.com')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Meetup.com')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Meetup.com')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Pinterest endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Pinterest')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Pinterest')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Pinterest')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Pinterest')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('PWRTelegram bot endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/PWRTelegram bot')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/PWRTelegram bot')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/PWRTelegram bot')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/PWRTelegram bot')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Reddit endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Reddit')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Reddit')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Reddit')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Reddit')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('SharedCount endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/SharedCount')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/SharedCount')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/SharedCount')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/SharedCount')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Slack endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Slack')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Slack')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Slack')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Slack')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Telegram Bot endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Telegram Bot')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Telegram Bot')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Telegram Bot')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Telegram Bot')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Telegram MTProto endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Telegram MTProto')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Telegram MTProto')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Telegram MTProto')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Telegram MTProto')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Tumblr endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Tumblr')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Tumblr')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Tumblr')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Tumblr')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Twitch endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Twitch')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Twitch')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Twitch')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Twitch')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Twitter endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Twitter')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Twitter')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Twitter')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Twitter')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('vk endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/vk')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/vk')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/vk')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/vk')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('BikeWise endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/BikeWise')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/BikeWise')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/BikeWise')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/BikeWise')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Cartola FC endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Cartola FC')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Cartola FC')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Cartola FC')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Cartola FC')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('City Bikes endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/City Bikes')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/City Bikes')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/City Bikes')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/City Bikes')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Cricket Live Scores endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Cricket Live Scores')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Cricket Live Scores')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Cricket Live Scores')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Cricket Live Scores')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Ergast F1 endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Ergast F1')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Ergast F1')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Ergast F1')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Ergast F1')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Fitbit endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Fitbit')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Fitbit')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Fitbit')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Fitbit')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Football-Data.org endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Football-Data.org')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Football-Data.org')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Football-Data.org')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Football-Data.org')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('JCDecaux Bike endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/JCDecaux Bike')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/JCDecaux Bike')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/JCDecaux Bike')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/JCDecaux Bike')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('NBA Stats endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/NBA Stats')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/NBA Stats')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/NBA Stats')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/NBA Stats')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('NFL Arrests endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/NFL Arrests')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/NFL Arrests')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/NFL Arrests')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/NFL Arrests')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Pro Motocross endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Pro Motocross')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Pro Motocross')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Pro Motocross')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Pro Motocross')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Strava endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Strava')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Strava')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Strava')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Strava')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('SuredBits endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/SuredBits')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/SuredBits')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/SuredBits')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/SuredBits')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('TheSportsDB endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/TheSportsDB')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/TheSportsDB')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/TheSportsDB')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/TheSportsDB')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('UFC Data endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/UFC Data')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/UFC Data')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/UFC Data')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/UFC Data')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Wger endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Wger')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Wger')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Wger')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Wger')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Adorable Avatars endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Adorable Avatars')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Adorable Avatars')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Adorable Avatars')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Adorable Avatars')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Bacon Ipsum endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Bacon Ipsum')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Bacon Ipsum')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Bacon Ipsum')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Bacon Ipsum')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('FHIR endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/FHIR')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/FHIR')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/FHIR')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/FHIR')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Hipster Ipsum endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Hipster Ipsum')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Hipster Ipsum')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Hipster Ipsum')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Hipster Ipsum')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('JSONPlaceholder endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/JSONPlaceholder')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/JSONPlaceholder')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/JSONPlaceholder')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/JSONPlaceholder')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Lorem Text endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Lorem Text')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Lorem Text')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Lorem Text')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Lorem Text')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Loripsum endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Loripsum')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Loripsum')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Loripsum')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Loripsum')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('RandomUser endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/RandomUser')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/RandomUser')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/RandomUser')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/RandomUser')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('RandomWord endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/RandomWord')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/RandomWord')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/RandomWord')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/RandomWord')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('RoboHash endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/RoboHash')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/RoboHash')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/RoboHash')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/RoboHash')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('UI Names endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/UI Names')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/UI Names')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/UI Names')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/UI Names')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Yes No endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Yes No')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Yes No')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Yes No')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Yes No')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Aylien Text Analysis endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Aylien Text Analysis')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Aylien Text Analysis')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Aylien Text Analysis')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Aylien Text Analysis')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Google Cloud Natural endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Google Cloud Natural')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Google Cloud Natural')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Google Cloud Natural')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Google Cloud Natural')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Semantira endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Semantira')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Semantira')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Semantira')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Semantira')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Watson Natural Language Understanding endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Watson Natural Language Understanding')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Watson Natural Language Understanding')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Watson Natural Language Understanding')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Watson Natural Language Understanding')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Postmon endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Postmon')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Postmon')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Postmon')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Postmon')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Sweden endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Sweden')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Sweden')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Sweden')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Sweden')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('ADS-B Exchange endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/ADS-B Exchange')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/ADS-B Exchange')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/ADS-B Exchange')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/ADS-B Exchange')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Amadeus Travel Innovation Sandbox endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Amadeus Travel Innovation Sandbox')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Amadeus Travel Innovation Sandbox')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Amadeus Travel Innovation Sandbox')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Amadeus Travel Innovation Sandbox')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Bay Area Rapid Transit endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Bay Area Rapid Transit')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Bay Area Rapid Transit')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Bay Area Rapid Transit')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Bay Area Rapid Transit')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Community Transit endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Community Transit')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Community Transit')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Community Transit')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Community Transit')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Goibibo endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Goibibo')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Goibibo')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Goibibo')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Goibibo')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('GraphHopper endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/GraphHopper')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/GraphHopper')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/GraphHopper')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/GraphHopper')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Icelandic APIs endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Icelandic APIs')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Icelandic APIs')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Icelandic APIs')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Icelandic APIs')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Indian Railways endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Indian Railways')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Indian Railways')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Indian Railways')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Indian Railways')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Izi endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Izi')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Izi')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Izi')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Izi')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Navitia endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Navitia')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Navitia')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Navitia')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Navitia')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('REFUGE Restrooms endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/REFUGE Restrooms')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/REFUGE Restrooms')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/REFUGE Restrooms')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/REFUGE Restrooms')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Schiphol Airport endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Schiphol Airport')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Schiphol Airport')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Schiphol Airport')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Schiphol Airport')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('TransitLand endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/TransitLand')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/TransitLand')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/TransitLand')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/TransitLand')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Atlanta, US endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Atlanta, US')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Atlanta, US')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Atlanta, US')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Atlanta, US')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Auckland, New Zealand endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Auckland, New Zealand')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Auckland, New Zealand')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Auckland, New Zealand')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Auckland, New Zealand')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Belgium endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Belgium')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Belgium')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Belgium')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Belgium')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Berlin, Germany endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Berlin, Germany')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Berlin, Germany')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Berlin, Germany')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Berlin, Germany')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Boston, US endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Boston, US')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Boston, US')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Boston, US')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Boston, US')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Budapest, Hungary endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Budapest, Hungary')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Budapest, Hungary')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Budapest, Hungary')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Budapest, Hungary')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Chicago, US endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Chicago, US')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Chicago, US')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Chicago, US')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Chicago, US')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Czech Republic endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Czech Republic')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Czech Republic')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Czech Republic')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Czech Republic')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Denver, US endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Denver, US')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Denver, US')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Denver, US')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Denver, US')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Finland endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Finland')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Finland')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Finland')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Finland')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Germany endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Germany')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Germany')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Germany')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Germany')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for India endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for India')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for India')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for India')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for India')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for London, England endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for London, England')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for London, England')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for London, England')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for London, England')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Madrid, Spain endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Madrid, Spain')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Madrid, Spain')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Madrid, Spain')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Madrid, Spain')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Minneapolis, US endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Minneapolis, US')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Minneapolis, US')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Minneapolis, US')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Minneapolis, US')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for New York City, US endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for New York City, US')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for New York City, US')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for New York City, US')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for New York City, US')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Norway endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Norway')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Norway')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Norway')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Norway')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Ottawa, Canada endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Ottawa, Canada')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Ottawa, Canada')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Ottawa, Canada')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Ottawa, Canada')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Paris, France endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Paris, France')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Paris, France')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Paris, France')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Paris, France')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Paris, France endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Paris, France')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Paris, France')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Paris, France')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Paris, France')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Philadelphia, US endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Philadelphia, US')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Philadelphia, US')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Philadelphia, US')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Philadelphia, US')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Rio de Janeiro, Brazil endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Rio de Janeiro, Brazil')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Rio de Janeiro, Brazil')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Rio de Janeiro, Brazil')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Rio de Janeiro, Brazil')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Sao Paulo, Brazil endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Sao Paulo, Brazil')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Sao Paulo, Brazil')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Sao Paulo, Brazil')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Sao Paulo, Brazil')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Sweden endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Sweden')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Sweden')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Sweden')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Sweden')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Switzerland endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Switzerland')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Switzerland')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Switzerland')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Switzerland')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Switzerland endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Switzerland')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Switzerland')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Switzerland')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Switzerland')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for The Netherlands endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for The Netherlands')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for The Netherlands')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for The Netherlands')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for The Netherlands')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for The Netherlands endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for The Netherlands')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for The Netherlands')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for The Netherlands')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for The Netherlands')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Toronto, Canada endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Toronto, Canada')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Toronto, Canada')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Toronto, Canada')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Toronto, Canada')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for United States endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for United States')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for United States')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for United States')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for United States')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Vancouver, Canada endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Vancouver, Canada')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Vancouver, Canada')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Vancouver, Canada')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Vancouver, Canada')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Victoria, AU endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Victoria, AU')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Victoria, AU')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Victoria, AU')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Victoria, AU')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Transport for Washington, US endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Washington, US')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Washington, US')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Washington, US')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Transport for Washington, US')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('WhereIsMyTransport endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/WhereIsMyTransport')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/WhereIsMyTransport')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/WhereIsMyTransport')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/WhereIsMyTransport')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Universities List endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Universities List')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Universities List')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Universities List')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Universities List')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Bitly endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Bitly')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Bitly')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Bitly')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Bitly')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('ClickMeter endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/ClickMeter')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/ClickMeter')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/ClickMeter')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/ClickMeter')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Google URL Shortener endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Google URL Shortener')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Google URL Shortener')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Google URL Shortener')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Google URL Shortener')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Rebrandly endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Rebrandly')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Rebrandly')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Rebrandly')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Rebrandly')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Brazilian Vehicles and Prices endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Brazilian Vehicles and Prices')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Brazilian Vehicles and Prices')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Brazilian Vehicles and Prices')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Brazilian Vehicles and Prices')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Edmunds endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Edmunds')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Edmunds')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Edmunds')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Edmunds')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('NHTSA endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/NHTSA')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/NHTSA')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/NHTSA')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/NHTSA')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('An API of Ice And Fire endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/An API of Ice And Fire')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/An API of Ice And Fire')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/An API of Ice And Fire')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/An API of Ice And Fire')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Czech Television endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Czech Television')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Czech Television')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Czech Television')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Czech Television')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Dailymotion endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Dailymotion')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Dailymotion')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Dailymotion')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Dailymotion')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Netflix Roulette endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Netflix Roulette')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Netflix Roulette')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Netflix Roulette')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Netflix Roulette')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Ron Swanson Quotes endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Ron Swanson Quotes')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Ron Swanson Quotes')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Ron Swanson Quotes')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Ron Swanson Quotes')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('SWAPI endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/SWAPI')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/SWAPI')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/SWAPI')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/SWAPI')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('TMDb endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/TMDb')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/TMDb')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/TMDb')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/TMDb')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('TVDB endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/TVDB')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/TVDB')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/TVDB')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/TVDB')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('TVMaze endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/TVMaze')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/TVMaze')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/TVMaze')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/TVMaze')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Utelly endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Utelly')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Utelly')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Utelly')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Utelly')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Vimeo endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Vimeo')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Vimeo')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Vimeo')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Vimeo')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('YouTube endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/YouTube')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/YouTube')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/YouTube')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/YouTube')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Dark Sky endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Dark Sky')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Dark Sky')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Dark Sky')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Dark Sky')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('MetaWeather endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/MetaWeather')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/MetaWeather')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/MetaWeather')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/MetaWeather')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('ODWeather endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/ODWeather')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/ODWeather')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/ODWeather')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/ODWeather')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('OpenWeatherMap endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/OpenWeatherMap')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/OpenWeatherMap')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/OpenWeatherMap')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/OpenWeatherMap')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Weatherbit endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Weatherbit')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Weatherbit')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Weatherbit')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Weatherbit')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Wunderground endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Wunderground')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Wunderground')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Wunderground')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Wunderground')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
	describe('Yahoo! Weather endpoint', function () {
		it('Should have a status of 200', function (done) {
			chai.request(server)
				.get('/api/name/Yahoo! Weather')
				.end(function (err, res) {
					expect(res).to.have.status(200);
					done();
				});
		});
		it('Should have no errors', function (done) {
			chai.request(server)
				.get('/api/name/Yahoo! Weather')
				.end(function (err, res) {
					expect(err).to.be.null;
					done();
				});

		});
		it('Should return JSON', function (done) {
			chai.request(server)
				.get('/api/name/Yahoo! Weather')
				.end(function (err, res) {
					expect(res).to.be.json;
					done();
				});
		});
		it('Should have headers', function (done) {
			chai.request(server)
				.get('/api/name/Yahoo! Weather')
				.end(function (err, res) {
					expect(res).to.have.headers;
					done();
				});
		});
	});
}); // Parent Category endpoint
