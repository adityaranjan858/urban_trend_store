import React from "react";
import Button from "../button/Button";
import style from "./Cards.module.css";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../../store/cartSlice";

function CartCards({ productsList, buttonName, handleCard }) {
  const dispatch = useDispatch();

  const qtyIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const qtyDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  return  (
    <div className="row row-cols-1 g-0">
      {productsList.length > 0 &&
        productsList.map((item) => (
          <React.Fragment key={item.id}>
            <div className={`col ${style.cartItem}`}>
              <div
                className={`card rounded-0 border-0 h-100 ${style.cartCard}`}
              >
                <div className="row g-0 gy-3">
                  <div className="col-md-3">
                    <div className={style.cartImageContainer}>
                      <img
                        src={item.image}
                        className={style.cart_image}
                        alt={item.title}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 align-self-center">
                    <div className={`card-body ${style.cartCardBody}`}>
                      <h5 className={style.cartItemTitle}>{item.title}</h5>
                      <div className={style.cartItemDetails}>
                        <small className={style.inStock}>In stock</small>
                        <small className={style.freeShipping}>
                          Eligible for FREE Shipping
                        </small>
                      </div>
                      <div className={style.quantityControl}>
                        <Button
                          className={style.quantityBtn}
                          onClick={() => qtyDecrement(item.id)}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </Button>
                        <input
                          type="text"
                          size="1"
                          value={item.rating.count}
                          readOnly
                          className={style.quantityInput}
                        />
                        <Button
                          className={style.quantityBtn}
                          onClick={() => qtyIncrement(item.id)}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className={`col-md-3 ${style.cartItemActions}`}>
                     <div className={style.cartItemPrice}>
                                        <div className="d-flex ">
                                          <div>
                                          <sup>&#8377;</sup>  
                                          </div>
                                          <div className=" lh-1">
                                            {Math.round(item.price * 87.22)}<small>.00</small></div>
                                         
                                        </div> </div>
                    <Button
                      className={ `px-4 ${style.removeBtn}`}
                      onClick={() => handleCard(item)}
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <hr className={style.cartDivider} />
          </React.Fragment>
        ))}
    </div>
  );
}

export default CartCards;
