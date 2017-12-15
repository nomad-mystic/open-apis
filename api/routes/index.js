import express from 'express';

const router = express.Router();

import {
	getAPIData
} from '../controllers/controllers'


/**
 * @summary Get APIs by category name
 * @param {string} @example http://localhost:8000/api/category/Art & Design
 * @param {callback}
 */

router.get('/category/:category', (req, res, next) => {

		const whatToGet = {'Category': req.params.category};
		const collectionToUse = 'main';

		getAPIData(req, res, next, whatToGet, collectionToUse);
});

/**
 * @summary Get APIs by name
 * @param {string} http://localhost:8000/api/name/Behanced
 * @param {callback}
 */

router.get('/name/:name', (req, res, next) => {

	// console.log(req.params.name);
	const whatToFind = {'name': req.params.name};
	const collectionToUse = 'names';

	getAPIData(req, res, next, whatToFind, collectionToUse);

});


router.get('/all', (req, res, next) => {

	const whatToFind = {};
	const collectionToUse = 'main';
	/**
	 * @summary This will get all data points from database
	 */

	getAPIData(req, res, next, whatToFind, collectionToUse);

});

export default router;
