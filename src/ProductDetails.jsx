import React, { useState } from "react";

import { Link, useParams } from "react-router-dom";

import Details from "./Details";
import ModalCart from "./ModalCart";

function ProductDetails({ setCartItems, cartItems }) {
  const { id } = useParams();
  const [modalShow, setModalShow] = useState(false);
  function handleClick() {
    setCartItems([...cartItems, id]);
    setModalShow(true);
    // console.log(cartItems);
  }
  return (
    <>
      <section className="my-5">
        <div className="text-center">
          <h1>{Details[id].name}</h1>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
              <figure>
                <img
                  src={Details[id].image}
                  alt="Iphone 7"
                  className="imgStyle"
                />
              </figure>
            </div>

            <div className="col-lg-6 col-md-6 col-12 col-xxl-6 d-flex justify-content-center align-items-center">
              <div>
                <h1>{Details[id].name}</h1>
                {Details[id].description}
                <div className="main-btn my-5">
                  <Link to="/">
                    <button type="button" className="btn  btn-outline-primary">
                      Continue
                    </button>
                  </Link>

                  <button
                    type="button"
                    className="btn btn-outline-warning"
                    onClick={() => handleClick()}
                  >
                    Add To Cart
                  </button>

                  <ModalCart
                    show={modalShow}
                    id={id}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ProductDetails;
