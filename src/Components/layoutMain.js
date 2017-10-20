import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import {WorkThumbnail, AboutThumbnail, SchoolThumbnail} from './Thumbnail';
import { Body } from './Body';
import {SiteFooter} from './SiteFooter';
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
		<div>
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

