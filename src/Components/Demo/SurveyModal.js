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
  width: 325%;
  position: relative;
  left: 0; 
  transition: all .7s ease-in-out;
`;

const ContentBox = styled.div `
  width: 20%;
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
  height: 238px;
  text-align: left;
`;

const Input = styled.input`
  margin-bottom: 15px;
  margin-right: 10px;
`;

const ThankYou = styled.h3`
  margin-top; 130px;
`;
const Subtitle = styled.h3`
    font-size: 24px;
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

    // componentWillMount() {
    //     document.addEventListener('mousedown', this.handleClick , false)
    // }

    // componentWillUnmount() {
    //     document.removeEventListener('mousedown', this.handleClick , false)
    // }

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
                    <Mainbox>
                        <ImageBox style={{left: this.state.slideNext + '%'}}>
                            <form id="survey-form" onSubmit={this.handleSubmit}>

                                <ContentBox>
                                    <Subtitle>Do you like the site's design?</Subtitle>
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
                                    <Subtitle>Do you like the functionality?</Subtitle>
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
                                    <Subtitle>How easy or hard was it to navigate?</Subtitle>
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
                                    <Subtitle>Did you enjoy your experience?</Subtitle>
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
                </Modal>
            </div>
        );
    }
}