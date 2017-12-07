import React, { Component } from 'react';
import PropTypes from 'prop-types';


import Alphabet from './Alphabet';
/**
 * @summary This is where the navigation will live
 * @author Keith Murphy - nomadmystics@gmail.com
 * @extends React.Component
 */

export default class Nav extends Component {
	constructor(props) {
		// https://reactjs.org/docs/react-component.html#constructor
		super(props);
		const alphabet = 'ABCDEFGHIJKMLOPQURSTUVWXYZ';

		this.state = {
				alphabet: alphabet
		};

	}
	componentWillMount() {
		// https://reactjs.org/docs/react-component.html#componentwillmount

	}
	componentDidMount() {
		// https://reactjs.org/docs/react-component.html#render

	}
	componentWillReceiveProps() {
		// https://reactjs.org/docs/react-component.html#componentwillreceiveprops

	}
	shouldComponentUpdate() {
		// https://reactjs.org/docs/react-component.html#shouldcomponentupdate

	}
	componentWillUpdate() {
		// https://reactjs.org/docs/react-component.html#shouldcomponentupdate

	}
	componentDidUpdate() {
		// https://reactjs.org/docs/react-component.html#componentdidupdate

	}
	componentWillUnmount() {
		// https://reactjs.org/docs/react-component.html#componentwillunmount

	}
	componentDidCatch() {
		// https://reactjs.org/docs/react-component.html#componentdidcatch

	}
	render() {
		return (
			<div>
				<h2>Hello React</h2>
				<Alphabet alphabet={this.state.alphabet} />
			</div>
		);
	}
}

// Nav.propTypes = {
// 	nameOfProp: PropTypes.string.isRequired
// };
//
// Nav.defaultProps = {
// 	nameOfProp: 'prop'
// };
