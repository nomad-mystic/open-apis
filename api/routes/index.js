import express from 'express';

const router = express.Router();

import {
	getCategory
} from '../controllers/controllers'


/**
 * @summary Get APIs by category name
 * @param {string} @example http://localhost:8000/api/category/Art & Design
 * @param {callback}
 */

router.get('/category/:category', (req, res, next) => {
		// console.log('apis called');
		next();
	}, getCategory);

/**
 * @summary Get APIs by name
 * @param {string} http://localhost:8000/api/name/Behanced
 * @param {callback}
 */

router.get('/name/:name', (req, res, next) => {
		
});

export default router;
