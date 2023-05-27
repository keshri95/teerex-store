import { BsCurrencyRupee } from "react-icons/bs"

function CartProduct() {
 

  return (
    <div className="cart__container">
      <div>
        <img
           className="cart__img"
        src="https://images.unsplash.com/photo-1682685797660-3d847763208e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="imageURL" />
      </div>
      <div
       className="cart__prodcts_details"
     
      >
        <h3 className="prodct__name">name</h3>
        <h4 className="prodcts__price"> <BsCurrencyRupee size={20} />20</h4>
      </div>
      <div
      className="cart__options"
       
      >
        <select>
         
            <option value="2">
              2
            </option>
        </select>
      </div>
      <div
       className="cart__btns"
    
      >
        <button
         className="cart__btn"
      
        >
          Delete
        </button>
      </div>
    </div>
    
  );
}

export default CartProduct;
