import React, { Component } from 'react';
import Header from './Header';
import {Search} from "./Search";

export default class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Header title='Find Your Open API Here'/>
                <Search fetchData={{}}/>
            </div>

        )
    }
}
