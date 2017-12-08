import React from 'react';
import PropTypes from 'prop-types';

/**
 * @summary
 * @author Keith Murphy - nomadmystics@gmail.com
 */

const Letter = ({ letter }) => {
	return (
		<div className='letter'>
			<p>{letter}</p>
		</div>
	);
};

export default Letter;