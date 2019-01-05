import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
	@media (min-width : 0px) {
        flex: 1 1 auto;
	}

	@media (min-width : 992px){
		display: inline-block;
		width: 33%;
		transition: all 0.5s ease-in-out;
		overflow: hidden;
		height: 70vh;
		background-color: black;
		:hover .div {opacity: 1};
		position: relative;
		vertical-align: top;
	}
`;

const activeOpacity = {
	opacity: '1',
	height: '75vh',
}

const activeScale = {
	transition: 'all .5s ease-in-out',
	boxShadow: '5px 13px 22px #888888',
	height: '75vh',
}

const Img = styled.img`

	@media (min-width : 0px) {
        display: none;
    }

	@media (min-width : 992px){
        display: block;
        background-image: url(${(props) => { return props.img }});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-color: #cccccc;
        width: 100%;
        height: 100%;
        transition: all 0.5s ease-in-out;
        opacity: 0.2;
    }
`;


const Button = styled.button`

	@media (min-width : 0px) {
        color: #597fff;
		width: 100%;
		transition: none;
        border: 2px solid #597fff;
        border-right: none;
        z-index: 3;
        background-color: white;
	}

    @media (min-width : 992px){
		background-image: none;
		border-radius: 3px;
		background: transparent;
		color: #597fff;
		border: 2px solid #597fff;
		position: absolute;
		font-size: 50px;
		width: 15vw;
		height: 10vh;
		right: 0;
		left: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}
`;

export const NavTab = (props) => {
    return (
        <Wrapper style={props.show === props.identity && window.innerWidth >= 992? activeScale : null}>
            <Img style={props.show === props.identity && window.innerWidth >= 992? activeOpacity : null} className="div" img={props.img}></Img>
            <Button onClick={() => props.getThumbnailClick(props.identity)}>{props.name}</Button>
        </Wrapper>
    ); 
}


