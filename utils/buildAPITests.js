const fs = require('fs');

let fileToRead = '';
let fileToWrite = '';
let testFilename = '';
let type = '';


/**
 * @summary Find which file to read
 * @example --read=names.json
 */

for (let arg = 0; arg < process.argv.length; arg++) {
    if (process.argv[arg].includes('--read=')) {
        let file = process.argv[arg].substring(7);

        fileToRead = process.cwd() + `/json/${file}`;
    }
}


/**
 * @summary Find which file to write to
 * @example --spec=api.category.spec.js
 */

for (let arg = 0; arg < process.argv.length; arg++) {
	if (process.argv[arg].includes('--spec=')) {
		let file = process.argv[arg].substring(7);

		fileToWrite = process.cwd() + `/test/api/${file}`;
	}
}

/**
 * @summary Find which file to write to
 * @example --type=name|category
 */

for (let t = 0; t < process.argv.length; t++) {
    if (process.argv[t].includes('--type=')) {
        type = process.argv[t].substring(7);
    }
}

console.log(fileToRead);
console.log(fileToWrite);
console.log(type);


// Make sure the file exists
fs.stat(fileToRead, (err, stats) => {
	if (err) {
		throw new Error(`There was an error in the fs.stat function ${err.message} and ${err.code}`);
	}

	// console.log(stats);

	// Read the files contents
	fs.readFile(fileToRead, 'utf8', (err, data) => {

		if (err) {
			throw new Error(`There was an error in the fs.readFile function ${err.message} and ${err.code}`);
		} else {
			console.log(JSON.parse(data));
			let newTest = '';
			// let newArray = JSON.parse(data).map((name, i) => {
			JSON.parse(data).forEach((item) => {

				console.log(item.name);
				// console.log(name.name);


				newTest += `describe('${item.name} endpoint', function () {
					it('Should have a status of 200', function (done) {
						chai.request(server)
							.get('/api/${type}/${item.name}')
							.end(function (err, res) {
								expect(res).to.have.status(200);
								done();
							});
					});
					it('Should have no errors', function (done) {
						chai.request(server)
							.get('/api/${type}/${item.name}')
							.end(function (err, res) {
								expect(err).to.be.null;
								done();
							});

					});
					it('Should return JSON', function (done) {
						chai.request(server)
							.get('/api/${type}/${item.name}')
							.end(function (err, res) {
								expect(res).to.be.json;
								done();
							});
					});
					it('Should have headers', function (done) {
						chai.request(server)
							.get('/api/${type}/${item.name}')
							.end(function (err, res) {
								expect(res).to.have.headers;
								done();
							});
					});
				});`;
			});

			const baseTestfFile = `
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
					
					${newTest}
					
				});
			`;

			// Write base and new tests to file 
			fs.writeFile(fileToWrite, baseTestfFile, (err) => {
				if (err) {
					throw new Error(`There was an error in the fs.write function ${err.message} and ${err.code}`);
				} else {
					console.log('File written');
				}
			});
		}
	});
});
