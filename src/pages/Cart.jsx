import CartProduct from "../components/CartProduct"
import { useGlobalContext } from "../components/context/context"

const Cart = ()  =>{

  const { product, setProduct } = useGlobalContext()

  const removeProduct = (id) =>{
    let updatedProducts = product.filter((products) => {
      return products.id !== id
    })
    setProduct(updatedProducts)
  }



  const totalReflectedAmt = product?.reduce((acc, cum) => {

   return acc + (cum.price * cum.quantity)

  }, 0)
    

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        {
          product?.map((elem, id) =>
            <CartProduct 
              key={id}
              elem={elem}
              removeProduct={removeProduct}
            />        
        )}
        
      </div>
      <div>
        <h3 className="total__amount">Total Amount :{totalReflectedAmt} </h3>
      </div>
    </div>
  )
}

export default Cart