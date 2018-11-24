import React from 'react';
import { NavTab } from '../helpers/NavTab';
import { Body } from './Body';
import {SiteFooter} from './SiteFooter';
import {connect} from 'react-redux';
import { activeThumbnail, activeFooter }  from "../actions/activeAction.js";
import  store  from "../store";
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
			show: 3,
			activeFooter: false
		}

		store.subscribe(() => {
	 		this.setState({
	 			show: store.getState().activeReducer.active,
	 			activeFooter: store.getState().activeReducer.activeFooter
	 		})
 		})
	};
 	


	render() {
		return (
		<div>
			<CenterMobileButtons>
				<NavTab showThumbnail={(i) => this.props.activeThumbnail(1)} show={this.state.show} identity={1} img={Wave01} name={"About"}/>
				<NavTab showThumbnail={(i) => this.props.activeThumbnail(3)} show={this.state.show} identity={3} img={Wave02} name={"Work"}/>
				<NavTab showThumbnail={(i) => this.props.activeThumbnail(2)} show={this.state.show} identity={2} img={Wave03} name={"School"}/>
			</CenterMobileButtons>	

			<Body show = {this.state.show}/>

			<div style={noPadding}>
				<SiteFooter showFooter={(i) => this.props.activeFooter(i)} activeFooter={this.state.activeFooter}/>
			</div>
		</div>
		);
	}  
}



const mapDispatchToProps = (dispatch) => {
	return {
		activeThumbnail: (i) => {
			dispatch( activeThumbnail(i));
		}, 
		activeFooter: (i) => {
			dispatch( activeFooter(i));
		}
	};
};

 export default connect(null, mapDispatchToProps)(Layout);

