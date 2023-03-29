import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Details from "./Details";
import { Link } from "react-router-dom";

function ModalCart(props) {
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Item Added to Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="d-flex justify-content-center">
            {Details[props.id].name}
          </h4>
          <figure>
            <img
              src={Details[props.id].image}
              alt="Iphone 7"
              className="modal-img "
            />
          </figure>
          <h4 className="d-flex justify-content-center">
            Price:{Details[props.id].price}
          </h4>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/CartDetails">
            <Button>Go to Cart</Button>
          </Link>
          <Link to="/">
            <Button>Continue</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCart;
