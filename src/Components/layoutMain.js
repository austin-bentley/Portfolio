import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import Thumbnail from './Thumbnail';
import { Body } from './Body';
import {SiteFooter} from './SiteFooter';
import {connect} from 'react-redux';
import { activeThumbnail, activeFooter }  from "../actions/activeAction.js";
import  store  from "../store";

const Wave01 = require('./images/wave_01.png');
const Wave02 = require('./images/wave_02.png');
const Wave03 = require('./images/wave_03.png');

const schoolIcon = require('./images/schoolIconBlue.png');
const workIcon = require('./images/workIconBlue.png');
const aboutmeIcon = require('./images/aboutmeIconBlue.png');

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
		<div>
			<Grid fluid>
				<Row>
					<Col lg={4} md={4} style ={noPadding}>
						<Thumbnail showThumbnail={(i) => this.props.activeThumbnail(1)} show={this.state.show} identity={1} img={Wave01} mobileImg={aboutmeIcon} name={"About"}/>
					</Col>	

					<Col lg={4} md={4} style ={noPadding}>
						<Thumbnail  showThumbnail={(i) => this.props.activeThumbnail(3)} show={this.state.show} identity={3} img={Wave02} mobileImg={workIcon} name={"Work"}/>
					</Col>

					<Col lg={4} md={4} style ={noPadding}>
						<Thumbnail showThumbnail={(i) => this.props.activeThumbnail(2)} show={this.state.show} identity={2} img={Wave03} mobileImg={schoolIcon} name={"School"}/>
					</Col>
				</Row>
				</Grid>
				
				<Body show = {this.state.show}/>

				<div style={noPadding}>
					<SiteFooter showFooter={(i) => this.props.activeFooter(i)} activeFooter={this.state.activeFooter}/>
					{console.log(this.props.activeFooter)}
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

