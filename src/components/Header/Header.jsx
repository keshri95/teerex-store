import "./index.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import React from "react";

const Header = () => {
  const { product } = useGlobalContext();

  return (
    <React.Fragment>
      <header>
        <div className="container">
          <div className="logo-bar">
            <div className="header-bar">
              <Link to="/">
                <h4>Teerex Store</h4>
              </Link>
            </div>
            <ul className="header-options">
              <li className="list-product active">
                <a className="product-listing" href="#">
                  Products
                </a>
              </li>
              <li>
                <Link to="/cart" className="cart-menu">
                  <span>{product.length}</span>
                  <AiOutlineShoppingCart size={30} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
