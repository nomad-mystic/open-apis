const fs = require('fs');

let fileToRead = '';
let fileToWrite = '';
let field = '';

// Find which file to read
for (let arg = 0; arg < process.argv.length; arg++) {
	// console.log(process.argv[arg]);
	if (process.argv[arg] === 'entries') {
		fileToRead = process.cwd() + '/../json/entries.json';
	}
}

// Find which file to write
for (let r = 0; r < process.argv.length; r++) {

	if (process.argv[r].includes('--write')) {
		let file = process.argv[r].substring(8);

        fileToWrite = process.cwd() + `/../json/${file}`;

		console.log(fileToWrite);
	}
}

for (let i = 0; i < process.argv.length; i++) {

	if (process.argv[i].includes('--field')) {

		// field = process.argv[i].substr(8);
		field = process.argv[i].substr(8);

		const newField = JSON.parse(JSON.stringify(field));



		console.log(JSON.stringify(field));
		// console.log(JSON.parse(field));
		console.log(newField);
		// console.log(mapReturn);
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

				let query = '';

				if ('names' === field) {

				} else if ('Auth' === field) {
                    query = {
                    	Auth: APIs.Auth
					};
				} else if ('Category' === field) {
                    query = {
                        Category: APIs.Category
					};
				} else {
					return false;
				}


				// console.log(APIs);


				// if (APIs.field) {
					return query;
				// } else {
				//     return false;
				// }
			});

			// console.log(newArray);
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
