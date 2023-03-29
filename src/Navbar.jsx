import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const Navbar = () => {
  return (
    <div>
      <ul className="list_type">
        <li>
          <Link className="text-link" to={"/"}>
            Apana MObile <br /> get more from your phpne
          </Link>
        </li>

        <li>
          <Link className="text-link " to={"/CartDetails"}>
            <AddShoppingCartIcon />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
