import React from 'react';
import styled from 'styled-components';
import { Link} from "react-router-dom";




const H3 = styled.h3 `
	user-select: none;
	font-size: 150%;
	font-weight: bold;
	text-align: center;
	width: 100%;
	color: black;
	padding-top: 10%;
`;


const Border = styled.div `
    margin: 20px;
    flex: 0 0 350px;
	position: relative;
	width: 100%;
	transition: all 0.25s ease-in-out;
	border-radius: 5px;
	box-shadow: rgb(56, 56, 56) 0px 5px 30px 5px;
	position: relative;
`;

const Demo = styled.p `
	user-select: none;
	color: black;
	display: inline;
	font-size: 175%;
	padding-left: 5%;
	padding-right: 5%;
	position: absolute;
	bottom: 0px;
	left: 15%;
	cursor: pointer;

`;

const Code = Demo.extend `
	user-select: none;
	border-right: none;
	left: 55%;
`;

const Img = styled.div `
	user-drag: false;
	background-image: url(${(props)=> props.src});
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center bottom;
	width: 100%;
	height: 40%;
	
`;

const CaseStudy = styled.p `
	user-select: none;
	font-size: 200%;
	color: black;
	cursor: pointer;
	position: absolute;
	bottom: 15px;
	text-align: center;
	left: 0;
	right: 0;
	margin: auto;

`;

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
			{(()=>{
				if (this.props.caseStudy === true){
					return  <Link to={this.props.link} draggable="false">
								<CaseStudy>Lets Go</CaseStudy>
							</Link>
				}
				else{
					return  <div draggable="false">
								<Link to={this.props.link} draggable="false">
									<Demo>Demo</Demo>
								</Link>
								<Code onClick={this.handleRedirect.bind(this)} page={this.props.code}>Code</Code>
							</div>
				}

			})()}


		</Border>				
			
		);
	}
}