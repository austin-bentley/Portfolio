import React from 'react';
import { NavTab } from '../subComponents/NavTab';
import { Body } from './Body';
import styled from 'styled-components';

const Wave01 = require('./images/wave_01.png');
const Wave02 = require('./images/wave_02.png');
const Wave03 = require('./images/wave_03.png');

const noPadding = {
	paddingLeft: '0px',
	paddingRight: '0px',
	textAlign: 'center'
}

const CenterMobileButtons =styled.div`
    @media (max-width : 992px) {
        width: 100%;
        position: fixed;
        z-index: 1;
        display: flex;
        top: 0;
        border-right: 2px solid #597fff;
    }
`;


class Layout extends React.Component {
	constructor(props){
        super(props);
		this.state = {
			show: 3
        }
        this.getThumbnailClick = this.getThumbnailClick.bind(this);
    };
    
    getThumbnailClick(clicked) {
        this.setState({
            show: clicked
        });
    }

	render() {
		return (
		<div>
			<CenterMobileButtons>
				<NavTab getThumbnailClick={this.getThumbnailClick} show={this.state.show} identity={1} img={Wave01} name={"About"}/>
				<NavTab getThumbnailClick={this.getThumbnailClick} show={this.state.show} identity={3} img={Wave02} name={"Work"}/>
				<NavTab getThumbnailClick={this.getThumbnailClick} show={this.state.show} identity={2} img={Wave03} name={"School"}/>
			</CenterMobileButtons>	

			<Body show = {this.state.show}/>
		</div>
		);
	}  
}

 export default Layout;

