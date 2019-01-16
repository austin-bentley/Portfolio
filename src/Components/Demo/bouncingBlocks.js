import React from 'react';
import styled from 'styled-components';
import Block from '../../subComponents/blocks';

const Title = styled.div `
    position: absolute;
    width: 200px;
    top: 50%;
    left: 0;
    right: 0;
    margin: 0 auto;
    border: 3px solid #ff3030;
    text-align: center; 
    padding: 5px 0;
    z-index: 3;
    cursor: pointer;
    font-size: 24px;
    color: #ff3030;
`;

const SubTitle = styled.a `
    position: absolute;
    width: 100px;
    top: 64%;
    left: 0;
    right: 0;
    margin: 0 auto;
    border: 1px solid;
    text-align: center; 
    padding: 5px 0;
    z-index: 2px;
    cursor: pointer;
`;

const PageWrapper = styled.div `
    height: 100vh;
`;

export default class BouncingBlocks extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			block1: {
                title: "A",
                positionX: 40,
                positionY: 60,
                orgPositionX: 0,
                orgPositionY: 30,
                ref: React.createRef()
            },
			block2: {
                title: "U",
                positionX: 40,
                positionY: 40,
                orgPositionX: 17,
                orgPositionY: 30,
                ref: React.createRef()
            },
            block3: {
                title: "S",
                positionX: 65,
                positionY: 45,
                orgPositionX: 34,
                orgPositionY: 30,
                ref: React.createRef()
            },
            block4: {
                title: "T",
                positionX: 30,
                positionY: 45,
                orgPositionX: 51,
                orgPositionY: 30,
                ref: React.createRef()
            },
            block5: {
                title: "I",
                positionX: 55,
                positionY: 35,
                orgPositionX: 68,
                orgPositionY: 30,
                ref: React.createRef()
            },
            block6: {
                title: "N",
                positionX: 25,
                positionY: 65,
                orgPositionX: 85,
                orgPositionY: 30,
                ref: React.createRef()
            },
            block7: {
                title: "B",
                positionX: 70,
                positionY: 65,
                orgPositionX: 0,
                orgPositionY: 40,
                ref: React.createRef()
            },
            block8: {
                title: "E",
                positionX: 35,
                positionY: 70,
                orgPositionX: 15,
                orgPositionY: 40,
                ref: React.createRef()
            },
            block9: {
                title: "N",
                positionX: 32,
                positionY: 55,
                orgPositionX: 30,
                orgPositionY: 40,
                ref: React.createRef()
            },
            block10: {
                title: "T",
                positionX: 60,
                positionY: 51,
                orgPositionX: 45,
                orgPositionY: 40,
                ref: React.createRef()
            },
            block11: {
                title: "L",
                positionX: 54,
                positionY: 65,
                orgPositionX: 60,
                orgPositionY: 40,
                ref: React.createRef()
            },
            block12: {
                title: "E",
                positionX: 45,
                positionY: 65,
                orgPositionX: 75,
                orgPositionY: 40,
                ref: React.createRef()
            },
            block13: {
                title: "Y",
                positionX: 55,
                positionY: 55,
                orgPositionX: 90,
                orgPositionY: 40,
                ref: React.createRef()
            },
        }
        
        this.organizeBlocks = this.organizeBlocks.bind(this);
        this.bounce = this.bounce.bind(this);
    }

    componentDidMount() {
        this.bounce();
    }

    bounce() {
        for (let key in this.state) {
            this.state[key].ref.current.blockBounce();
            let holder = this.state;
            holder[key].ref.current.state.stop = false;
            this.setState(holder);
        }
    }

    organizeBlocks() {
        for (let key in this.state) {
            this.state[key].ref.current.organizeBlocks();
        }
    }

	render() {
        let { block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13 } = this.state;
		return (
			<PageWrapper>
                <Title onMouseEnter={this.organizeBlocks} onMouseLeave={this.bounce}>bounce blocks</Title>
                <SubTitle href="https://2018.stateofjs.com/">Original</SubTitle>
                <Block blockState={block1} ref={block1.ref} />
                <Block blockState={block2} ref={block2.ref} />
                <Block blockState={block3} ref={block3.ref} />
                <Block blockState={block4} ref={block4.ref} />
                <Block blockState={block5} ref={block5.ref} />
                <Block blockState={block6} ref={block6.ref} />
                <Block blockState={block7} ref={block7.ref} />
                <Block blockState={block8} ref={block8.ref} />
                <Block blockState={block9} ref={block9.ref} />
                <Block blockState={block10} ref={block10.ref} />
                <Block blockState={block11} ref={block11.ref} />
                <Block blockState={block12} ref={block12.ref} />
                <Block blockState={block13} ref={block13.ref} />
	  		</PageWrapper>
		);
	}  
}