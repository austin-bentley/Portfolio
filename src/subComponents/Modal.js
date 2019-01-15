import React from 'react';
import styled from 'styled-components';

const BackDrop = styled.div `
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgba(0,0,0,0.64);
  padding: 50px;
`;

const SurveyModalButton = styled.button `
      border-radius: 5px;
      height: 40px;
      width: 250px;
      font-size: 20px;
      margin-top: 40vh;
      border: 2px solid #597fff;
      color: #597fff;
      transition: all 0.25s ease-out;

      :hover {
            background-color: #597fff; 
            color: white;
      }
`;

const ModalStyle = styled.div `
  background-color: #fff;
  border-radius: 5px;
  max-width: 600px;
  height: 400px;
  margin: 0 auto;
  padding: 30px;
  margin-top: 20vh;
`;

const CloseModalButton = styled.div `
  position: absolute;
  right: 17%;
  z-index: 9999;
`;

const CenterButton = styled.div `
  text-align: center;
`;

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      show: false
    }

    this.OpenModal = this.OpenModal.bind(this);
    this.CloseModal = this.CloseModal.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  handleOutsideClick(e) {
      if (e.target.classList[0] === 'sc-bbmXgH') {
        this.CloseModal();
      }
  }

  OpenModal() {
    this.setState({
      show: true
    });
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  CloseModal() {
    this.setState({
      show: false
    });
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  render() {
    return (
      <div>
        <CenterButton>
          <SurveyModalButton onClick={this.OpenModal}>{this.props.name}</SurveyModalButton>
        </CenterButton>
        {
          this.state.show === true &&
          <BackDrop>
            <ModalStyle ref={node => this.node = node}>
              <CloseModalButton onClick={this.CloseModal}><i className="fa fa-times fa-lg"></i></CloseModalButton>
              {this.props.children}
            </ModalStyle>
          </BackDrop>
        }
      </div>
    );
  }
}