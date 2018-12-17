import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

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
    border: 1px solid black;
	position: relative;
`;

const SectionBottom = styled.div `
	position: absolute;
    bottom: 0px;
    width: 100%;
    display: flex;
    text-align: center;
`;

const Demo = styled.p `
    flex: 1 1 auto;
    font-size: 32px;
    color: black;
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

const CaseStudyTitle = styled.p `
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

export const ExampleWork = (props) => {	

        let format;
        if (props.caseStudy === true) {
            format =
                <Link to={props.link}>
                    <CaseStudyTitle>Lets Go</CaseStudyTitle>
                </Link>
        } else {
            format = 
                <div>
                    <Link to={props.link}>
                        <SectionBottom>
                            <Demo>Demo</Demo>
                        </SectionBottom>
                    </Link>
                </div>
        }
		return (
            <Border>
                <H3>{props.title}</H3>
                <Img src={props.img}></Img>
                {format}
            </Border>
		);
	}