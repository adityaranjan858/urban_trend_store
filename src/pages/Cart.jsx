import { useDispatch, useSelector } from "react-redux";
import Cards from "../component/cards/Cards";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const cartdata = useSelector(state=>state.cart)
  
  const dispatch = useDispatch()

  const handleCart = (item) =>{
    dispatch(remove(item.id))
  }

  return (
    <>
      <Cards productsList={cartdata} buttonName="Remove" handleCard={handleCart}/>
    </>
  )
}

export default Cart;