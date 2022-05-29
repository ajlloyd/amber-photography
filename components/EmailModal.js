import React from 'react'
import { Modal, Button, CloseButton } from 'react-bootstrap'

const EmailModal = (props, body) => {

    
    var styles1 = {
        color: 'black'
    };

    
    return (
        <div>
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header>
                    
                    <Modal.Title style={styles1} id="contained-modal-title-vcenter">
                        Email Sent
                    </Modal.Title>
                    <CloseButton  onClick={props.onHide}/>
                </Modal.Header>
                <Modal.Body>
                    <h2 style={styles1}>Success 🥳 !</h2>
                    <h3 style={styles1}>Thank you for submitting your request - I will respond as soon as possible.</h3>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>


    )
}

export default EmailModal
