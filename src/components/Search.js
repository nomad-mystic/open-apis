import React, { Component } from 'react';
import { Option } from './Option';
import { blankFetch } from '../utils/blankFetch';

export class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchName: true,
            whatToSearch: 'names',
            listType: 'names',
            fetchURL: 'http://localhost:8080/api/name/names',
            fetchData: [],
        };

        // this.fetchSearchAPIs.bind(this);
        // Search.setSearchType.bind(this);
        this.dataList.bind(this);
    }
    updateData() {
        blankFetch.getFetch(this.state.fetchURL)
            .then((responseData) => {
                // console.log(typeof responseData);
                console.log(responseData);
                // this.setState({ fetchData: responseData });
                return this.setState({ fetchData: responseData });
            })
            .catch((err) => {
                throw new Error(`There was an error in the search fetch ${err.message}`);
            });
    }
    componentDidMount() {
        console.log(this.state.fetchURL);

        blankFetch.getFetch(this.state.fetchURL)
            .then((responseData) => {
                // console.log(typeof responseData);
                console.log(responseData);
                // this.setState({ fetchData: responseData });
                return this.setState({ fetchData: responseData });
            })
            .catch((err) => {
                throw new Error(`There was an error in the search fetch ${err.message}`);
            });
    }
    setSearchType(type) {

        console.log(type);

        if ('names' === type) {
            this.setState({ fetchURL: 'http://localhost:8080/api/name/names' })
        } else if ('category' === type) {
            this.setState({ fetchURL: 'http://localhost:8080/api/category/category' })
        }


        // this.setState({
        //     whatToSearch: type,
        // });
    }
    render() {
        return (
            <div className='Search'>
                <button className='searchNames' onClick={this.setSearchType.bind(this, 'names')}>Names</button>
                <button className='searchNames' onClick={this.setSearchType.bind(this, 'category')}>Category</button>
                <label htmlFor="search">
                    Search for your API here:
                    <input id='search' list='api'/>
                    <datalist id="api">
                        {this.state.fetchData.map((item) => {
                           return <option value={item.name} key={item._id} />
                        })}
                    </datalist>
                    {/*<Option jsonArray={this.state.fetchData}/>*/}
                </label>
            </div>
        )
    }
}
