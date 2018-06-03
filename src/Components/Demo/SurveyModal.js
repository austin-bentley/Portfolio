import React from 'react';
import Modal from '../../helpers/Modal';


export default class SurveyModal extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      show: false
    }
  }

  render() {
    return (
        <div> 
          <Modal name ="Take Survey!">
            something
          </Modal>
        </div>
    );
  }
}