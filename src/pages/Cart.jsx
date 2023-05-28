import { toast } from "react-hot-toast"
import { BsCurrencyRupee } from "react-icons/bs";
import CartProduct from "../components/CartProduct"
import { useGlobalContext } from "../components/context/context"

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
    <div className="home__container">
      <h1>Shopping Cart</h1>
      <div className="spacing__cart_products">
        {
          product?.map((elem, id) =>
            <CartProduct 
              key={id}
              elem={elem}
              removeProduct={removeProduct}
            />        
        )}
        
      </div>
      <div className="cart__amount">
        <h3 className="total__amount">Total Amount : <BsCurrencyRupee /> {totalReflectedAmt} </h3>
      </div>
    </div>
  )
}

export default Cart