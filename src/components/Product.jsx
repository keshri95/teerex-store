import { BsCurrencyRupee } from "react-icons/bs";
import { useGlobalContext } from "./context/context";

// eslint-disable-next-line react/prop-types
const Product = ({ elem }) => {
  const { product, setProduct } = useGlobalContext();

  // eslint-disable-next-line react/prop-types
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
    } else if (elem.quantity === 0) {
      alert("Out of Stock!!!");
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
      alert("You Reached Maximum Limit");
    } else {
      addCounter(elem.id, +1);
    }
  };

  return (
    <div className="product__card">
      <h3 className="product__name">{name}</h3>
      <img className="product__img" src={imageURL} alt={name} />
      <div className="card__footer">
        <h3 className="product__price">
          {" "}
          <BsCurrencyRupee />
          {price}
        </h3>
        {ExistCart.length < 1 ? (
          <button className="product__btn" onClick={addProduct}>
            Add to Cart
          </button>
        ) : (
          <div className="product__condition">
            <button
              className="adjacent__btns"
              onClick={() => addCounter(elem.id, -1)}
              disabled={ExistCart[0].quantity === 1}
            >
              -
            </button>
            <span className="products__counter">{ExistCart[0].quantity}</span>
            <button
              className="adjacent__btns"
              onClick={handleIncrementAndAlert}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
