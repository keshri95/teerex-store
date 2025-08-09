import "./index.css";
import { BsCurrencyRupee } from "react-icons/bs";
import { useGlobalContext } from "../context/context";
import { toast } from "react-hot-toast";
import React from "react";
import PropTypes from "prop-types";



const Product = ({ elem }) => {
  const { product, setProduct } = useGlobalContext();

  // console.log(typeof elem);

  const { imageURL, name, price, id } = elem;

  const addProduct = () => {
    let addedProducts = {
      id,
      name,
      price,
      imageURL,
      quantity: 1,
      availableqty: elem.quantity,
    };

    const Exist = product?.filter((prod) => {
      return prod.id === id;
    });

    if (Exist.length < 1 && elem.quantity > 0) {
      setProduct([...product, addedProducts]);
      toast.success("Product has been added !!");
    } else if (elem.quantity === 0) {
      toast.error("Out of Stock!!!");
    }
  };

  const ExistCart = product?.filter((prod) => {
    return prod.id === elem.id;
  });

  const addCounter = (id, amount) => {
    let updatedQty = product?.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + amount,
        };
      } else {
        return item;
      }
    });
    setProduct(updatedQty);
  };

  const handleIncrementAndAlert = () => {
    if (ExistCart[0].quantity >= elem.quantity) {
      toast.error("You Reached Maximum Limit");
    } else {
      toast.success("Product has been added !!");
      addCounter(elem.id, +1);
    }
  };

  const removeProduct = () => {
    const updatedQty = product.map((item) => {
      if (item.id === elem.id) {
        const updatedQuantity = item.quantity - 1;
        return {
          ...item,
          quantity: updatedQuantity >= 0 ? updatedQuantity : 0,
        };
      }
      return item;
    });

    const filteredProducts = updatedQty.filter((item) => item.quantity > 0);
    setProduct(filteredProducts);
    toast.error("Product has been removed");
  };

  return (
    <React.Fragment>
      <article className="product-card">
        <h3 className="product-name">{name}</h3>
        <div className="product-image">
          <img className="product-img" src={imageURL} alt={name} />
        </div>
        <div className="card-footer">
          <h3 className="product-price">
            <BsCurrencyRupee />
            {price}
          </h3>
          {ExistCart.length < 1 ? (
            <button
              className="product-btn"
              onClick={addProduct}
              disabled={elem.quantity === 0}
            >
              Add to Cart
            </button>
          ) : (
            <div className="product-condition">
              <button
                className="adjacent-btns-remove"
                onClick={() => {
                  removeProduct();
                }}
              >
                -
              </button>
              <data value={ExistCart[0].quantity} className="products-counter">
                {ExistCart[0].quantity}
              </data>
              <button
                className="adjacent-btns-add"
                onClick={handleIncrementAndAlert}
              >
                +
              </button>
            </div>
          )}
        </div>
      </article>
    </React.Fragment>
  );
};

Product.propTypes ={
  elem: PropTypes.object
}

export default Product;
