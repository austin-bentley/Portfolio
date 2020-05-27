import React from 'react';
import styled from 'styled-components';
import { size } from '../DeviceSizing';

const SideBarContainer = styled.div`
    height: calc(100vh - 42px);
    width: ${props => props.isActive ? '80%' : '0%'};
    background-color: #333333;
    transition: all 1s ease-in-out;
    opacity: .97;
    position: fixed;
    bottom: 0;
    z-index: 9999;

    @media ${size.tablet} {
        width: 275px;
        z-index: 0;
        background-color: white;
    }
    @media ${size.desktop} {
        width: 350px;
        z-index: 0;
        background-color: white;
    }
`;

const ComponentName = styled.p`
    font-size: 18px;
    margin: 0px;
    font-weight: 300;
    padding: 4px;
    color: white;
    cursor: pointer;

    &:hover {
        color: #ba2525
    }
    
    &:active {
        color: #ba2525
    }

    @media ${size.tablet} {
        color: black;
    }
`;

const Group = styled.h2`
    padding: 10px 0 10px 0;
    font-size: 18px;
    color: #989696;
    margin: 0px;
    font-weight: 400;
`;

const ComponentContainer = styled.div`
    padding-left: 15px;
`;

const HomeContainer = styled.div`
    padding: 10px 0 0 10px;
    position: absolute;
    left: ${props => props.isActive ? '0' : '-300px'};
    transition: all 1s ease-in-out;

    @media ${size.tablet} {
       left: 0;
    }
    @media ${size.desktop} {
        padding-left: 100px;
    }
`;

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeComponent: 'Home'
    }
    this.clickedComponent = this.clickedComponent.bind(this);
  };

  clickedComponent(e) {
    if (e.target.tagName === 'P') {
      this.props.getActiveComponent(e.target.innerText);
    }
  }

  render() {
    return (
      <div ref={node => { this.refs = node }} onClick={this.clickedComponent}>
        <SideBarContainer isActive={this.props.isActive}>
          <HomeContainer isActive={this.props.isActive}>
            <ComponentName>Home</ComponentName>
            <Group>Case Studies</Group>
            <ComponentContainer>
              <ComponentName>National Nuclear Museum</ComponentName>
              <ComponentName>RheinTech Laboratories</ComponentName>
              <ComponentName>Rural Sourcing Inc</ComponentName>
            </ComponentContainer>
            <Group>Demo's</Group>
            <ComponentContainer>
              <ComponentName>Icon Drag</ComponentName>
              <ComponentName>Slider</ComponentName>
              {/* <ComponentName>Survey Modal</ComponentName> */}
              <ComponentName>Bouncing Blocks</ComponentName>
            </ComponentContainer>
          </HomeContainer>
        </SideBarContainer>
      </div>
    );
  }
}

export default SideBar

