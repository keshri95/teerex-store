import { BsCurrencyRupee } from "react-icons/bs";
import { useGlobalContext } from "./context/context";

// eslint-disable-next-line react/prop-types
const Product = ({elem}) => {

  const {product, setProduct} = useGlobalContext()

  // eslint-disable-next-line react/prop-types
  const { imageURL,name,price  } = elem

  return (
    <div className="product__card" >
      <h3 className="product__name">{name}</h3>
      <img className="product__img" src={imageURL} alt={name}  />
      <div className="card__footer">
        <h3 className="product__price"> <BsCurrencyRupee />{price}</h3>
  
          <button
           className="product__btn"
            
          >
            Add to Cart
          </button>
        
           {/* <div className="product__condition" >
            <button
            className="adjacent__btns"
             
              
            >
              -
            </button>
            <span
             className="products__counter"
          
            >
              4
            </span>
            <button
             className="adjacent__btns"
              style={{
                width: "35px",
                height: "30px",
                backgroundColor: "black",
                color: "white",
                cursor: "pointer",
              }}
            >
              +
            </button>
          </div>  */}
      </div>
    </div>
  );
}

export default Product;
