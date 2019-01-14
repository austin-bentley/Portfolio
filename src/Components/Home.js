import styled from 'styled-components';
import React from 'react';

const Me = require('./images/me.jpg');

const H1 = styled.h1`
	font-size: 7vh;
`;

const P = styled.p`
	font-size: 3vh;
    text-align: left;
    `;
    
const PDesc = P.extend `
    font-size: 22px;
    padding-left: 5px;
    display: inline-block;
`;
    
const PDescTitle = P.extend `
    display: inline-block;
    margin: 0;
`;

const AlignText = styled.div `
    text-align: center;
    padding-top: 32px;
`;

const MeImg = styled.img `
    border-radius: 50%;
    width: 100%;
`;

const Div = styled.div `
    padding: 32px;
    @media (min-width : 992px) {
        padding: 10vh;
    }
`;

const Name = styled.h1 `
	padding-bottom: 15px;
`;

const Classes = styled.div`
    flex: 0 1 auto;
    @media (min-width : 992px) {
        padding-right: 100px;
    }
`;

const FlexConatiner = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const Wrapper = styled.div `
	width: 100%;
	height: 100%;
	overflow-x: hidden;
	margin-bottom: 40px;
    overflow-x: scroll;
`;

const AboutMeTitleConatiner = styled.div `
    flex: 0 1 400px;
    @media (min-width : 992px) {
        flex: 0 1 475px;
        padding-right: 100px;
    }
`;
    
const AboutMeInfoContainer = styled.div `
    flex: 0 1 auto;
`;
    
const AboutMeDescContainer = styled.div `
    padding-top: 24px;
    font-size: 18px;
`;

const WorkConatiner = styled.div `
    padding: 0;
`;

const WrapperBottom = Wrapper.extend `
    margin-bottom: 20vh;
`;

const Ul = styled.ul `
	display: flex;
    height: 70vh;
    padding: 0;
    overflow-x: auto;
    margin: 0;
`;

const LiContainer = styled.li `
	display: inline-block;
	float: left;
	height: 70vh;
	margin-right: 10vw;
    flex: 0 0 350px;

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

export default class Home extends React.Component {
	constructor(props){
        super(props);
		this.state = {
			open: false
        }
    };

    render() {
        return (
            <Div>
                <H1>About Me</H1>	
                <FlexConatiner>
                    <AboutMeTitleConatiner>
                        <MeImg src={Me}></MeImg>
                    </AboutMeTitleConatiner>
                    <AboutMeInfoContainer>
                        <Name>Austin Bentley</Name>						
                        <PDescTitle>Email: </PDescTitle><PDesc><a href="mailto:australinsurf@gmail.com"> australinsurf@gmail.com</a></PDesc><br/>
                        <PDescTitle>Phone: </PDescTitle><PDesc><a href="tel:505-615-2451"> 505-615-2451</a></PDesc><br/>
                        <PDescTitle>Residence: </PDescTitle><PDesc> Albuquerque, New Mexico</PDesc><br/>
                    </AboutMeInfoContainer>
                </FlexConatiner>
                <AboutMeDescContainer> 
                    I grew up in Merritt Island, Florida where I picked up a passion for surfing. 
                    Then moved to Albuquerque, New Mexico....the desert. 
                    Without surfing I had to find a new passion. 
                    This is where programming came in. 
                    I went to school on and off when I could afford it but have never really been fond of the typical "complete this assignment out of this 4 year old book". 
                    I'm a believer of self innovation and exploration in all aspects of life.

                    <br/><br/>As cliche as it may be <i>"I have never let my schooling interfere with my education." - Mark Twain</i>
                </AboutMeDescContainer>
                <br/>
                <strong>Associate in applied sciences</strong>
                <p>Central New Mexico Community College - Albuquerque, NM</p>
                <FlexConatiner>
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
                </FlexConatiner>
            </Div>
        );
    }
}