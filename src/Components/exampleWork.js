import React from 'react';
import {Bootstrap, Grid, Row, Col, Button} from 'react-bootstrap';
import ScrollUpButton from "react-scroll-up-button";
import styled from 'styled-components';


const H3 = styled.h3 `
	transition: all 0.25s ease-in-out;
	font-size: 300%;
	font-weight: bold;
	text-align: center;
	position: absolute;
	width: 100%;
	opacity: 0;
	bottom: 0vh;
`;


const Img = styled.img `
	transition: all 0.25s ease-in-out;
	width: 60%;
	height: 30vh;
	margin: 0 auto;
	display: block;
`; 		

const Border = styled.button `
	width: 100%;
	border-color: black;
	padding-top: 3vh;
	padding-bottom: 3vh;
	margin-bottom: 	3vh;
	background: transparent;
	transition: all 0.25s ease-in-out;

	&:hover { 
		transform: scale(.90);
	}
	&:hover Img{ 
		filter: blur(10px);
		transform: scale(.75);
	}
	&:hover H3{ 
		display: block;
		color: #597fff;
		bottom: 7vh;
		opacity: .9;
	}

`;


export class ExampleWork extends React.Component {	

	link () 
{
    window.location.href = this.props.link;
}
	render(){
		return (
			
				<Grid>
					<Row className="show-grid">
						<Col lg={6} md={6} sm={12} xs={12}>
							<Border onClick={this.link.bind(this)}>
								<Img className="img" src = {this.props.src}/>
								<H3>{this.props.title}</H3>
							</Border>
						</Col>
					</Row>
				</Grid>
			
		);
	}
}