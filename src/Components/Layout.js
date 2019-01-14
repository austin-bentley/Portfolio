import React from 'react';
import { NavTab } from '../subComponents/NavTab';
import { Body } from './Body';
import Header from './Header';
import Home from './Home';
import styled from 'styled-components';
import SideBar from './Sidebar';


class Layout extends React.Component {
	constructor(props){
        super(props);
		this.state = {
            show: 3,
            isMobile: window.innerWidth < 500 ? true : false,
            isSideBarActive: false,
            sideBarRef: null,
            headerRef: null
        }
        this.handleSideBar = this.handleSideBar.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick , false)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick , false)
    }

    handleClick(e) {
        const { sideBarRef, headerRef } = this.state;
        if(sideBarRef.refs.contains(e.target) || headerRef.refs.contains(e.target)) {
            return
        } else {
            this.setState({isSideBarActive: false});
        }
    }

    handleSideBar() {
        this.setState({isSideBarActive: !this.state.isSideBarActive});
    }

	render() {
        const { isMobile } = this.state;
		return (
		<div>
            <Header isMobile={isMobile} handleSideBar={this.handleSideBar} ref={node => {this.state.headerRef = node}}/>
            <SideBar isMobile={isMobile} ref={node => {this.state.sideBarRef = node}} isActive={this.state.isSideBarActive}/>
            <Home />
		</div>
		);
	}  
}

 export default Layout;

