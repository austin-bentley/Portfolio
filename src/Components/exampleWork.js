import React from 'react';
import {Bootstrap, Grid, Row, Col, Button} from 'react-bootstrap';
import ScrollUpButton from "react-scroll-up-button";
import styled from 'styled-components';
import  NNM  from "./NNM";
import { HashRouter, Route, Link} from "react-router-dom";




const H3 = styled.h3 `
	font-size: 150%;
	font-weight: bold;
	text-align: center;
	width: 100%;
	color: black;
	padding-top: 10%;
`;


const Border = styled.div `
	text-align: center;
	margin-top: 5%;
	position: relative;
	width: 100%;
	height: 90%;
	background: white;
	opacity: .9;
	margin-bottom: 3vh;
	transition: all 0.25s ease-in-out;
	border-radius: 5px;
	box-shadow: rgb(56, 56, 56) 0px 5px 30px 5px;
`;

const Demo = styled.p `
	color: black;
	display: inline;
	font-size: 175%;
	padding-left: 5%;
	padding-right: 5%;
	border-right: 1px solid black;
	position: absolute;
	bottom: 0px;
	left: 15%;
	cursor: pointer;

`;

const Code = Demo.extend `
	border-right: none;
		left: 55%;
`;

const Img = styled.div `
	background-image: url(${(props)=> props.src});
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center bottom;
	width: 100%;
	height: 40%;
	
`;
//styles={{fontSize: }}

export class ExampleWork extends React.Component {	
	
	handleRedirect(){
	let newloc = this.props.code;
    window.location.assign(newloc);
	}



	render(){
		return (
		<Border>
			<H3>{this.props.title}</H3>
			{(() => {
					if (this.props.title === "Random Designs")
					{
						return <p>Not Available</p>
					}
					else{
						return <Img src={this.props.img}></Img>
					}
				})()
			}

			<Link to={this.props.link}>
				<Demo>Demo</Demo>
			</Link>
				<Code onClick={this.handleRedirect.bind(this)} page={this.props.code}>Code</Code>
		</Border>				
			
		);
	}
}