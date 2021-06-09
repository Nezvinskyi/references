import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

const ModalWindow = ({ title, isOpen, onClose, children }) =>
  createPortal(
    <Modal show={isOpen} onHide={onClose} animation={false}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>,
    modalRoot,
  );

export default ModalWindow;
