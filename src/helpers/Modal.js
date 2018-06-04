import React from 'react';
import styled from 'styled-components';
import Button from '../helpers/Button';

const BackDrop = styled.div `
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgba(0,0,0,0.64);
  padding: 50px;
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
    // this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  // componentWillUnmount() {
  //   document.removeEventListener('click', this.handleOutsideClick, false);
  // }

  // handleOutsideClick(e) {
  //   if (this.node) {
  //     if (!e.target.classList.contains(this.node.state.generatedClassName)) {
  //       this.CloseModal();
  //     }
  //   }
  // }

  OpenModal() {
    this.setState({
      show: true
    });
    // document.addEventListener('click', this.handleOutsideClick, false);
  }

  CloseModal() {
    this.setState({
      show: false
    });
    // document.removeEventListener('click', this.handleOutsideClick, false);
  }

  render() {
    return (
      <div>
        <CenterButton>
          <Button onClick={this.OpenModal} name={this.props.name}/>
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