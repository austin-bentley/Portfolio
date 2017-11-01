import React from 'react';
import styled from 'styled-components';


const Div = styled.div `
	width: 98vw;
	height: 98vh;
	background-color: white;
`;


const Button1 = styled.button `
	border-radius: 50%;
	color: #00B2D6;
	width: 50px;
	height: 50px;
	font-size: 200%;
	position: absolute;
	border: black 1px solid;
	background-color: white;
	transition: ${(props)=> props.mouse === true? 'all .1s ease-out' : 'none'};
`;

const Button2 = Button1.extend `
	color: #84CE00;
	transition: ${(props)=> props.mouse === true? 'all .2s ease-out' : 'none'};
`;

const Button3 = Button1.extend `
	color: #FFCF00;
	transition: ${(props)=> props.mouse === true? 'all .3s ease-out' : 'none'};
`;

const Button4 = Button1.extend `
	color: #FF7D01;
	transition: ${(props)=> props.mouse === true? 'all .4s ease-out' : 'none'};
`;

const Button5 = Button1.extend `
	color: #F42494;
	transition: ${(props)=> props.mouse === true? 'all .5s ease-out' : 'none'};
`;

const Button6 = Button1.extend `
	color: #0024BA;
	transition: ${(props)=> props.mouse === true? 'all .6s ease-out' : 'none'};
`;

const H1 = styled.h1 `
	font-family: "Times New Roman", Times, serif;
	fontsize: 200%;
	text-align: center;
	color: black;
`;

		export default class IconDrag extends React.Component {
			//make it draggable by getting mouse move position and mousedown/up
		constructor(){
			super();
			this.state = {
				count: 0,
				mousedown: true,
				mouseposx: 100,
				mouseposy: 300,
				secondx: 100,
				secondy: 300,
				thirdx: 100,
				thirdy: 300,
				fourthx: 100,
				fourthy: 300,
				fifthx: 100,
				fifthy: 300,
				sixthx: 100,
				sixthy: 300
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
			this.setState({mousedown: true});

			for ( var key in this.state) {
				console.log(`${[key]} = ${this.state[key]}`);
			}

			setTimeout(()=>{
				this.setState({
					secondy: this.state.secondy + 50,
					thirdy: this.state.thirdy + 100,
					fourthy: this.state.fourthy + 150,
					fifthy: this.state.fifthy + 200,
					sixthy: this.state.sixthy + 250
				})	
			}, 600)	
		}


		mouseposition(event){

			let x = event.clientX;
			let y = event.clientY;

			if (x === undefined){
				x = event.touches[0].clientX;
				y = event.touches[0].clientY;
			}

			let w = window.innerWidth;
			if (this.state.mousedown === false){

				this.setState({mouseposx: x -20, clientwidth: w, mouseposy: y -20, count: this.state.count + 1});
				setTimeout(()=>{this.setState({secondx: x -20, secondy: y -20});}, 100 );
				setTimeout(()=>{this.setState({thirdx: x -20, thirdy: y -20});}, 200 );
				setTimeout(()=>{this.setState({fourthx: x -20, fourthy: y -20});}, 300 );
				setTimeout(()=>{this.setState({fifthx: x -20, fifthy: y -20});}, 400 );
				setTimeout(()=>{this.setState({sixthx: x -20, sixthy: y -20});}, 500 );
			}
		}

			render (){
				return (
					<Div onMouseMove={this.mouseposition} onTouchMove={this.mouseposition}>
						<H1>Drag The Button</H1>
						<Button6 style={{top: this.state.sixthy, left: this.state.sixthx }} mouse={this.state.mousedown}>F</Button6>
						<Button5 style={{top: this.state.fifthy, left: this.state.fifthx }} mouse={this.state.mousedown}>E</Button5>
						<Button4 style={{top: this.state.fourthy, left: this.state.fourthx }} mouse={this.state.mousedown}>D</Button4>
						<Button3 style={{top: this.state.thirdy, left: this.state.thirdx }} mouse={this.state.mousedown}>C</Button3>
						<Button2 style={{top: this.state.secondy, left: this.state.secondx }} mouse={this.state.mousedown}>B</Button2>
						<Button1 style={{top: this.state.mouseposy, left: this.state.mouseposx}}
							onMouseDown={this.handlemousedown} 
							onMouseUp={this.handlemouseup} 
							mouse={this.state.mousedown} 
							onTouchStart={this.handlemousedown} 
							onTouchEnd={this.handlemouseup} 
						>A</Button1>
					</Div>
				);
			}
		}