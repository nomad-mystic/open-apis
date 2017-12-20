const fs = require('fs');

let fileToRead = '';
let fileToWrite = '';
let prop = '';

// Find which file to read
// @example names.json
for (let arg = 0; arg < process.argv.length; arg++) {
    if (process.argv[arg].includes('--read=')) {

        let file = process.argv[arg].substring(7);

        fileToRead = process.cwd() + `/json/${file}`;

        console.log(fileToRead);
    }
}

// Find which file to write
// @example filteredNames.json
for (let r = 0; r < process.argv.length; r++) {

    if (process.argv[r].includes('--write=')) {
        let file = process.argv[r].substring(8);

        fileToWrite = process.cwd() + `/json/${file}`;

        console.log(fileToWrite);
    }
}

// Find which file to write
// @example filteredNames.json
for (let r = 0; r < process.argv.length; r++) {

    if (process.argv[r].includes('--prop=')) {
        prop = process.argv[r].substring(7);

        console.log(prop);
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

            let filterArray = [];

            let newFilteredArray = JSON.parse(data).filter((item) => {

                if (filterArray.indexOf(item[prop]) === -1) {
                    filterArray.push(item[prop]);

                    return item[prop];
                }

            });

            fs.writeFile(fileToWrite, JSON.stringify(newFilteredArray), (err) => {
                if (err) {
                    throw new Error(`There was an error in the fs.write function ${err.message} and ${err.code}`);
                } else {
                    console.log('File written');
                }
            });
        }
    });
});
