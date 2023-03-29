import "./styles.css";
import Layout from "./Layout";
import ProductDetails from "./ProductDetails";
import CartDetails from "./CartDetails";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
export default function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route
            path="ProductDetails/:id"
            element={
              <ProductDetails
                setCartItems={setCartItems}
                cartItems={cartItems}
              />
            }
          />
          <Route
            path="/CartDetails"
            element={
              <CartDetails setCartItems={setCartItems} cartItems={cartItems} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
