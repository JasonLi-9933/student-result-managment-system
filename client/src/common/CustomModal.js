import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CustomModal({title, body, show, setShow}) {
  return (
    <>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal;