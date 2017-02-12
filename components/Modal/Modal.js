import React, { Component } from 'react'
import bootstrap from 'react-bootstrap'
import { Modal, Button } from 'react-bootstrap';


export default class sideNav extends Component{
    render(){
const modalInstance = (
  <div className="static-modal">
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>לא חבל?</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        בעזרת כניסה דרך הפייסבוק, תוכן רב ושיתופים יהיו זמינים.
      </Modal.Body>

      <Modal.Footer style={{margin: 0}}>
        <Button>המשך לגלוש</Button>
        <Button bsStyle="primary">עבור לפייסבוק</Button>
      </Modal.Footer>

    </Modal.Dialog>
  </div>
);
  return(modalInstance);
    }
}

