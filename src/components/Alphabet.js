import React from 'react';
import PropTypes from 'prop-types';

import Letter from './Letter';

/**
 * @summary
 * @author Keith Murphy - nomadmystics@gmail.com
 */

const Alphabet = ({  alphabet  }) => {

	const alphaArray = createAlphaArray(alphabet);
	return (
		<div className='alphabet'>
			{
				alphaArray.map((letter, i) => {
					return <Letter letter={letter} key={i}/>
				})
			}
		</div>
	);
};

const createAlphaArray = (alphabet) => {

	return Array.from(alphabet);

};


Alphabet.propTypes = {
	alphabet: PropTypes.string
};

export default Alphabet;