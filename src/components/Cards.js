import React, { Component } from 'react';
import { blankFetch } from "../utils/blankFetch";
import Card from "./Card";

export class Cards extends Component {
	constructor(props) {
		super(props);

		// this.props = {
		// 	fetchSampleSize: 10
		// };
		this.state = {
			fetchType: 'random',
			fetchURL: `http://localhost:8080/api/sample/${this.props.fetchSampleSize}`,
			fetchData: [],
			initFetch: true,
		};

		this.fetchData.bind(this);
	}

	fetchData() {
		blankFetch.getFetch(this.state.fetchURL)
			.then((responseData) => {
				console.log(responseData);
				return this.setState({ fetchData: responseData });
			})
			.catch((err) => {
				throw new Error(`There was an error in the search fetch ${err.message}`);
			})
	}

	componentDidMount() {
		// Get the initial data
		this.fetchData();

	}
	render() {
		return (
			<div className='Cards'>
				<section>
					<main>
						{this.state.fetchData.map((item) => {
							return <Card info={item} key={item._id}/>
						})}
					</main>
				</section>
			</div>
		)
	}
}
