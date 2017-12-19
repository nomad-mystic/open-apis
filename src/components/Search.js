import React, { Component } from 'react';
// import { Option } from './Option';
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
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps(nextProps)');
        // console.log(nextProps);

    }
    componentDidMount() {
        // console.log(this.state.fetchURL);
        // console.log('component did mount');
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
    // componentWillUpdate(nextProps, nextState) {
    //     console.log('componentWillUpdate');
    //     console.log('nextProps');
    //     console.log(nextProps);
    //
    //
    //     console.log('nextState');
    //     console.log(nextState);
    //     console.log(this.state.listType);
    //
    //
    //     if (nextState.listType !== this.state.listType) {
    //
    //     }
    //
    // }
    searchName(event) {
        this.setState({ fetchURL: 'http://localhost:8080/api/name/all', listType: 'name' });
    }

    searchCategory(event) {
        this.setState({ fetchURL: 'http://localhost:8080/api/category/all', listType: 'Category' });
    }

    render() {
        return (
            <div className='Search'>
                <button className='searchNames' onClick={this.searchName.bind(this, event)}>Names</button>
                <button className='searchNames' onClick={this.searchCategory.bind(this, event)}>Category</button>
                <label htmlFor="search">
                    Search for your API here:
                    <input id='search' list='api'/>
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
