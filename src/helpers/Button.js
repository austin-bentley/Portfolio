import React from 'react';
import styled from 'styled-components';

const ButtonPlain = styled.button `
      border-radius: 5px;
      height: 40px;
      width: 250px;
      font-size: 20px;
      margin-top: 40vh;
      border: 2px solid #597fff;
      color: #597fff;
      transition: all 0.25s ease-out;

      :hover {
            background-color: #597fff; 
            color: white;
      }
`;

export default class Button extends React.Component {
      render() {
            return (
                  <ButtonPlain onClick={this.props.onClick}>{this.props.name}</ButtonPlain>
            );
      }
}