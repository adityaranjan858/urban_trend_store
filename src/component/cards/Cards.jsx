import React from 'react';
import Button from '../button/Button';
import style from "./Cards.module.css"
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity } from '../../store/cartSlice';

function Cards({ productsList, buttonName, handleCard, show }) {

  const dispatch = useDispatch()

  const qtyIncrement = (id)=>{
      dispatch(incrementQuantity(id))
  }

  const qtyDecrement = (id)=>{
    dispatch(decrementQuantity(id))
  }

  

  return (
    show ?
      // for products list in the main page
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {productsList.length > 0 && productsList.map(item => (
          <div className="col" key={item.id}>
            <div className="card h-100">
              <img src={item.image} className={`${style.product_image}`} alt="image broken" />
              <div className="card-body">
                <h5 className="card-text fw-normal">{item.title}</h5>
                <p className="card-title fs-3 fw-medium mb-0">&#36;{item.price}</p>
              </div>
              <div className='mb-3 mx-3'>
                <Button className="w-100" onClick={() => handleCard(item)} >{buttonName}</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      :
      // for cart pages
      <div className="row row-cols-1  g-0">
        {productsList.length > 0 && productsList.map(item => (
          <React.Fragment key={item.id}>
          <div className="col" >
            <div className="card rounded-0 border-0 h-100">
              <div className="row g-0 gy-3">
                <div className="col-md-4">
                  <img src={item.image} className={`${style.cart_image}`} alt="image broken" />
                </div>
                <div className="col-md-4 align-self-center">
                  <div className={` card-body ${style.cardBody}`}>
                    <div>
                      <div className=''>
                      <h5 className="card-text fw-normal">{item.title}</h5>
                      </div>
                      <div className='d-flex flex-column'>
                        <small className='text-success fw-semibold'>In stock</small>
                        <small className='text-secondary'>Eligible for FREE Shipping</small>
                      </div>
                    </div>
                  </div>
                      <div className="d-flex ">
                        <div className="quantity p-3 pt-0">
                          <Button className="me-2" onClick={() => qtyDecrement(item.id)}><i className="fa-solid fa-minus"></i></Button>
                          <input type="text" size="1" placeholder={item.rating.count} readOnly className='bg-light text-dark text-center'/>
                          <Button className="ms-2" onClick={()=>qtyIncrement(item.id)}><i className="fa-solid fa-plus"></i></Button>
                        </div>
                      </div>
                </div>
                <div className='col-md-4 d-flex p-3 justify-content-between justify-content-md-around align-self-center'>
                  <div>
                    <p className="card-title fs-3 fw-medium mb-0">&#36;{item.price}</p>
                  </div>
                  <div>
                    <Button className="text-white" onClick={() => handleCard(item)}> {buttonName} </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          </React.Fragment>
        ))}
      </div>
  );
}

export default Cards;