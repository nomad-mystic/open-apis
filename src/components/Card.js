import React from 'react';
import PropTypes from 'prop-types';

/**
 * @summary
 * @author Keith Murphy - nomadmystics@gmail.com
 */

const Card = ({ info }) => {
	return (
		<div className='Card'>
			<article>
				<div className='API'>
					<h2>Name:</h2>
					<p>{info.API}</p>
				</div>
				<div className='auth'>
					<h3>Auth:</h3>
					<p>{info.Auth}</p>
				</div>
				<div className='category'>
					<h3>Category:</h3>
					<p>{info.Category}</p>
				</div>
				<div className='https'>
					<h3>HTTPS:</h3>
					<p>{info.HTTPS}</p>
				</div>
				<div className='description'>
					<h3>Description:</h3>
					<p>{info.Description}</p>
				</div>
				<div className='l-button-container'>
					<div className='link'>
						<button className='button'>
							<a href={info.Link}>Link</a>
						</button>
					</div>
					<div className='view'>
						<button className='button'>
							<a href={info.Link}>View</a>
						</button>
					</div>
				</div>
			</article>
		</div>
	);
};

Card.propTypes = {
	info: PropTypes.object.isRequired,

};

export default Card;


