import React from 'react';
import Modal from '../../subComponents/Modal';
import styled from 'styled-components';

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
  color: grey;
  bottom: 10%;
  text-decoration: underline;
`;

const Sumbit = Next.extend`

`;

const InputContainer = styled.div`
  width: 540px;
  height: 238px;
  text-align: left;
  padding: 40px 0 0 40px;
`;

const Input = styled.input`
  margin-bottom: 15px;
  margin-right: 10px;
`;

const ThankYou = styled.h3`
  margin-top; 130px;
`;

export default class SurveyModal extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      slideNext: 0
    }
    this.SlideNext = this.SlideNext.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  SlideNext() {
    let nextPos = this.state.slideNext - 100;

    this.setState({
      slideNext: nextPos
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    this.setState({
      slideNext: 0
    });
    console.log('Design Review:', data.get('designReview'));
    console.log('Function Review:', data.get('functionReview'));
    console.log('Navigate Review:', data.get('navigateReview'));
    console.log('Experience Review:', data.get('experienceReview'));
    document.getElementById('survey-form').reset();
  }

  render() {
    return (
        <div> 
            <Modal name ="Take Survey!">
                <Bg>
                    <Mainbox>
                        <ImageBox style={{left: this.state.slideNext + '%'}}>
                            <form id="survey-form" onSubmit={this.handleSubmit}>

                                <ContentBox>
                                    <h3>Do you like the site's design?</h3>
                                    <InputContainer>
                                        <Input type="radio" value="great" name="designReview" />Great!<br/>
                                        <Input type="radio" value="decent" name="designReview" />decent<br/>
                                        <Input type="radio" value="mediocre" name="designReview" />mediocre<br/>
                                        <Input type="radio" value="not so good" name="designReview" />not so good<br/>
                                        <Input type="radio" value="terrible" name="designReview" />terrible
                                    </InputContainer>
                                    <Next onClick={this.SlideNext} type="button">Next</Next>
                                </ContentBox>

                                <ContentBox>
                                    <h3>Do you like the functionality?</h3>
                                    <InputContainer>
                                        <Input type="radio" value="great" name="functionReview" />Great!<br/>
                                        <Input type="radio" value="decent" name="functionReview" />decent<br/>
                                        <Input type="radio" value="mediocre" name="functionReview" />mediocre<br/>
                                        <Input type="radio" value="not so good" name="functionReview" />not so good<br/>
                                        <Input type="radio" value="terrible" name="functionReview" />terrible
                                    </InputContainer>
                                    <Next onClick={this.SlideNext} type="button">Next</Next>
                                </ContentBox>

                                <ContentBox>
                                    <h3>How easy or hard was it to navigate?</h3>
                                    <InputContainer>
                                        <Input type="radio" value="great" name="navigateReview" />Great!<br/>
                                        <Input type="radio" value="decent" name="navigateReview" />decent<br/>
                                        <Input type="radio" value="mediocre" name="navigateReview" />mediocre<br/>
                                        <Input type="radio" value="not so good" name="navigateReview" />not so good<br/>
                                        <Input type="radio" value="terrible" name="navigateReview" />terrible                       
                                    </InputContainer>
                                    <Next onClick={this.SlideNext} type="button">Next</Next>
                                </ContentBox>

                                <ContentBox>
                                    <h3>Did you enjoy your experience?</h3>
                                    <InputContainer>
                                        <Input type="radio" value="great" name="experienceReview" />Great!<br/>
                                        <Input type="radio" value="decent" name="experienceReview" />decent<br/>
                                        <Input type="radio" value="mediocre" name="experienceReview" />mediocre<br/>
                                        <Input type="radio" value="not so good" name="experienceReview" />not so good<br/>
                                        <Input type="radio" value="terrible" name="experienceReview" />terrible
                                    </InputContainer>
                                    <Sumbit>Submit</Sumbit>
                                </ContentBox>

                                <ContentBox>
                                    <ThankYou>Thanks for taking the survey</ThankYou>
                                </ContentBox>

                            </form>
                        </ImageBox>
                    </Mainbox>
                </Bg>
            </Modal>
        </div>
    );
  }
}