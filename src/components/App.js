import React, { Component } from 'react';
import Header from './Header';
import {Search} from "./Search";
import { Cards } from "./Cards";

export default class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Header title='Find Your Open API Here'/>
                <Search fetchData={[]}/>
         		<Cards fetchSampleSize={10}/>
            </div>

        )
    }
}
