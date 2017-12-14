const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/open_api';

let collection;

export const getAPIData = (req, res, next, whatToFind) => {

	// console.log(req.params.category);
	/**
	 * @summary Connect to the db server and get collection
	 * @param {string} url [The base url for this project]
	 * @param {object} db [Database object for this project]
	 */

	MongoClient.connect(url, (err, client) => {
		if (err) {
			throw new Error(`There was an error in the open api MongoClient.Connect function ${err.message}`);
		}

		// As of -V >= 3
		const db = client.db('open_api');

		// Get the collection
		collection = db.collection('main');

		// Get the objects
		collection.find(whatToFind).toArray((err, apis) => {

			if (err) {
				throw new Error(`There was an error in the open api toArray function ${err.message}`);
			}

			// console.log(apis);
			res.send(apis);

			// Close the client connection
			client.close();
		});
	});
};
