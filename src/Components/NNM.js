import React from 'react';
import styled from 'styled-components';


const Assesment = require('./images/internshipfinal.png');
const Background = require('./images/NNMBackground.jpg');

const Div = styled.div `
	background-image: url(${(props)=> props.Background});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-color: #cccccc;
	height: 80vh;
	width: 100%;
	position: relative;
`;

const H1 = styled.h1 `
	padding-left: 3vw;
	position: absolute;
	text-align: center;
	top: 35%;
	left: 0;
	right: 0;
	bottom: 0; 
`;

const H2 = styled.h2 `
	padding-left: 10vw;
	padding-right: 10vw;
	font-size: 300%;
`;

const P = styled.p `
	padding-left: 10vw;
	padding-right: 10vw;
	font-size: 150%;
`;

const Img = styled.img `
	width: 50vw;
	height: 120vh;
	margin-left: 25vw;
`;

export default class NNM extends React.Component {

	render() {
		return (
			<div>
				<Div Background={Background}>
					<H1>National Nuclear Museum: Internship</H1>
				</Div>
				<H2>Prep: </H2>
				<P>I started by attending meetings before I was actually admitted into the internship so that I could get an idea of what I was getting myself into and where the last team of interns was going to leave off. Before the leader whisked me into some work I had to be added to their managmnent groups(ca agile and google accounts). I mainly did research on attrative ideas and reported back on the plausibility of them. For example, one idea was to redirect the users based on which site they stood in front of. The problem with that was there was no free wordpress plugin that was accurate enough to pull that off. </P> 
				
				<br/>
				<br/>
				
				<H2>The Start:</H2>
				<P>I had multiple goals to complete for every two week sprint but there was usually one that would take up majority of my time.</P> 
				<P>The first was to install a slider plugin on a dummy site. This sounded like a 30 second job but turned into much more. Their(the last interns) custom css caused alot of problems and had to be rewritten. Even then I had a sank alot of time into making the new slider reponsive with the rest of the page. In the end, it was only made to be a prototype to see how it looked and everyone agreed that it didnt fit with the flow of the page to well. So... it all got trashed "bum bum bummmmmmm".</P>
				
				<H2>The Middle:</H2>
				<P>Next was the SEO prep. This part of the internship went pretty smooth and was the most enjoyable. The goal of this sprint was to track what we decided would be useful to track so during the meeting we wrote a list of all the different things that would be helpful to track. The basic layout of the site was surronded around the idea that younger or less interested people would see the basics of the plane or jet they were infront of but at the bottom of the page users could see much more information with a click of a accordion styled tab. So the main goal of tracking was to see how many people clicked on one or more of those tabs. I did this using google tag manager(which is now one of my favorite tools). I did suffer from a constant thought of "Oh my god, I am a terible programmer" just to find out after a few hours that their was a bug in the plugin itself and not my code. After I had finished I made alot of visual documentation including videos and sketchs of how it all works because I needed to teach my teacher how to use it so he could help the next interns.</P>
				
				<H2>The End:</H2>
				<P>Now we are nearing the end of the internship(and this jumbled mess of paragraphs). Last big step was to research and present wordpress security best practices. The presentation went terrible the first time. I think I got to comfy with not presenting. So I did it again. Wrote the documentation much more clear and to the point. When the presentation came around everyone made sure to ask a ton of questions and I was ready to answer all of them with who, what, where, when, why, how, and you get the point. It went well, security update was approved and got taken care of very quickly.</P>
				
				<H2>Conclusion:</H2>
				<P>Most of the internship was stuck at a standstill and so we did what everyone does at a standstill...find work. Which is why most of this is all over the place. I did learn what seems like an unfathomable about from the internship though. Personally I would say that I got some really great experience in presenting, google tag manager, and WordPress. Overall I was very happy with what I learned during the internship. </P>
			
				<Img src={Assesment}></Img>
				<P>This was the final assement written by my supervisor.</P>
			</div>
		);
	}  
}