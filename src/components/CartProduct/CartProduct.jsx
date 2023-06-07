/* eslint-disable react/prop-types */
import "./index.css"
import { BsCurrencyRupee } from "react-icons/bs";
import { useGlobalContext } from "../context/context";
import { toast } from "react-hot-toast";

const CartProduct = ({ elem, removeProduct }) => {
  const { product, setProduct } = useGlobalContext();
  const { id, name, price, imageURL, availableqty, quantity } = elem;

  const selectHandler = (e) => {
    const payload = e.target.value;

    let updateQty = product?.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: Number(payload),
        };
      } else {
        return item;
      }
    });

    setProduct(updateQty);

    toast.success("Product has been added !!");
  };

  return (
    <div className="cart-container">
      <div className="carts">
        <img className="cart-img" src={imageURL} alt={name} />
      </div>
      <div className="cart-prodcts-details">
        <h3 className="prodct-name">{name}</h3>
        <span value={price} className="prodcts-price">
          <BsCurrencyRupee size={20} />
          {price}
        </span>
      </div>
      <div className="cart-options">
        <select onChange={selectHandler} defaultValue={quantity}>
          {new Array(availableqty).fill(0).map((qty, i) => (
            <option value={i + 1} key={i}>
              Qty{i + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="cart-btns">
        <button className="cart-btn" onClick={() => removeProduct(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
