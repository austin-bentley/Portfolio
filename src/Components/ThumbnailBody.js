import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ScrollUpButton from "react-scroll-up-button";
import styled from 'styled-components';
import { ExampleWork } from './exampleWork';


const Me = require('./images/me.jpg');
const Rheintech = require('./images/RheinTech.png');
const NNM = require('./images/nationalnuclearmuseum.png');
const draggable = require('./images/draggable.PNG');
const slider = require('./images/slider.PNG');
const IconDrag = require('./images/IconDragThumbnail.PNG');

const H1 = styled.h1`
	font-size: 7vh;
`;


const P = styled.p`
	font-size: 3vh;
	text-align: left;

`;

const Img = styled.img `
	height: 70%;
	width: 70%;
	border-radius: 50%;
	margin-left: 5vw;

`;

const Div = styled.div `
	transition: all 1s ease-out;
	margin-top: 15vh;
`;


const Hr = styled.hr `
	height: 15px;

`;


const Classes = styled.div`
	margin-top: 5vh;
	margin-left: 10vw;
	margin-bottom: 10vh;
	
`;


const Wrapper = styled.div `
	width: 100%;
	height: 100%;
	overflow-x: hidden;
	margin-bottom: 20vh;

`;

const UlContainer = styled.ul `
	width: 300vw;
	list-style-type: none; 
	transition: all 0.3s ease-out;
	background: white;
	height: 70vh;
`;

const LiContainer = styled.li `
	display: inline-block;
	float: left;
	height: 70vh;
	margin-right: 10vw;


	@media (min-width : 0px) {
	 	width: 75vw;
    }

	@media (min-width : 480px) {
	 	width: 50vw;
    }

    @media (min-width : 768px) {
    	width: 35vw;
    }

    @media (min-width : 992px) {
    	width: 25vw;
    }
`;


export class AboutMeBody extends React.Component {
	render(){
		return (
			<Div>
				<Grid>
					<Row className="show-grid">
						<Col lg={12} md={12} sm={12} xs={12}>
							<H1>About Me</H1>		
						</Col>
					</Row>
					<Row>
						<Col lg={6} md={6} sm={12} xs={12}>	
							<Img src={Me}></Img>
						</Col>
						<Col lg={6} md={6} sm={12} xs={12}>	
						<ScrollUpButton />	
							<h1> Aspiring Web Developer</h1>
							<Hr/>							
							<P> Well in case you don't know by now my name is Austin Bentley, and I'm an aspiring web developer. I prefer the front-end more than the back-end but it doesnt ruin my day when i have backend work to do. I enjoy all thing's programming.</P>
							<br/>
							<P>If you like what you see here, feel free to shoot me an e-mail at <a href="mailto:australinsurf@gmail.com">abentley3@cnm.edu</a></P>
							<br/>
							<br/>
							<br/>
							<br/>
							<br/>
							<br/>
							<br/>
							<br/>
						</Col>			
					</Row>
				</Grid>
			</Div>
		);
	}

}

export class WorkBody extends React.Component {
	constructor(){
		super();
		this.state = {
			_startDrag: 0,
			_sliderPosx: 0,
			_mouseDown: false,
			_difference: 0,
			_differencePosControl: 0
		}

		this.handleMove = this.handleMove.bind(this);
		this.handleMouseUp = this.handleMouseUp.bind(this);
		this.handleMouseDown = this.handleMouseDown.bind(this);
	}

	handleMove(event){
		let posX = event.clientX;
		if (posX === undefined){
			posX = event.touches[0].clientX;
		}

		if (this.state.mouseDown === true){
				let difference = (posX - this.state._startDrag);
				this.setState({_sliderPosx: posX, _difference: difference});
				console.log(difference);
		}
		
	}

	handleMouseUp(){
		let differencePosControl = this.state._difference;
		this.setState({mouseDown: false, _differencePosControl: differencePosControl});
		
	}

	handleMouseDown(event){
		event.persist();
		this.setState({mouseDown: true}, ()=>{this.handleMove(event)});

		let posX = event.clientX;
		if (posX === undefined){
			posX = event.touches[0].clientX;
		}
			this.setState({_startDrag: (posX - this.state._differencePosControl)});

	}


	render(){
		return (
			<Div>
				<Grid>
					<Row>
						<Col lg={12} md={12} sm={12} xs={12}>
							<div>
								<ScrollUpButton />
								<h1>Case Studies</h1>
								<h4>(Pertaining to Web Development)</h4>
							</div>
						</Col>
					</Row>
				</Grid>
				<Wrapper>
					<UlContainer onTouchMove={this.handleMove} 
						onMouseMove={this.handleMove} 
						onMouseDown={this.handleMouseDown} 
						onMouseUp={this.handleMouseUp} 
						current={this.state._sliderPosx} 
						difference={this.state._difference}
						onTouchStart={this.handleMouseDown}
						onTouchEnd={this.handleMouseUp}
						style={{marginLeft: this.state._difference + "px"}}
						>
						<LiContainer>
							<ExampleWork caseStudy={true} title="National Nuclear Museum" link="/NNM" img={NNM}></ExampleWork>
						</LiContainer>
						<LiContainer>	
							<ExampleWork caseStudy={true} title="Rhein Tech Laboratories" link="/Rheintech" img={Rheintech}/>
						</LiContainer>
						<LiContainer>	
							<ExampleWork caseStudy={true} title="Random Designs" link="/" img={NNM} />
						</LiContainer>
					</UlContainer>
				</Wrapper>

				<Grid>
					<Row>
						<Col lg={12} md={12} sm={12} xs={12}>
							<div>
								<h1>Demo</h1>
								<h4>(Pertaining to Web Development)</h4>
							</div>
						</Col>
					</Row>
				</Grid>
				<Wrapper>
					<UlContainer onTouchMove={this.handleMove} 
					onMouseMove={this.handleMove} 
					onMouseDown={this.handleMouseDown} 
					onMouseUp={this.handleMouseUp} 
					current={this.state._sliderPosx} 
					difference={this.state._difference}
					onTouchStart={this.handleMouseDown}
					onTouchEnd={this.handleMouseUp}
					style={{marginLeft: this.state._difference + "px"}}
					>
						<LiContainer>	
							<ExampleWork title="Draggable" link="/TokyoGhoul" img={draggable} code="https://github.com/Abentley95/Portfolio/blob/master/src/Components/Draggable.js"/>
						</LiContainer>
						<LiContainer>	
							<ExampleWork title="Slider" link="/Slider" img={slider} code="https://github.com/Abentley95/Portfolio/blob/master/src/Components/Slider.js"/>
						</LiContainer>
						<LiContainer>	
							<ExampleWork title="Icon Drag" link="/IconDrag" img={IconDrag} code="https://github.com/Abentley95/Portfolio/blob/master/src/Components/IconDrag.js"/>
						</LiContainer>
					</UlContainer>
				</Wrapper>
			</Div>
		);
	}
}

export class SchoolBody extends React.Component {
	render(){
		return (
			<Div>
				<Grid>
					<ScrollUpButton />
					<Row>
						<Col lg={6} md={6} sm={12} xs={12}>
							<Classes>
								<h1>Unrelated Classes</h1>
									<p>INTRO TO COMPUTERS: B</p>
									<p>INTRO TO SOCIOLOGY: A</p>
									<p>INTRO ANTHROPOLOGY: A</p>
									<p>DRAWING I: C</p>
									<p>COLLEGE WRITING: B</p>
									<p>PROB SOLV METHODS: A</p>
									<p>ANALYTIC WRITING: C</p>
									<p>ETHICS AND SOCIETY: C</p>
									<p>TECHNICAL WRITING: B</p>
									<p>ALG PROB SOLV II: CR</p>
									<p>INTRO TO ART: B</p>
									<p>INTERMED ALGEBRA: A</p>
									<p>INTRO ENTREPRNSHIP: B</p>
									<p>BUS PROFESSIONALISM: A</p>
									<br/>
							</Classes>
						</Col>
						<Col lg={6} md={6} sm={12} xs={12}>
							<Classes>
								<h1>Related Classes</h1>
									<p>PHOTOSHOP: A</p>
									<p>WEB PUBLISHING: A</p>
									<p>DATABASE DESIGN & INTRO TO SQL: A</p>
									<p>PHP WEB PROGRAMMING: B</p>
									<p>INTERNSHIP: A</p>
									<p>C++ PROGRAMMING I: A</p>
									<p>LINUX ESSENTIALS: B</p>
									<p>JAVASCRIPT WEB PROGRAMMING: A</p>
							</Classes>
						</Col>
					</Row>
				</Grid>
			</Div>
		);
	}

}