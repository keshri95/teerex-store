/* eslint-disable react/prop-types */
import { BsCurrencyRupee } from "react-icons/bs";
import { useGlobalContext } from "./context/context";
import { toast } from "react-hot-toast";

const Product = ({ elem }) => {
  const { product, setProduct } = useGlobalContext();

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
    <article className="product__card">
      <h3 className="product__name">{name}</h3>
      <img className="product__img" src={imageURL} alt={name} />
      <div className="card__footer">
        <h3 className="product__price">
          <BsCurrencyRupee />
          {price}
        </h3>
        {ExistCart.length < 1 ? (
          <button
            className="product__btn"
            onClick={addProduct}
            disabled={elem.quantity === 0}
          >
            Add to Cart
          </button>
        ) : (
          <div className="product__condition">
            <button
              className="adjacent__btns_remove"
              onClick={() => {
                removeProduct();
              }}
            >
              -
            </button>
            <data value={ExistCart[0].quantity} className="products__counter">{ExistCart[0].quantity}</data>
            <button
              className="adjacent__btns_add"
              onClick={handleIncrementAndAlert}
            >
              +
            </button>
          </div>
        )}
      </div>
    </article>
  );
};

export default Product;
