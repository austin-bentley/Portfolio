import React from 'react';
import ReactDOM from 'react-dom';
import {Bootstrap, Grid, Row, Col, Button} from 'react-bootstrap';
import {WorkThumbnail, AboutThumbnail, SchoolThumbnail} from './Thumbnail';
import { Body } from './Body';
import {SiteFooter} from './SiteFooter';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { activeThumbnail, activeFooter }  from "../actions/activeAction.js";
import  store  from "../store";


const noPadding = {
	paddingLeft: '0px',
	paddingRight: '0px',
	textAlign: 'center'
}




class Layout extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			show: 3,
			activeFooter: 0
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
			<Grid fluid>
				<Row>

					<Col lg={4} md={4} sm={12} style ={noPadding}>
						<AboutThumbnail showThumbnail={(i) => this.props.activeThumbnail(i)} show={this.state.show}/>
					</Col>	

					<Col lg={4} md={4} sm={12} style ={noPadding}>
						<WorkThumbnail  showThumbnail={(i) => this.props.activeThumbnail(i)} show={this.state.show}/>
					</Col>

					<Col lg={4} md={4} sm={12} style ={noPadding}>
						<SchoolThumbnail showThumbnail={(i) => this.props.activeThumbnail(i)} show={this.state.show}/>
					</Col>
				</Row>
				<div>
					<hr />
					<Body show = {this.state.show}/>
				</div>
				<div style={noPadding}>
					<SiteFooter showFooter={(i) => this.props.activeFooter(i)} activeFooter={this.state.activeFooter}/>
					{console.log(this.props.activeFooter)}
				</div>
			</Grid>
		);
	}  
}

const mapStateToProps = (state) => {
	return {
		activeFooter: state.activeReducer
	};
};

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

