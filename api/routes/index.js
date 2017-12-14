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
		// console.log('apis called');
		// next();

		const whatToGet = {'Category': req.params.category};

		getAPIData(req, res, next, whatToGet);
});

/**
 * @summary Get APIs by name
 * @param {string} http://localhost:8000/api/name/Behanced
 * @param {callback}
 */

router.get('/name/:name', (req, res, next) => {

	console.log(req.params.name);
	const whatToFind = {'API': req.params.name};

	getAPIData(req, res, next, whatToFind);

});

router.get('/all', (req, res, next) => {

	const whatToFind = {};

	/**
	 * @summary This will get all data points from database
	 */

	getAPIData(req, res, next, whatToFind);

});

export default router;
