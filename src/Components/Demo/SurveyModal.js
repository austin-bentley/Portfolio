import React from 'react';
import Modal from '../../helpers/Modal';
import styled, { keyframes } from 'styled-components';

// const SlideAnimation = keyframes`
//   0% {
//     left: 0;
//   }
//   25% {
//     left: -100%;
//   }
//   50% {
//     left: -200%;
//   }
//   75% {
//     left: -300%;
//   }
//   100% {
//     left: -400%;
//   }
// `;

// const Slide = keyframes`
//   from {
//     left: ${this.props.slidePos}%;
//   }
//   to {
//     left: ${this.props.slideNext}%;
//   }
// `;

const Bg = styled.div `

`;

const Mainbox = styled.div `
  width: 540px;
  height: 340px;
  position: absolute;
  overflow: hidden;
`;

const ImageBox = styled.div `
  width: 2700px;
  position: relative;
  left: 0; 
  transition: all .7s ease-in-out;

`;

const ContentBox = styled.div `
  width: 20%;
  height: 340px;
  float: left;
  text-align: center;
  position: relative;
`;

const Next = styled.button `
  border: none;
  position: absolute;
  color: grey;
  bottom: 10%;
`;

export default class SurveyModal extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      slideNext: 0
    }
    this.SlideNext = this.SlideNext.bind(this);
  }

  SlideNext() {
    let nextPos = this.state.slideNext - 100;
    this.setState({
      slideNext: nextPos
    });
  }

  render() {
    return (
        <div> 
          <Modal name ="Take Survey!">
            <Bg>
              <Mainbox>
                <ImageBox style={{left: this.state.slideNext + '%'}}>
                  <ContentBox>
                    <h3>What type of code do you like?</h3>
                    <Next onClick={this.SlideNext} >Next</Next>
                  </ContentBox>
                  <ContentBox>
                    <h3>Are you high right now?</h3>
                    <Next onClick={this.SlideNext}>Next</Next>
                  </ContentBox>
                  <ContentBox>
                    <h3>Do you ever get nervous?</h3>
                    <Next onClick={this.SlideNext}>Next</Next>
                  </ContentBox>
                  <ContentBox>
                    <h3>Whats the name of that song?</h3>
                    <Next onClick={this.SlideNext}>Next</Next>
                  </ContentBox>
                  <ContentBox>
                    <h3 style={{marginTop: 130+'px'}}>Thanks for taking the survey</h3>
                  </ContentBox>
                </ImageBox>
              </Mainbox>
            </Bg>
          </Modal>
        </div>
    );
  }
}