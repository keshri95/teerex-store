import CartProduct from "../components/CartProduct"

function Cart() {


  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>

        <CartProduct />        
        
      </div>
      <div>
        <h3 className="total__amount">Total Amount : 29 </h3>
      </div>
    </div>
  )
}

export default Cart