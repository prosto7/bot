import React from "react";
import { Button, Container, Modal } from "react-bootstrap";
import FormSignup from "./FormSignup";
import './form.css'

function SignUpModal(props) {

    return (
      <Modal
        {...props}
        size="xs"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          <h1>Modal heading</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body  className="show-grid">
    <FormSignup/>
        </Modal.Body >
 
        
         <div className="container-for-footer">
            <span className='form-input-login'>
            Already have an account? Login <a href='#'>here</a>
            </span>
            <Button className="form-input-btn"type='submit'>Sign up</Button>
            <Button className="form-input-btn" onClick={props.onHide}>Close</Button>
          </div>
    
      </Modal>
      
    );}
  
  export default SignUpModal;