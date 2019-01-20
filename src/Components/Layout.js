import React from 'react';
import Header from './Header';
import Home from './Home';
import styled from 'styled-components';
import SideBar from './Sidebar';
import { returnActiveComponent } from './returnActiveComponent';
import { size } from '../DeviceSizing';

const PagePadding = styled.div`
    padding: 36px;

    @media ${size.tablet} {
        padding-left:  275px;
    }
    @media ${size.desktop} {
        padding-left: 350px;
    }
`;

class Layout extends React.Component {
	constructor(props) {
        super(props);
		this.state = {
            show: 3,
            isSideBarActive: false,
            sideBarRef: null,
            headerRef: null,
            activeComponent: <Home />
        }
        this.handleSideBarToggle = this.handleSideBarToggle.bind(this);
        this.getActiveComponent = this.getActiveComponent.bind(this);
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

    handleSideBarToggle() {
        this.setState({isSideBarActive: !this.state.isSideBarActive});
    }

    getActiveComponent(active) {
        this.setState({
            activeComponent: returnActiveComponent(active),
            isSideBarActive: false
        });
    }

	render() {
        const { isMobile, isSideBarActive } = this.state;
		return (
            <div>
                <Header handleSideBarToggle={this.handleSideBarToggle} ref={node => {this.state.headerRef = node}} isActive={isSideBarActive}/>
                <SideBar ref={node => {this.state.sideBarRef = node}} isActive={isSideBarActive} getActiveComponent={this.getActiveComponent}/>
                <PagePadding>
                    { this.state.activeComponent }
                </PagePadding>
            </div>
		);
	}  
}

 export default Layout;

