import React from 'react';
import styled from 'styled-components';



const Wrapper = styled.div `
	@media (min-width : 0px) {
		width: 33%;
		background: white;
		display: inline-block;



	}

	@media (min-width : 992px){
		display: inline-block;
		width: 33%;
		transition: all 0.5s ease-in-out;
		overflow: hidden;
		height: 70vh;
		background-color: black;
		:hover .div {opacity: 1};
		box-shadow: 2px 5px 15px #888888;
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
		background-image: none;
		background-repeat: none
		background-size: none;
		background-position: none;
		background-color: transparent;
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
		width: 20vw;
		height: 10vh;
		transition: none;
		color: transparent;
		border: 5px solid #597fff;
		z-index: 3;


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

export default class Thumbnail extends React.Component {
	render() {
		return (
			<Wrapper style={this.props.show === this.props.identity && window.innerWidth >= 992? activeScale : null}>
				<Img style={this.props.show === this.props.identity && window.innerWidth >= 992? activeOpacity : null} className="div" img={this.props.img}></Img>
				<Button onClick={() => this.props.showThumbnail(this.props.show)} mobileImg={this.props.mobileImg}>{this.props.name}</Button>
			</Wrapper>
		);
	}  
}


