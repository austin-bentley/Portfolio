import React from 'react';
import Header from './Header';
import Home from './Home';
import styled from 'styled-components';
import SideBar from './Sidebar';
import { returnActiveComponent } from './returnActiveComponent';

const PagePadding = styled.div`
    padding: 10%;
`;

class Layout extends React.Component {
	constructor(props) {
        super(props);
		this.state = {
            show: 3,
            isMobile: window.innerWidth < 500 ? true : false,
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
                <Header isMobile={isMobile} handleSideBarToggle={this.handleSideBarToggle} ref={node => {this.state.headerRef = node}}/>
                <SideBar isMobile={isMobile} ref={node => {this.state.sideBarRef = node}} isActive={isSideBarActive} getActiveComponent={this.getActiveComponent}/>
                <PagePadding>
                    { this.state.activeComponent }
                </PagePadding>
            </div>
		);
	}  
}

 export default Layout;

