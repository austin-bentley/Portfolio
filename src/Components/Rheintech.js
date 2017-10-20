import React from 'react';
import styled from 'styled-components';

const Background = require('./images/rheintechhome.PNG');

const HomeImg = styled.div`
	background-image: url(${(props)=> props.Background});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-color: #cccccc;
	height: 80vh;
	position: relative;
	filter: blur(5px);
`; 

const H1 = styled.h1 `
	padding-left: 3vw;
	position: absolute;
	text-align: center;
	top: 35%;
	left: 0;
	right: 0;
	bottom: 0; 
	font-size: 700%;
	color: #F6B600;
`;

 const P = styled.p `
	 font-size: 200%;
	 margin-left: 5vw;
	 margin-right: 5vw;
	 margin-top: 5vh;
 `;

 const Img = styled.img `
 	width: 90vw; 
 	display: block;
 	margin: auto;
 `;

 const Ul = styled.ul `

 `;

 const Li = styled.li `
 font-size: 150%;
 margin-left: 5vw;
 `;

const Button = styled.button`
	 margin-left: 5vw;
	border-radius: 3px;
	background: transparent;
	color: #F6B600;
	border: 2px solid #F6B600;
	position: absolute;
	font-size: 150%;
	
`;

export default class Rheintech extends React.Component {
	constructor (props) {
		super(props);
		this.redirect = this.redirect.bind(this);
	}

	redirect() {
	let url = 'http://www.rheintech.com/';
    window.location.assign(url);
	}

	render() {
		return (
			<div>
			<HomeImg Background={Background}/>
			<H1><strong>Rheintech</strong></H1>
			<P>In short, Rheintech was SEO contract work for a family friend
			I began by researching their home page and services to find out exactly what the company provided and which one of those services was the most popular.</P>
			<Img src="./app/Components/images/iot.jpg"/>
			<P>Next, I spent some time looking for bad practices. Keyword packing, listing for all states even though you are only in one, and then BAM I found one. Bad or Spammy backlinks. Obviously this wasnt something they did but it needed to be fixed. There were thousands of sites linking to Rheintech's. After a long day of going though each one indiviually I went ahead and made a disavow file which was sumbited to google a little later on.</P>
			<P>ONWARD, TO BUGGSSSS!!! Rheintech had a problem with duplicate pages or... Joomla had a problem with duplicate pages. I never really did find the root of the problem. However, I did implement SEF(search engine friendly) urls and clear around 1,200 duplicate pages</P>
			<P>All of this did take a good amount of time and was not as simple as it sounds but it was a great learning experience</P>
			<br/>
			<Button onClick={this.redirect}><strong>Take Me To Rheintech</strong></Button>
			<br/>
			<P>Here are some of the tools I used when trouble shooting the site: </P>
			<Ul>
				<Li>MOZ</Li>
				<Li>Google Web Master Tools</Li>
				<Li>Google Analytics</Li>
				<Li>Monitor Backlinks</Li>
				<Li>forums... an ungodly amount of forums</Li>
				<Li>sh404SEF</Li>
			</Ul>
			<br/>
			<br/>
			<br/>
			</div>

		);
	}  
}