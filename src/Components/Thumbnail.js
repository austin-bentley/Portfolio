import React from 'react';
import styled from 'styled-components';

const Wave01 = require('./images/wave_01.png');
const Wave02 = require('./images/wave_02.png');
const Wave03 = require('./images/wave_03.png');



const Wrapper = styled.div `
	transition: all 0.5s ease-in-out;
	overflow: hidden;
	height: 70vh;
	background-color: black;
	:hover .div {opacity: 1};
	box-shadow: 2px 5px 15px #888888;
`;

const activeOpacity = {
	opacity: '1',

	height: '75vh'
}

const activeScale = {
	transition: 'all .5s ease-in-out',
	boxShadow: '5px 13px 22px #888888',
	height: '75vh'
}

const Img = styled.img`
	background-image: url(${(props) => {
		if (props.left){ 
			return props.left
		}
		else if (props.middle){ 
			return props.middle
		}
		else { 
			return props.right
		}
	}});

	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-color: #cccccc;
	width: 100%;
	height: 100%;
	transition: all 0.5s ease-in-out;
	opacity: 0.2;
`;

const workButton = {
	left: '40%',
    top: '40%',


}

const schoolButton = {
	textAlign: 'center',
	left: '40%',
    top: '40%'
}

const aboutButton = {
	left: '40%',
    top: '40%'
}

const Button = styled.button`

	border-radius: 3px;
	background: transparent;
	color: #597fff;
	border: 2px solid #597fff;
	position: absolute;
	font-size: 50px;
	display: inline;
	
`;

class WorkThumbnail extends React.Component {
	render() {
		return (
			<Wrapper style={this.props.show === 3? activeScale : null}>
				<Img style={this.props.show === 3? activeOpacity : null} className="div" middle={Wave02}></Img>
				<Button className="center-block" style={workButton} onClick={() => this.props.showThumbnail(3)}>Work</Button>
			</Wrapper>
		);
	}  
}

class SchoolThumbnail extends React.Component {	
	render() {
		return (
			<Wrapper style={this.props.show === 2? activeScale : null}>
				<Img style={this.props.show === 2? activeOpacity : null} className="div" right={Wave03}></Img>
				<Button onClick={() => this.props.showThumbnail(2)} style={schoolButton} >School</Button>
			</Wrapper>
		);
	}  
}

class AboutThumbnail extends React.Component {
	render() {
		return (
			<Wrapper style={this.props.show === 1? activeScale : null}>
				<Img style={this.props.show === 1? activeOpacity : null} className="div" left={Wave01}></Img>
				<Button style={aboutButton} onClick={() => this.props.showThumbnail(1)}>About</Button>
			</Wrapper>
		);
	}  
}

export { WorkThumbnail, AboutThumbnail, SchoolThumbnail };
