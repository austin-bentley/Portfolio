import React from 'react';
import { keyframes } from 'styled-components';
import styled from 'styled-components';

const Span = styled.span `
    width: 20px;
    height: 5px;
    background-color: white;
    display: block;
    margin: 3px;
`;

const Input = styled.input `
    display: none;
`;

const Container = styled.div `
    width: 20px;
    height: 20px;
    display: ${props => console.log('something', props.checked)};
`;

export class MenuIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }
    render() {
        return (
            <Container onClick={() => this.setState({checked: !this.checked})}>
                <Span checked={this.state.checked}></Span>
                <Span checked={this.state.checked}></Span>
                <Span checked={this.state.checked}></Span>
            </Container>
        );
    }
}