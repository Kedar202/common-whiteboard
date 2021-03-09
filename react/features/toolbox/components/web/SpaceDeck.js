import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const SpaceDeck = (props) => {
    return (<Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton className="px-0 py-1 border-0 d-flex justify-content-center align-items-center">
            <span className="mr-2 p">You're in presenter mode. For multiple participants collaboration click here</span>
            <button type="button" className="btn btn-primary">Allow collaboration</button>
        </Modal.Header>
        <Modal.Body>
            <iframe height="100%" width="100%"
                src="https://app.weshare.net/space/" width="100%">
            </iframe>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>)
}

export default SpaceDeck