import React from 'react';
import styled from 'styled-components';
import { Link} from "react-router-dom";




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
	position: relative;
`;

const Demo = styled.p `
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

const CaseStudy = styled.p `
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
					return  <Link to={this.props.link}>
								<CaseStudy>Lets Go</CaseStudy>
							</Link>
				}
				else{
					return  <div>
								<Link to={this.props.link}>
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