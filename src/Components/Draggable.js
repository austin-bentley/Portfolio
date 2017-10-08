import React from 'react';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

const Div = styled.div `
	background-image: url(${(props) => props.bottom === 1? './app/Components/images/tokyoghoul1.png' : './app/Components/images/tokyoghoul2.jpg'});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-color: #cccccc;
	height: 100vh;
	width: 100vw;
	position: absolute;
`;

const OuterDiv = styled.div `
	height: 100vh;
	position: absolute;
	overflow: hidden;
	width: ${(props) => {
		if (props.mount === true){
			return '50.5vw'; 
		}
		else if (props.mount === false){
			return '.9vw';
		}
		else{
		let vwconvert = props.pos * (100/props.width);
		return  vwconvert + 1 +'vw'; 
		}
	}};

	transition: ${(props)=> props.mount === true? 'all 1s ease-in-out' : 'none' };

`;

const Divider = styled.span `
	width: 1vw;
	height: 100vh;
	background: linear-gradient(to bottom, #ff3232 1%,#c58cff 100%);
	position: absolute;
	top: 0;	
	display: block;
	border-radius: 3px;

	left: ${(props) => {
		if (props.mount === true){
			return '49.5vw'; 
		}
		else if (props.mount === false){
			return '0vw';
		}
		else{
		let vwconvert = props.pos* (100/props.width);
		return  vwconvert + 'vw'; 
		}
	}};

	transition: ${(props)=> props.mount === true? 'all 1s ease-in-out' : 'none' };
`;

const H1 = styled.h1`
	color: ${(props=> props.bottom === 1? 'black' : 'white' )};
	font-size: 32vw;
	text-align: center;
	user-select: none;
`;

		export default class TokyoGhoul extends React.Component {

		//make it draggable by getting mouse move position and mousedown/up
		constructor(){
			super();
			this.state = {
				mousedown: true,
				mouseposx: 0,
				mounted: false,
				clientwidth: 0
			}
				this.handlemousedown = this.handlemousedown.bind(this);
				this.handlemouseup = this.handlemouseup.bind(this);
				this.mouseposition = this.mouseposition.bind(this);
		}

		handlemousedown(event){
			console.log(this.state.mousedown);
			event.persist();
			this.setState({mousedown: false, mounted: 1}, ()=>{this.mouseposition(event)});
		}

		handlemouseup(){
			console.log(this.state.mousedown);
			this.setState({mousedown: true})
			
		}

		mouseposition(event){
			let x = event.clientX;
			let w = window.innerWidth;
			if (this.state.mousedown == false){
				this.setState({mouseposx: x, clientwidth: w});
			}
		}

		componentDidMount () {
			setTimeout(()=>{			
			this.setState({mounted: true});
			console.log("mounted");}
			, 1500);
		}

			render (){
				return (
					<Div>
						<Div bottom={1} onMouseMove={this.mouseposition}>
							<H1 bottom={1}>Tokyo</H1>
						</Div>

						<OuterDiv onMouseMove={this.mouseposition} pos={this.state.mouseposx} mount={this.state.mounted} width={this.state.clientwidth}>
							<Div top={1}>
								<H1>Tokyo</H1>
								<Divider onMouseDown={this.handlemousedown} onMouseUp={this.handlemouseup} pos={this.state.mouseposx} mount={this.state.mounted} width={this.state.clientwidth}/>
							</Div>
						</OuterDiv>
						
					</Div>
				);
			}
		}