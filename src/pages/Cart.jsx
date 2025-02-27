import { useDispatch, useSelector } from "react-redux";
import { remove, subTotalPrice } from "../store/cartSlice";
import AlertMessage from "../component/alert_message/AlertMessage";
import { alertMessage } from "../store/generalSlice";
import Button from "../component/button/Button";
import { useEffect } from "react";
import CartCards from "../component/cards/CartCards";

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
  useEffect(() => {
    dispatch(subTotalPrice())
  }, []);

  return (
    <>
      <AlertMessage alert={generalData.message} />

        <div className="row">
          <div className="col-9">
            <div className="bg-white p-3">
              <div className="container">
                <div className="row">
                  <div className="col-4"></div>
                  <div className="col-4"></div>
                  <div className="col-4"><h6 className=" d-none d-md-block text-end me-3 text-secondary mb-0">Price</h6></div>
                </div>
              </div>
              <hr className="mt-0" />
              <CartCards productsList={cartdata.cartItem} buttonName="Delete" handleCard={handleCart} />
              <p className="fw-medium text-end">Subtotal ({cartdata.cartItem.length} items): <b>{cartdata.subTotal}</b></p>
            </div>
          </div>
          <div className="col-3">
            <div className="bg-white p-3">
            <p className="fw-medium">Subtotal ({cartdata.cartItem.length} items): <b>{cartdata.subTotal}</b></p>
            <Button className="w-100" >Proceed to Buy</Button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Cart;