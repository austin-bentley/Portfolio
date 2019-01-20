import React from 'react';
import styled from 'styled-components';
import { size } from '../../DeviceSizing';

const Image1 = require('../images/tokyoghoul1.png');
const Image2 = require('../images/tokyoghoul2.jpg');

const ComponentContainer = styled.div `
    width: 100%;
    height: 92vh;
    position: relative;
`;

const ImageOneDiv = styled.div `
	background-image: url(${(props) => props.bottom? props.bottom : props.top});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-color: #cccccc;
	height: 100%;
    width: 100%;
    position: absolute;
`;

const ImageTwoDiv = styled.div `
	background-image: url(${(props) => props.bottom? props.bottom : props.top});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-color: #cccccc;
	height: 100%;
    width: ${(props) => props.containerSize? props.containerSize + 'px' : '100%'};
	position: absolute;
`;

const OuterDiv = styled.div `
	touch-action: none;
	height: 100%;
	position: absolute;
    overflow: hidden;
	width: ${(props) => {
		if (props.mount === true){
			return '50%'; 
		}
		else if (props.mount === false){
			return '.9%';
		}
            if (props.pos !== 0) {
                if (props.windowW < 678) { 
                    return  props.pos - 36 + 'px'; 
                } else if (props.windowW < 1024) {
                    return  props.pos - 265 + 'px'; 
                } else {
                    return  props.pos - 340 + 'px'; 
                }
            }
		}
    }};

	transition: ${(props)=> props.mount === true? 'all 1s ease-in-out' : 'none' };

`;

const Divider = styled.span `
	touch-action: none;
	width: 5%;
	height: 100%;
	background: linear-gradient(to bottom, #ff3232 1%,#c58cff 100%);
	position: absolute;
	top: 0;	
	display: block;
	border-radius: 3px;

	left: ${(props) => {
		if (props.mount === true){
			return '48%';
		}
		else if (props.mount === false){
			return '0%';
		} else {
            console.log('somethingg', props.pos - 265);
            if (props.pos !== 0) {
                if (props.windowW < 678) { 
                    return  props.pos - 45 + 'px'; 
                } else if (props.windowW < 1024) {
                    return  props.pos - 275 + 'px'; 
                } else {
                    return  props.pos - 355 + 'px'; 
                }
            }
		}
	}};

	transition: ${(props)=> props.mount === true? 'all 1s ease-in-out' : 'none' };
`;

const H1 = styled.h1`
	color: ${(props=> props.bottom === 1? 'black' : 'white' )};
	font-size: 25vw;
	text-align: center;
	user-select: none;
`;

export default class TokyoGhoul extends React.Component {

    //make it draggable by getting mouse move position and mousedown/up
    constructor(){
        super();
        this.state = {
            mousedown: true,
            mouseposx: 0,
            mounted: false,
            containerSize: React.createRef(),
            windowW: window.innerWidth
        }
        this.handlemousedown = this.handlemousedown.bind(this);
        this.handlemouseup = this.handlemouseup.bind(this);
        this.mouseposition = this.mouseposition.bind(this);
        this.getContainerSize = this.getContainerSize.bind(this);
    }

    handlemousedown(event){
        event.persist();
        this.setState({mousedown: false, mounted: 1}, ()=>{this.mouseposition(event)});
    }

    handlemouseup(){
        this.setState({mousedown: true})
    }

    mouseposition(event){
        let x = event.clientX;
        if (x === undefined){
            x = event.touches[0].clientX;
        }
        let w = window.innerWidth;
        if (this.state.mousedown === false){
            this.setState({mouseposx: x});
        }
    }

    componentDidMount () {
        setTimeout(()=> { this.setState({mounted: true})}, 1500);
    }

    getContainerSize() {
        if(this.state.containerSize.current) {
            return this.state.containerSize.current.offsetWidth;
        }
    }

    render (){
        return (
            <ComponentContainer innerRef={this.state.containerSize}>
                <ImageOneDiv bottom={Image1} onMouseMove={this.mouseposition} onTouchMove={this.mouseposition}>
                    <H1 bottom={1}>Tokyo</H1>
                </ImageOneDiv>

                <OuterDiv windowW={this.state.windowW} onMouseMove={this.mouseposition} onTouchMove={this.mouseposition} pos={this.state.mouseposx} mount={this.state.mounted} width={this.getContainerSize()}>
                    <ImageTwoDiv top={Image2} containerSize={this.getContainerSize()}>
                        <H1>Tokyo</H1>
                        <Divider 
                            onMouseDown={this.handlemousedown} 
                            onMouseUp={this.handlemouseup} 
                            onTouchStart={this.handlemousedown} 
                            onTouchEnd={this.handlemouseup} 
                            pos={this.state.mouseposx} 
                            mount={this.state.mounted} 
                            windowW={this.state.windowW}
                            width={this.getContainerSize()}
                            />
                    </ImageTwoDiv>
                </OuterDiv>
            </ComponentContainer>
        );
    }
}