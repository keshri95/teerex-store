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
      toast.success("Product has been added !!")
    } else if (elem.quantity === 0) {
      // alert("Out of Stock!!!");
      toast.error("Out of Stock!!!")
    }

  };

  const ExistCart = product?.filter((prod) => {
    return prod.id === elem.id;
  });

  /*
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
  */

  const deleteProduct = (id) => {
    let updatedProd = product?.filter((item) => {
      return item.id !== id
    })
    setProduct(updatedProd)
    toast.error("Product has been deleted!!")
  }

  /*
  const handleIncrementAndAlert = () => {
    if (ExistCart[0].quantity >= elem.quantity) {
      // alert("You Reached Maximum Limit");
      toast.error("You Reached Maximum Limit")
    } else {
      toast.success("Product has been added !!")
      addCounter(elem.id, +1);
    }
  };
  */

  return (
    <div className="product__card">
      <h3 className="product__name">{name}</h3>
      <img className="product__img" src={imageURL} alt={name} />
      <div className="card__footer">
        <h3 className="product__price">
          <BsCurrencyRupee />
          {price}
        </h3>
        {ExistCart.length < 1 ? (
          <button className="product__btn" onClick={addProduct}>
            Add to Cart
          </button>
        ) : (

          <button className="product__btn_del" onClick={() =>deleteProduct(id)}>
          Remove To Cart
        </button>

          /*
          <div className="product__condition">
            <button
              className="adjacent__btns_remove"
              onClick={() => {
                addCounter(elem.id, -1)
                toast.error("Product has been removed")
              }}
              disabled={ExistCart[0].quantity === 1}
            >
              -
            </button>
            <span className="products__counter">{ExistCart[0].quantity}</span>
            <button
              className="adjacent__btns_add"
              onClick={handleIncrementAndAlert}
            >
              +
            </button>
          </div>
          */
        )}
      </div>
    </div>
  );
};

export default Product;
