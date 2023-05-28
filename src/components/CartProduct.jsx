import { BsCurrencyRupee } from "react-icons/bs"
import { useGlobalContext } from "./context/context";

const CartProduct = ({ elem, removeProduct }) => {

  const {product, setProduct} = useGlobalContext()
  const { id, name, price,imageURL,availableqty,quantity } = elem

  

  const selectHandler= (e) =>{
    const payload = e.target.value

    let updateQty = product?.map((item) =>{

      if(item.id === id){
        return {
          ...item,
          quantity: Number(payload)
        }
      } else{
        return item
      }
      
      })

      setProduct(updateQty)
  }



  return (
    <div className="cart__container">
      <div>
        <img
           className="cart__img"
        src={imageURL} alt={name} />
      </div>
      <div
       className="cart__prodcts_details"
     
      >
        <h3 className="prodct__name">{name}</h3>
        <h4 className="prodcts__price"> <BsCurrencyRupee size={20} />{price}</h4>
      </div>
      <div
      className="cart__options"
      >
        <select onChange={selectHandler} defaultValue={quantity}>

          {
            new Array(availableqty).fill(0).map((qty, i) =>(
              <option value={i+1} key={i}>
              {i+1}
            </option>
            ))
          }
           
            
           
        </select>

      </div>
      <div
       className="cart__btns"
    
      >
        <button
         className="cart__btn"
          onClick={() => removeProduct(id)}
        >
          Delete
        </button>
      </div>
    </div>
    
  );
}

export default CartProduct;
