import React, { Component } from 'react';
// import { Option } from './Option';


export class Option extends Component {
    constructor(props) {
        super(props);
        console.log('inside Option class');
        console.log(this.props);
        // console.log(this.props.jsonArray);
        // console.log(JSON.parse(this.props.jsonArray));
    }
    render() {
        return (
            {

                // JSON.parse(this.props.jsonArray).map((item) => {
                //     return <option value={item} key={item.id} />
                // })
            }
        )
    }
}
