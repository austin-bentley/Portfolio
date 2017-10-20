import React from 'react';
import {Bootstrap, Grid, Row, Col, Button} from 'react-bootstrap';
import ScrollUpButton from "react-scroll-up-button";
import styled from 'styled-components';
import { ExampleWork } from './exampleWork';

const Me = require('./images/me.jpg');
const Rheintech = require('./images/RheinTech.png');
const NNM = require('./images/nationalnuclearmuseum.png');
const draggable = require('./images/draggable.PNG');
const slider = require('./images/slider.PNG');


const H1 = styled.h1`
	font-size: 7vh;
`;

const H2 = styled.h1`
	text-align: center;
`;

const WorkContainer = styled.div`
	margin-bottom: 200px;
	width: 95vw;
	overflow: hidden;
	margin-left: -3vw;
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

`;


const Hr = styled.hr `
	height: 15px;

`;

const Workimg = styled.a `
	background: url("./app/Components/images/nationalnuclearmuseum.png");
	display: block;
	height: 20vh;
	background-repeat: no-repeat;
	margin-top: 10vh;
	margin-bottom: 0px;
	background-position: center;
`;

const Unrelated = styled.div`
	margin-top: 5vh;
	margin-left: 15vw;
	margin-bottom: 10vh;
	float: left;
`;

const Related = styled.div`
	margin-right: 15vw;
	margin-bottom: 10vh;
	margin-top: 5vh;
	float: right;
`;

const Wrapper = styled.div `
	width: 100%;
	height: 100%;
	overflow-x: hidden;
	margin-bottom: 20vh;

`;

const UlContainer = styled.ul `
	margin-left: ${(props)=> '-' + props.scroll * 12 + 'vw'};
	width: 180vw;
	list-style-type: none; 
	transition: all 0.3s ease-out;
	background: white;
	height: 70vh;
`;

const LiContainer = styled.li `
	display: inline-block;
	float: left;
	width: 25vw;
	height: 70vh;
	margin-right: 10vw;

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
			mouseIn: false,
			scrollValue: 0
		}
		this.Handlescroll = this.Handlescroll.bind(this);
	}

	Handlescroll(x) {
		x.preventDefault();
		if (x.deltaY === 150){
			this.setState({mousein: true, scrollValue: this.state.scrollValue + 1});

			if (this.state.scrollValue >= 7){
				this.setState({scrollValue: 7});
			}
		}
		else if (x.deltaY === -150){
			this.setState({mousein: true, scrollValue: this.state.scrollValue - 1});

			if (this.state.scrollValue <= 0){
				this.setState({scrollValue: 0});
			}
		}
		console.log(this.state.scrollValue);
		
	}

	render(){
		return (
			<div>
				<Grid>
					<Row>
						<Col lg={12} md={12} sm={12} xs={12}>
							<div>
								<ScrollUpButton />
								<h1>Work</h1>
								<h4>(Pertaining to Web Development)</h4>
							</div>
						</Col>
					</Row>
				</Grid>
				<Wrapper>
					<UlContainer onWheel={this.Handlescroll} scroll={this.state.scrollValue}>
						<LiContainer>
							<ExampleWork title="National Nuclear Museum" link="/NNM" img={NNM} code="https://github.com/Abentley95/Portfolio/blob/master/src/Components/NNM.js"></ExampleWork>
						</LiContainer>
						<LiContainer>	
							<ExampleWork title="Rhein Tech Laboratories" link="/Rheintech" img={Rheintech} code="https://github.com/Abentley95/Portfolio/blob/master/src/Components/Rheintech.js"/>
						</LiContainer>
						<LiContainer>	
							<ExampleWork title="Draggable" link="/TokyoGhoul" img={draggable} code="https://github.com/Abentley95/Portfolio/blob/master/src/Components/Draggable.js"/>
						</LiContainer>
						<LiContainer>	
							<ExampleWork title="Random Designs" link="/" img={NNM} code=""/>
						</LiContainer>
						<LiContainer>	
							<ExampleWork title="Slider" link="/Slider" img={slider} code="https://github.com/Abentley95/Portfolio/blob/master/src/Components/Slider.js"/>
						</LiContainer>
					</UlContainer>
				</Wrapper>
			</div>
		);
	}
}

export class SchoolBody extends React.Component {
	render(){
		return (
			<div>
				<Grid>
					<ScrollUpButton />
					<Row>
						<Col lg={6} md={6} sm={12} xs={12}>
							<Unrelated>
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
							</Unrelated>
						</Col>
						<Col lg={6} md={6} sm={12} xs={12}>
							<Related>
								<h1>Related Classes</h1>
									<p>PHOTOSHOP: A</p>
									<p>WEB PUBLISHING: A</p>
									<p>DATABASE DESIGN & INTRO TO SQL: A</p>
									<p>PHP WEB PROGRAMMING: B</p>
									<p>INTERNSHIP: A</p>
									<p>C++ PROGRAMMING I: A</p>
									<p>LINUX ESSENTIALS: B</p>
									<p>JAVASCRIPT WEB PROGRAMMING: A</p>
							</Related>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}

}