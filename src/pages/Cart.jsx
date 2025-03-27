import { useDispatch, useSelector } from "react-redux";
import { clearCart, remove, subTotalPrice } from "../store/cartSlice";
import AlertMessage from "../component/alert_message/AlertMessage";
import { alertMessage } from "../store/generalSlice";
import Button from "../component/button/Button";
import { useEffect } from "react";
import CartCards from "../component/cards/CartCards";
import { Container } from "react-bootstrap";

const Cart = () => {
  const cartdata = useSelector((state) => state.cart);
  const generalData = useSelector((state) => state.general);

  const dispatch = useDispatch();

  const deleteItem = (item) => {
    dispatch(remove(item.id));
    dispatch(
      alertMessage({
        content: `Deleted`,
        type: "danger",
      })
    );
  };

  const handleCart = () => {
    dispatch(clearCart());
    dispatch(
      alertMessage({
        content: `Cart is empty`,
        type: "danger",
      })
    )
  };

  useEffect(() => {
    dispatch(subTotalPrice());
  }, []);

  return (
    <>
    
      <AlertMessage alert={generalData.message} />
      <Container fluid>
      <div className="row">
        <div className="col-12 col-sm-9 order-2 order-sm-1">
          <div className="bg-white p-3">
            <div className="container">
              <div className="row">
                <div className="col-4"></div>
                <div className="col-4"></div>
                <div className="col-4">
                  <h6 className=" d-none d-md-block text-end me-3 text-secondary mb-0">
                    Price
                  </h6>
                </div>
              </div>
            </div>
            <hr className="mt-0" />
            <CartCards
              productsList={cartdata.cartItem}
              buttonName="Delete"
              handleCard={deleteItem}
            />
            <p className="fw-medium text-end">
              Subtotal ({cartdata.cartItem.length} items):{" "}
              <b>{cartdata.subTotal}</b>
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-3 order-1 order-sm-2">
          <div className="bg-white p-3">
            <p className="fw-medium">
              Subtotal ({cartdata.cartItem.length} items):{" "}
              <b>{cartdata.subTotal}</b>
            </p>
            {cartdata.cartItem.length > 0 || cartdata.cartItem.length === 0 ? (
              <Button
                disabled={true}
                bgColor="secondary"
                textColor="black"
                className="w-100 border-secondary"
              >
                Proceed to Buy
              </Button>
            ) : (
              <Button disabled={false} className="w-100">
                Proceed to Buy
              </Button>
            )}
              <Button disabled={false} className="w-100 my-2" onClick={handleCart}>
                Clear Cart 
              </Button>
          </div>
        </div>
      </div>
      </Container>
    </>
  );
};

export default Cart;
