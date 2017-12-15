const fs = require('fs');

let fileToRead = '';
let fileToWrite = '';
let testFilename = '';
let type = '';
// Find which file to read
for (let arg = 0; arg < process.argv.length; arg++) {
	// console.log(process.argv[arg]);
	if (process.argv[arg] === 'entries') {
		fileToRead = process.cwd() + '/../json/entries.json';
	}
	if (process.argv[arg] === 'name') {
		fileToRead = process.cwd() + '/../json/names.json';
		type = process.argv[arg];
	}
}

// Find which file to write to
for (let arg = 0; arg < process.argv.length; arg++) {
	if (process.argv[arg].includes('spec')) {
		fileToWrite = process.cwd() + `/../test/api/${process.argv[arg]}`;
	}
}

console.log(process.argv);
console.log(fileToWrite);
console.log(type);


// Find which file to write
for (let r = 0; r < process.argv.length; r++) {
	// console.log(process.argv[arg]);
	if (process.argv[r] === 'spec') {
		fileToWrite = process.cwd() + `/../test/api/${testFilename}`;
	}
}

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
			// console.log(newArray);
			//
			fs.writeFile(fileToWrite, newTest, (err) => {
				if (err) {
					throw new Error(`There was an error in the fs.write function ${err.message} and ${err.code}`);
				} else {
					console.log('File written');
				}
			});
		}
	});
});
