import React from 'react';
import styled from 'styled-components';

export default class AnimeFinder extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            min: 0,
            max: 0
        }
    }

    handleChange(event) {
        this.setState({[event.target.attributes.placeholder.value]: event.target.value});
    }

    makeCall() {
        fetch(`https://pesahwuap7.execute-api.us-east-1.amazonaws.com/DEV/Portfolio_kitsu?min=${this.state.min}&max=${this.state.max}`)
        .then((res) => {
            return res.json();
        }).then((result) => {
            console.log('resolved call', result);
        });
    }

    render() {
        return (
            <div onChange={this.handleChange.bind(this)}> 
                <button onClick={this.makeCall.bind(this)}>call lambda</button>
                <input type="number" placeholder="min"></input>
                <input type="number" placeholder="max"></input>
            </div>
        );
    }
}