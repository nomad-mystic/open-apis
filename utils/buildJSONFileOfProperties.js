const fs = require('fs');

let fileToRead = '';
let fileToWrite = '';

// Find which file to read
for (let arg = 0; arg < process.argv.length; arg++) {
	// console.log(process.argv[arg]);
	if (process.argv[arg] === 'entries') {
		fileToRead = process.cwd() + '/../json/entries.json';
	}
}

// Find which file to write
for (let r = 0; r < process.argv.length; r++) {
	// console.log(process.argv[arg]);
	if (process.argv[r] === 'names') {
		fileToWrite = process.cwd() + '/../json/names.json';
	}
}

// Make sure the file exists
fs.stat(fileToRead, (err, stats) => {
	if (err) {
		throw new Error(`There was an error in the fs.stat function ${err.message} and ${err.code}`);
	}

	// Read the files contents
	fs.readFile(fileToRead, 'utf8', (err, data) => {

		if (err) {
			throw new Error(`There was an error in the fs.readFile function ${err.message} and ${err.code}`);
		} else {

			let newArray = JSON.parse(data).map((APIs, i) => {
				if (APIs.API) {
					return {name: APIs.API};
				} else {
					return false;
				}
			});

			fs.writeFile(fileToWrite, JSON.stringify(newArray), (err) => {
				if (err) {
					throw new Error(`There was an error in the fs.write function ${err.message} and ${err.code}`);
				} else {
					console.log('File written');
				}
			});
		}
	});
});
