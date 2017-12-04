import React, { Component } from 'react';
import PropTypes from 'prop-types';

// My Components
import Nav from './Nav';

/**
 * @summary This will be the header of the site with navigation component built in
 * @author Keith Murphy - nomadmystics@gmail.com
 * @extends React.Component
 */

export default class Header extends Component {
	constructor(props) {
		// https://reactjs.org/docs/react-component.html#constructor
		super(props);
	}
	render() {
		return (
			<div>
				<h2>{this.props.title}</h2>
				<Nav />
			</div>
		);
	}
}

Header.propTypes = {
	title: PropTypes.string.isRequired
};

Header.defaultProps = {
	title: 'Find your open API'
};
