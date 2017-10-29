import React from 'react';
import styled from 'styled-components';

const Resume = require('./images/AustinBentley.jpg');


const Footer = styled.div `
	right: 0vw;
	background-color: #597fff;
	width: 100%;
	font-size: 6vh;
	border-radius: 2vh 2vh 0 0;
	position: fixed;
	bottom: 0;
	transition: all 0.5s ease-out;
	height : ${(props) => props.activeFooter === 1 || props.activeFooter === 2 || props.activeFooter === 3? '60vh' : '10vh' }
	
`;


//const midButton = Footer.withComponent('a')


const Button = styled.a `
	height: 6vh;
	font-size: 5vh;
	color: white;
	padding-left: 3vw;
	padding-right: 3vw;
	cursor: pointer; 
	cursor: hand;
	display: inline;
	width: 40px;
	`;

const ResumeP = styled.p `
	color: white; 
	display: inline-block;
	font-size: 7vh;
	display: center;
	padding-top: 10vh;
`;

const SiteP = styled.h1 `
	color: #ffffff; 
	display: block;
	font-size: 7vh;
	text-align: left;
	margin-left: 10vw;
`;

const CreditP = styled.p `
	color: #ffffff !important; 
	display: inline-block;
	font-size: 7vh;
	display: center;
	padding-top: 10vh;
	float: none;
`;

const Ul = styled.ul`
	display: block;
	text-align: left;
`;
const Li = styled.li`
	color: #ffffff;
	margin-left: 5vw;
`;

const Wrapper = styled.div `
	width: 100%;
	height: 100%;
	overflow: hidden;
	

`;

const Container = styled.ul `
	width: 9000px;
	list-style-type: none; 
	transition: all 0.5s ease-in-out;

	margin-left: ${(props) => {
		if(props.activeFooter === 3)
			{
				return '-200vw'
			}
		else if ( props.activeFooter === 2) 
			{
				return '-100vw'
			}
		else {
				return '-5vw'
			}
		} 
	};
	

`;

const Div = styled.li `
	float: left;
	width: 90vw;
	height: 100vh;
	margin-right: 10vw;

	

`; 

const Img = styled.img `
	float:left;
	width: 225px;
	height: 45vh;

`;



const HideFooter = styled.div `
	position: absolute;
	width: 5vw;
	min-height: 5vw;
	top: 2vh;
	left: 90vw;
	background-color: translucent;
`; 

const Span = styled.span `
	display: block;
	background-color: #ffffff;
	width: 30px;
	height: 5px;
	border-radius: 5px;
	position: absolute;
	top: 5vh;
	right: 3vw;
	transform: rotate(45deg);
	transition: all 0.5s ease-out;     

	opacity : ${(props) => props.activeFooter !== 0? '1' : '0' }

`;

export class SiteFooter extends React.Component {
	render(){
		return(
			<div>
				<Footer activeFooter={this.props.activeFooter}>

					<div>
						<Button onClick={() => this.props.showFooter(1)}>Site</Button>
						<Button onClick={() => this.props.showFooter(2)}>Credit</Button>
						<Button onClick={() => this.props.showFooter(3)}>Resume</Button>
						<HideFooter onClick={() => this.props.showFooter(0)}>
							<Span activeFooter={this.props.activeFooter} style={{transform: 'rotate(45deg)'}}></Span>
							<Span activeFooter={this.props.activeFooter} style={{transform: 'rotate(-45deg)'}}></Span>
						</HideFooter>
					</div>						
					<Wrapper>
						<Container activeFooter={this.props.activeFooter}>
							<Div>
								<SiteP>Built with: </SiteP>
								<Ul>
									<Li>React.js</Li>
									<Li>styled-components</Li>
									<Li>Redux</Li>
									<Li>blood, sweat, and tears</Li>
								</Ul>
							</Div>
							<Div>
								<CreditP>I'm gonna use this, but what? I'm not quite sure yet</CreditP>
							</Div>
							<Div>
								<ResumeP><a download="AustinBentley.pdf" href="./app/Components/images/AustinBentley.pdf" title="Resume">Download</a> my Resume</ResumeP>	
								<Img alt="AustinBentley's Resume failed to load" src={Resume} />
							</Div>
						</Container>
					</Wrapper>
				</Footer>
			</div>
		);
	}
}