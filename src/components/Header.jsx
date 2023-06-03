import {AiOutlineShoppingCart} from "react-icons/ai"
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context/context";

const Header = () => {
  
    const {product} = useGlobalContext()

  return (
    <header>
      <div className="container">
        <div className="logo__bar">
          <div className="header__bar">
            <Link to="/">Teerex Store</Link>
          </div>
          <ul className="header__options">
            <li className="list__product active">
              <a className="product__listing" href="#">Products</a>
            </li>
            <li>
              <Link to="/cart" className="cart__menu">
                <span>{product.length}</span>
                <AiOutlineShoppingCart size={30} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
