import React from 'react';
import {WorkBody, AboutMeBody, SchoolBody} from './ThumbnailBody';

export class Body extends React.Component {
	constructor(props){
		super(props);
		this.state = {}
	}

	render(){
		return (
			<div>
			
				{this.props.show === 1? <AboutMeBody show = {this.props.show}/> : null}
				{this.props.show === 2? <SchoolBody show = {this.props.show}/> : null}
				{this.props.show === 3? <WorkBody show = {this.props.show}/> : null}
			</div>
		);
	}
}

