const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/open_api';

let collection = '';


export const aggregateSample = (req, res, next, whatToFind, collectionToUse) => {


	/**
	 * @summary Connect to the db server and get collection
	 * @param {string} url [The base url for this project]
	 * @param {callback} err object and client object
	 */

	MongoClient.connect(url, (err, client) => {
		if (err) {
			throw new Error(`There was an error in the open api MongoClient.Connect function ${err.message}`);
		}

		// As of -V >= 3
		const db = client.db('open_api');

		// Get the collection
		collection = db.collection(collectionToUse);

		// Get the objects

	     // @example main.aggregate([{ $sample: { size: 10 } }])

		collection.aggregate(whatToFind).toArray((err, apis) => {

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
