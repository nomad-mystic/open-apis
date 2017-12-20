import express from 'express';

const router = express.Router();

import { getAPIData } from '../controllers/getController'
import { aggregateSample } from "../controllers/aggregationController";


/**
 * @summary Get APIs by category name
 * @param {string} @example http://localhost:8000/api/category/Art & Design
 * @param {callback}
 */

router.get('/category/:category', (req, res, next) => {

		// const whatToGet = {'Category': req.params.category};
    	const whatToFind = (req.params.category !== 'all') ? {'Category': req.params.category} : {};
		const collectionToUse = 'category';
		// console.log(whatToFind);
		getAPIData(req, res, next, whatToFind, collectionToUse);
});

/**
 * @summary Get APIs by name
 * @param {string} http://localhost:8000/api/name/Behanced
 * @param {callback}
 */

router.get('/name/:name', (req, res, next) => {

	// console.log(req.params.name);
	const whatToFind = (req.params.name !== 'all') ? {'name': req.params.name} : {};
	const collectionToUse = 'names';

	// console.log(whatToFind);
	getAPIData(req, res, next, whatToFind, collectionToUse);

});

/**
 * @summary Get APIs by Auth type
 * @param {string} http://localhost:8000/api/auth/apiKey
 * @param {callback}
 */

router.get('/auth/:auth', (req, res, next) => {

    // console.log(req.params.auth);
    const whatToFind = (req.params.auth !== 'all') ? {'auth': req.params.auth} : {};
    const collectionToUse = 'auth';

    // console.log(whatToFind);
    getAPIData(req, res, next, whatToFind, collectionToUse);

});


/**
 * @summary Get all objects
 */

router.get('/all', (req, res, next) => {
	const whatToFind = {};
	const collectionToUse = 'main';

	/**
	 * @summary This will get all data points from database
	 */

	getAPIData(req, res, next, whatToFind, collectionToUse);
});


/**
 * @summary Get a sample of objects
 */

router.get('/sample/:size', (req, res, next) => {
	const size = Number(req.params.size);
	const whatToFind = [{ $sample: { size: size } }];
	const collectionToUse = 'main';

	aggregateSample(req, res, next, whatToFind, collectionToUse);
});


export default router;
