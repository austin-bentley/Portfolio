import React from 'react';
import styled from 'styled-components';



const Wrapper = styled.div `
	@media (min-width : 0px) {
		height: 10vh;
		position: fixed;
		z-index: 1;
		width: 100vw;

	}

	@media (min-width : 992px){
		transition: all 0.5s ease-in-out;
		overflow: hidden;
		height: 70vh;
		background-color: black;
		:hover .div {opacity: 1};
		box-shadow: 2px 5px 15px #888888;
		position: static;
		width: 100%;
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
		background-image: none;
		background-repeat: none
		background-size: none;
		background-position: none;
		background-color: white;
		transition: none;
		opacity: none;
    }

	@media (min-width : 992px){
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
		background-image: url(${(props) => { return props.mobileImg }});

		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		background-color: transparent;
		width: 30vw;
		height: 15vh;
		transition: none;
		opacity: none;
		color: transparent;
		border: 5px solid #597fff;
		position: relative;
		display: inline;
		z-index: 1;
	}

		@media (min-width : 992px){
		background-image: none;
		border-radius: 3px;
		background: transparent;
		color: #597fff;
		border: 2px solid #597fff;
		position: absolute;
		font-size: 50px;
		display: inline;
		width: 15vw;
		height: 10vh;
		left: 40%;
    	top: 40%;
	}
`;

export default class Thumbnail extends React.Component {
	render() {
		return (
			<Wrapper style={this.props.show === this.props.identity && window.innerWidth >= 992? activeScale : null}>
				<Img style={this.props.show === this.props.identity && window.innerWidth >= 992? activeOpacity : null} className="div" img={this.props.img}></Img>
				<Button className="center-block" onClick={() => this.props.showThumbnail(this.props.show)} mobileImg={this.props.mobileImg}>{this.props.name}</Button>
			</Wrapper>
		);
	}  
}


