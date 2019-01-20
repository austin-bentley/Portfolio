import styled from 'styled-components';
import React from 'react';

const Me = require('./images/me.jpg');

const H1 = styled.h1`
	font-size: 7vh;
`;

const P = styled.p `
    padding-left: 10%;
    margin: 2px;
    width: 425px;
`;
    
const PDesc = styled.p `
    font-size: 3vh;
    text-align: left;
    font-size: 22px;
    padding-left: 5px;
    display: inline-block;
`;
    
const PDescTitle = styled.p `
    font-size: 3vh;
    text-align: left;
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
    padding-top: 5%;
`;

const Name = styled.h1 `
	padding-bottom: 15px;
`;

const FlexConatiner = styled.div`
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
`;

const ClassContainer = styled.div`
     width: 400px;
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

const SubTitle = styled.h4 `
    text-align: left;
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
                    <ClassContainer>
                        <SubTitle>Unrelated Classes:</SubTitle>
                        <P>INTRO TO COMPUTERS: B</P>
                        <P>INTRO TO SOCIOLOGY: A</P>
                        <P>INTRO ANTHROPOLOGY: A</P>
                        <P>DRAWING I: C</P>
                        <P>COLLEGE WRITING: B</P>
                        <P>PROB SOLV METHODS: A</P>
                        <P>ANALYTIC WRITING: C</P>
                        <P>ETHICS AND SOCIETY: C</P>
                        <P>TECHNICAL WRITING: B</P>
                        <P>ALG PROB SOLV II: CR</P>
                        <P>INTRO TO ART: B</P>
                        <P>INTERMED ALGEBRA: A</P>
                        <P>INTRO ENTREPRNSHIP: B</P>
                        <P>BUS PROFESSIONALISM: A</P>
                        <br/>
                    </ClassContainer>
                    <ClassContainer>
                        <SubTitle>Related Classes:</SubTitle>
                        <P>PHOTOSHOP: A</P>
                        <P>WEB PUBLISHING: A</P>
                        <P>DATABASE DESIGN & INTRO TO SQL: A</P>
                        <P>PHP WEB PROGRAMMING: B</P>
                        <P>INTERNSHIP: A</P>
                        <P>C++ PROGRAMMING I: A</P>
                        <P>LINUX ESSENTIALS: B</P>
                        <P>JAVASCRIPT WEB PROGRAMMING: A</P>
                    </ClassContainer>
                </FlexConatiner>
            </Div>
        );
    }
}