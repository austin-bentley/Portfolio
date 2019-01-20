import React from 'react';
import { keyframes } from 'styled-components';
import styled from 'styled-components';
import { size } from '../DeviceSizing';

const Span = styled.span `
    transition: all 1s ease-in-out;
    width: 20px;
    height: 5px;
    background-color: white;
    display: block;
    margin: 3px 0 3px 0;
    border-radius: 3px;
    transform: ${props => props.isActive? 'translate(0%, 0%) rotate(90deg)': 'translate(0%, 0%) rotate(0deg)'};
    
    @media ${size.tablet} {
        display: none;
    }

`;

const Label = styled.label `
    width: 20px;
    height: 30px;
    margin: 6px 6px 0 6px;
`;

const Input = styled.input `
    display: none;
`;

const Div = styled.div `
    flex: 0 1 10%;
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
            <Div>
                <Input id="menuButton" type="checkbox" />
                <Label onClick={this.props.toggleSideBar} htmlFor="menuButton">
                    <Span isActive={this.props.isActive}></Span>
                    <Span isActive={this.props.isActive}></Span>
                    <Span isActive={this.props.isActive}></Span>
                </Label>
            </Div>
        );
    }
}