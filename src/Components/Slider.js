import React from 'react';
import styled from 'styled-components';

const BackgroundImg = require('./images/background.jpg');
const Image1 = require('./images/laptops1.jpg');
const Image2 = require('./images/laptops2.jpg');
const Image3 = require('./images/laptops3.jpg');
const Image4 = require('./images/laptops4.jpg');



const Body = styled.div `
    height: 100%;
    margin: 0;
`;


const Background = styled.div `
	background-image: url(${(props)=> props.Background});
    height: 75%; 
    background-position: center top;
    background-repeat: no-repeat;
    background-size: 100% 65%;
`;

const Img = styled.img `
	width: 55vw;
	height: 50vh;
	border-radius: 5px 5px 5px 5px;
`;

const Container = styled.div `
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

const Slides = styled.ul`
	width: 9000px;
	transition: all 0.75s ease-in-out;

	margin-left: ${(props) => { 
		switch (props.pos) {
		    case 2:
		        return '-100vw';
		    case 3: 
		    	return '-200vw';
		    case 4: 
		    	return '-300vw';
		    case 5: 
		    	return '-400vw';
		    default: 
		        return '0px; transition: all .0s';
	}

}};
`;

const Slide = styled.li`
	list-style-type: none; 
	float: left;
	width: 100vw;
	height: 75vh;
`;

const Computer = styled.div`
	width: 65%;
	height: 65%;
	float:right;
	padding-right: 5vw;
	padding-top: 20vh;
	border-radius: 5px 5px 5px 5px;
`;

const Words = styled.div`
	color: white;
	width: 20vw;
	height: auto;
	float:left;
	padding-left: 5vw;
	padding-top: 20vh;
`;

const Next = styled.button`
	position: absolute;
	top: 12vh;
	right: 5vw;
	background-color: transparent;
	border: solid;
`;

const Prev = styled.button`
	position: absolute;
	top: 12vh;
	left: 5vw;
	background-color: transparent;
	border: solid;

`;

const Content = styled.div `
margin-left: 10vw;
`;
export default class Slider extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			pos: 0,
			run: true
		}
		this.handleNext = this.handleNext.bind(this);
		this.handlePrev = this.handlePrev.bind(this);
		this.mouseEnter = this.mouseEnter.bind(this);
		this.mouseLeave = this.mouseLeave.bind(this);
	}



componentDidMount() {
		this.time = function() {
			
				setInterval(()=>{
					if (this.state.run === true){
						console.log(this.state.pos);
						this.setState({pos: this.state.pos + 1});

						if(this.state.pos === 4){
							setTimeout(()=>{this.setState({pos: 1});}, 2750);
						}
					}
				}, 2000);
			
		}
this.time();
}


handleNext(){	
	this.setState({run: false});	
	this.setState({pos: this.state.pos + 1});
	if(this.state.pos === 5){
		this.setState({pos: 1});
	}

}


handlePrev(){
	this.setState({run: false});
	this.setState({pos: this.state.pos - 1});
	if(this.state.pos === 1){
		this.setState({pos: 4});
	}
}

mouseEnter(){
	console.log("enter");
	this.setState({run: false});
}
mouseLeave(){
		console.log("leave");

	this.setState({run: true});
}
	render() {
		return (
			<Body>
				<Background Background={BackgroundImg}>
	  				<Container>
	  					<Next onClick={this.handleNext} onMouseEnter={this.mouseEnter}>Next</Next>
	  					<Prev onClick={this.handlePrev} onMouseEnter={this.mouseEnter}>Prev</Prev>
			  			<Slides pos={this.state.pos} onMouseLeave={this.mouseLeave} onMouseEnter={this.mouseEnter}>
				  			<Slide>
				  				<Words>
					  				<h1>HP Laptops</h1>
					  				<p>Featured essential bussiness laptops</p>
				  				</Words>
				  				<Computer>
				  					<Img src={Image1}/>
				  				</Computer>
				  			</Slide>
				  			<Slide>
				  				<Words>
					  				<h1>Asus ZenBook 3</h1>
					  				<p>Best laptop of 2017</p>
				  				</Words>
				  				<Computer>
				  					<Img src={Image2}/>
				  				</Computer>
				  			</Slide>
				  			<Slide>
				  				<Words>
					  				<h1>Color 2044</h1>
					  				<p>I dont know what type of laptops these are</p>
				  				</Words>
				  				<Computer>
				  					<Img src={Image3}/>
				  				</Computer>
				  			</Slide>
				  			<Slide>
				  				<Words>
					  				<h1>Best Laptops 2017</h1>
					  				<p>PCMAG's list of their favorite laptops for 2017 and why</p>
				  				</Words>
				  				<Computer>
				  					<Img src={Image4}/>
				  				</Computer>
				  			</Slide>
				  			<Slide>
				  				<Words>
					  				<h1>HP Laptops</h1>
					  				<p>Featured essential bussiness laptops</p>
				  				</Words>
				  				<Computer>
				  					<Img src={Image1}/>
				  				</Computer>
				  			</Slide>
				  		</Slides>
	  				</Container>
	  			</Background>
	  			<Content>
		  			<h1 id="title">Functionality:</h1>
		  			<p>The slider will stop when the mouse is hovered over.</p>
		  			<p>The slider will continue when the mouse leaves.</p>
		  			<p>Previous and Next buttons.</p>
		  			<br/>
		  			<p>There are a few bugs that still need to be dealt with.</p>
		  		</Content>
	  		</Body>
		);
	}  
}