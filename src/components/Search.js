import React, { Component } from 'react';
import { blankFetch } from '../utils/blankFetch';

export class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchName: true,
            whatToSearch: 'names',
            listType: 'name',
            fetchURL: 'http://localhost:8080/api/name/all',
            fetchData: [],
            initFetch: true,
        };
    }

    updateData() {
        console.log('inside updateData');
        console.log(this.state.fetchURL);
        blankFetch.getFetch(this.state.fetchURL)
            .then((responseData) => {
                return this.setState({ fetchData: responseData });
            })
            .catch((err) => {
                throw new Error(`There was an error in the search fetch ${err.message}`);
            });
    }

    componentDidMount() {
        // Get the initial data
        this.updateData();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
        console.log('prevProps');
        console.log(prevProps);

        if (prevState.listType !== this.state.listType) {
            this.updateData();
            console.log('prevState');
            console.log(prevState);
            console.log(this.state.listType);
        }

    }

    searchName(event) {
        // Update the state for getting all of the name properties and update the type of list for the options
        this.setState({ fetchURL: 'http://localhost:8080/api/name/all', listType: 'name' });

        // Clear out the input
        this.refs.searchInput.value = '';
    }

    searchCategory(event) {
        // Update the state for getting all of the category properties and update the type of list for the options
        this.setState({ fetchURL: 'http://localhost:8080/api/category/all', listType: 'Category' });
        console.log(this.refs);

        // Clear out the input
        this.refs.searchInput.value = '';
    }

    render() {
        return (
            <div className='Search'>
                <button className='searchNames' onClick={this.searchName.bind(this, event)} ref='nameButton'>Names</button>
                <button className='searchNames' onClick={this.searchCategory.bind(this, event)} ref='categoryButton'>Category</button>
                <label htmlFor="searchInput">
                    Search for your API here:
                    <input id='searchInput' ref='searchInput' list='api' />
                    <datalist id="api">
                        {console.log('This is inside the Option component ' + this.state.listType)}
                        {
                            this.state.fetchData.map((item) => {
                            // console.log(item[this.state.listType]);
                            // console.log(item._id);
                            return <option value={item[this.state.listType]} key={item._id} />
                        })}
                    </datalist>
                </label>
            </div>
        )
    }
}
