import React from 'react';
import { MenuIcon } from '../subComponents/MenuIcon';
import styled from 'styled-components';

const Title = styled.h1 `
    font-size: 24px;
    flex: 0 1 90%;
    text-align: center;
    margin: 0;
    left: calc(50% - 75px);
    position: absolute;
`;

const HeaderContainer = styled.div `
    display: flex;
    position: fixed;
    background-color: #ba2525;
    color: white;
    width: 100%;
    align-items: center;
    z-index: 9999;
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
                    <MenuIcon toggleSideBar={this.props.handleSideBarToggle}></MenuIcon>
                    <Title>Austin Bentley</Title>
                </HeaderContainer>
            </div>
		);
	}  
}

export default Header;

