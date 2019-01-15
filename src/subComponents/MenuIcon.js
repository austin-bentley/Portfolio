import React from 'react';
import { keyframes } from 'styled-components';
import styled from 'styled-components';

const Span = styled.span `
    transition: all 1s ease-in-out;
    width: 20px;
    height: 5px;
    background-color: white;
    display: block;
    margin: 3px 0 3px 0;
    border-radius: 3px;
`;

const Label = styled.label `
    width: 20px;
    height: 30px;
    margin: 6px 6px 0 6px;
`;

const Input = styled.input `
    display: none;
    &:checked + ${Label} > span {
        transform: translate(0%, -50%) rotate(90deg);
    }
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
                    <Span></Span>
                    <Span></Span>
                    <Span></Span>
                </Label>
            </Div>
        );
    }
}