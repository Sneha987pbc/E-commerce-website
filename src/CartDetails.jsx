import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Details from "./Details";
import "./style.css";
import DeleteIcon from "@mui/icons-material/Delete";

function CartDetails({ setCartItems, cartItems }) {
  let total_price = 0;
  const [count, setCount] = useState(1); //used to render the page

  useEffect(() => {
    setCartItems([...new Set(cartItems)]);
  }, []);

  // to delete the items
  function del_items(ind) {
    Details[ind].quantity = 1;
    const updatedItems = cartItems.filter((e) => {
      return e !== ind;
    });
    setCartItems(updatedItems);
  }
  function quantity(ind, operator) {
    if (operator === "+") Details[ind].quantity = Details[ind].quantity + 1;
    else Details[ind].quantity = Details[ind].quantity - 1;

    setCount(count + 1);
  }

  if (cartItems.length === 0) return <h1>Your Cart is Empty</h1>;
  return (
    <>
      <h1>Your Cart</h1>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-12 col-xxl-2">
            <h3>Product</h3>
          </div>
          <div className="col-lg-2 col-md-2 col-12 col-xxl-2">
            <h3>Name of Product</h3>
          </div>
          <div className="col-lg-2 col-md-2 col-12 col-xxl-2">
            <h3>Price</h3>
          </div>
          <div className="col-lg-2 col-md-2 col-12 col-xxl-2">
            <h3>Quantity</h3>
          </div>
          <div className="col-lg-2 col-md-2 col-12 col-xxl-2">
            <h3>Remove</h3>
          </div>
          <div className="col-lg-2 col-md-2 col-12 col-xxl-2">
            <h3>Total</h3>
          </div>
        </div>
        {cartItems.map((ele, key) => {
          return (
            <>
              <div className="cart_style row">
                <div className="col-lg-2 col-md-2 col-12 col-xxl-2">
                  <img
                    src={Details[ele].image}
                    alt="Iphone 7"
                    style={{ width: "6rem" }}
                    className="mx-auto my-2"
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-12 col-xxl-2">
                  <h4>{Details[ele].name}</h4>
                </div>
                <div className="col-lg-2 col-md-2 col-12 col-xxl-2">
                  <h4>{Details[ele].price}</h4>
                </div>
                <div className="col-lg-2 col-md-2 col-12 col-xxl-2">
                  {Details[ele].quantity > 1 && (
                    <button onClick={() => quantity(ele)} className="btn-cont">
                      -
                    </button>
                  )}
                  <span>{Details[ele].quantity}</span>
                  <button
                    onClick={() => quantity(ele, "+")}
                    className="btn-cont"
                  >
                    +
                  </button>
                </div>
                <div className="col-lg-2 col-md-2 col-12 col-xxl-2">
                  <h1 onClick={() => del_items(ele, "-")} className="">
                    <DeleteIcon />
                  </h1>
                </div>
                <div className="col-lg-2 col-md-2 col-12 col-xxl-2">
                  <h5>
                    Item Price:${Details[ele].price * Details[ele].quantity}
                  </h5>
                </div>
              </div>
              <div className="total-price">
                {
                  (total_price =
                    total_price + Details[ele].price * Details[ele].quantity)
                }
              </div>
            </>
          );
        })}
      </div>
      <div>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => setCartItems([])}
        >
          Clear Cart
        </button>
        <h2 className="my-2">SubTotal:{total_price}</h2>
      </div>
    </>
  );
}
export default CartDetails;
