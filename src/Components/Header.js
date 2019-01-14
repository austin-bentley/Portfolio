import React from 'react';
import { Body } from './Body';
import { MenuIcon } from '../subComponents/MenuIcon';
import styled from 'styled-components';

const Title = styled.h1 `
    font-size: 24px;
`;

const HeaderContainer = styled.div `
    display: flex;
    position: fixed;
    background-color: #ba2525;
    color: white;
    width: 100%;
`;


class Header extends React.Component {
	constructor(props){
        super(props);
		this.state = {
			open: false
        }
    };

	render() {
		return (
            <div ref={node => {this.refs = node}}>
                <HeaderContainer>
                    <MenuIcon onClick={this.props.handleSideBar}>somethign</MenuIcon>
                    <Title>Austin Bentley</Title>
                </HeaderContainer>
            </div>
		);
	}  
}

export default Header;

