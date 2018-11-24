import React from 'react';
import styled from 'styled-components';

const Blocks = styled.div `
    width: 80px;
    height: 80px;
    background: black;
    color: white;
    display: flex;
    filter: blur(2px);
    border-radius: 5px;
    border: 1px white solid;
    font-size: 40px;
    position: absolute;
    transition: ${props => props.stop ? "all 1s ease-in-out" : ""};
`;

const Sybmbol = styled.p `
    margin: auto;
`;
export default class Block extends React.Component {
    constructor(props) {
        super(props);
        //not an antipattern because the props will only be used as seed data 
        this.state = {
            positionX: window.innerWidth * (this.props.blockState.positionX / 100),
            positionY: window.innerHeight * (this.props.blockState.positionY / 100),
            orgPositionX: window.innerWidth * (this.props.blockState.orgPositionX / 100),
            orgPositionY: window.innerHeight * (this.props.blockState.orgPositionY / 100),
            windowH: window.innerHeight,
            windowW: window.innerWidth,
            slopeX: this.getNewSlope(4,8,-4,-8),
            slopeY: this.getNewSlope(4,8,-4,-8),
            title: props.blockState.title,
            ready: false,
            stop: false,
        }
    }

    organizeBlocks() {
        this.setState({ 
            stop: !this.state.stop,
            positionX: this.state.orgPositionX,
            positionY: this.state.orgPositionY
        });
    }

    componentDidMount() {
        this.setState({ ready: true });
    }

    blockBounce () {
        let { positionX, positionY, slopeX, slopeY, windowH, windowW, stop } = this.state
        setTimeout(() => {
            setInterval(() => {
                this.setState( ({positionX, positionY, slopeX, slopeY, windowH, windowW, stop}) => {
                    return this.movement(positionX, positionY, slopeX, slopeY, windowH, windowW, stop);
                });
            }, 10);
        }, 1500);
    }
    
    movement(positionX, positionY, slopeX, slopeY, windowH, windowW, stop) {
        let newPositionX, newPositionY, newSlopeX, newSlopeY;
        let updateState = {};
        if(stop === true) {
            
        } 
        else {
            if( (positionX < (windowW - 80)) && (positionX > 0)  && (0 < positionY)  && (positionY < (windowH - 80)) ){
                updateState = {
                    positionX: positionX += slopeX,
                    positionY: positionY += slopeY
                }          
            } 
            else if((positionX < (windowW - 80)) && (positionX > 0) ) {
                let newSlopeX = slopeX;
                let newSlopeY = -slopeY;
                updateState = {
                    slopeX: newSlopeX,
                    slopeY: newSlopeY,
                    positionX: positionX += newSlopeX,
                    positionY: positionY += newSlopeY
                }
            } 
            else if((0 < positionY)  && (positionY < (windowH - 80))) {
                let newSlopeX = -slopeX;
                let newSlopeY = slopeY;
                updateState = {
                    slopeX: newSlopeX,
                    slopeY: newSlopeY,
                    positionX: positionX += newSlopeX,
                    positionY: positionY += newSlopeY
                }
            }
        }
        return updateState;
    }

    getNewSlope = (min, max, negMin, negMax) => {
        let rngArr = [];
        min = Math.ceil(min);
        max = Math.floor(max);
        rngArr.push(Math.floor(Math.random() * (max - min + 1)) + min);
        rngArr.push(Math.floor(Math.random() * (negMax - negMin + 1)) + negMin);
        return rngArr[Math.floor(Math.random() * 2)];
    }

    render() {
        let { title, positionX, positionY, stop } = this.state;
        return (
            <Blocks stop={stop} style={{top: positionY + 'px', left: positionX + 'px'}}>
                <Sybmbol>{title}</Sybmbol>
            </Blocks>
        )
    };
}