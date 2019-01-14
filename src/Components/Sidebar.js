import React from 'react';
import { Body } from './Body';
import styled from 'styled-components';

const SideBarContainer = styled.div `
    height: calc(100vh - 36px);
    width: ${props => props.isActive ? '80%' : '0%'};
    background-color: #333333;
    transition: all 1s ease-in-out;
    opacity: .97;
    position: fixed;
    bottom: 0;
`;

const Home = styled.p `
    font-size: 18px;
    color: #989696;
    margin: 0px;
    font-weight: 400;
`;
    
const Group = Home.extend `
    padding: 10px 0 10px 0;
`;

const ComponentName = Home.extend `
    font-weight: 300;
    padding: 4px;
    color: white;
`;

const ComponentContainer = styled.div `
    padding-left: 15px;
`;

const HomeContainer = styled.div `
    padding: 10px 0 0 10px;
    position: absolute;
    left: ${props => props.isActive ? '0' : '-300px'};
    transition: all 1s ease-in-out;
`;

class SideBar extends React.Component {
	constructor(props){
        super(props);
		this.state = {
            open: false
        }
    };

	render() {
		return (
            <div ref={node => {this.refs = node}}>
                <SideBarContainer isActive={this.props.isActive}>
                    <HomeContainer isActive={this.props.isActive}> 
                        <Home>Home</Home>
                            <Group>Case Studies</Group>
                            <ComponentContainer>
                                <ComponentName>National Nuclear Museum</ComponentName>
                                <ComponentName>RheinTech Laboratories</ComponentName>
                                <ComponentName>Rural Sourcing Inc</ComponentName>
                            </ComponentContainer>
                            <Group>Demo's</Group>
                            <ComponentContainer>
                                <ComponentName>Slider</ComponentName>
                                <ComponentName>Icon Drag</ComponentName>
                                <ComponentName>Survey Modal</ComponentName>
                                <ComponentName>Bouncing Blocks</ComponentName>
                                <ComponentName>Serverless Backend</ComponentName>
                            </ComponentContainer>
                    </HomeContainer>
                </SideBarContainer>
            </div>
		);
	}  
}

 export default SideBar;

