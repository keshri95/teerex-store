import "./index.css";
import { toast } from "react-hot-toast"
import { BsCurrencyRupee } from "react-icons/bs";
import CartProduct from "../../components/CartProduct/CartProduct"
import { useGlobalContext } from "../../components/context/context"

const Cart = ()  =>{

  const { product, setProduct } = useGlobalContext()

  const removeProduct = (id) =>{
    let updatedProducts = product?.filter((products) => {
      return products.id !== id
    })
    setProduct(updatedProducts)
    toast.error("Product has been deleted from cart!!")
  }



  const totalReflectedAmt = product?.reduce((acc, cum) => {

   return acc + (cum.price * cum.quantity)

  }, 0)
    

  return (
    <main className="home-container">
        <h1>Shopping Cart</h1>
      <section className="spacing-cart-products">
        {
          product?.map((elem, id) =>
            <CartProduct 
              key={id}
              elem={elem}
              removeProduct={removeProduct}
            />        
        )}
        
      </section>
      <div className="cart__amount">
        <h3 className="total-amount">Total Amount : <BsCurrencyRupee /> {totalReflectedAmt} </h3>
      </div>
    </main>
  )
}

export default Cart