import { useDispatch, useSelector } from "react-redux";
import Cards from "../component/cards/Cards";
import { remove } from "../store/cartSlice";
import AlertMessage from "../component/alert_message/AlertMessage";
import { alertMessage } from "../store/generalSlice";

const Cart = () => {
  const cartdata = useSelector(state => state.cart)
  const generalData = useSelector(state => state.general)

  const dispatch = useDispatch()

  const handleCart = (item) => {
    dispatch(remove(item.id))
    dispatch(alertMessage({
      content: `Deleted`,
      type: 'danger'
    }))
  }

  return (
    <>
      <AlertMessage alert={generalData.message} />
      <Cards productsList={cartdata} buttonName="Remove" handleCard={handleCart} />
    </>
  )
}

export default Cart;