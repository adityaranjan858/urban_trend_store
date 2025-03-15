import Button from "../button/Button";
import style from "./Cards.module.css";
import StarRating from "../star rating/StarRating";
import { useNavigate } from "react-router";

function ProductsCard({ productsList, buttonName, handleCard }) {
  const conversionRate = 87.22;
  const navigate = useNavigate()

  return (
    <div className="container">
      <h5 className="mt-3">Products</h5>
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {productsList.length > 0 ?
          productsList.map((item) => (
            <div className="col" key={item.id}>
              <div className={`card h-100 ${style.productCard}`}>
                <div className={style.imageContainer}>
                  <img
                    src={item.image}
                    className={style.product_image}
                    alt={item.title}
                  />
                </div>
                <div className={`card-body ${style.productCardBody}`}>
                  <h5 className={`card-text ${style.productTitle}`}>
                    {item.title}
                  </h5>
                  <p className={style.productRating}>
                    {" "}
                    <StarRating rating={item.rating.rate} /> {item.rating.rate}
                  </p>
                  <small className={style.productCount}>
                    {item.rating.count}+ bought in past month{" "}
                  </small>
                  <div className={style.productPrice}>
                    <div className="d-flex ">
                      <div>
                      <sup>&#8377;</sup>  
                      </div>
                      <div className=" lh-1">
                        {Math.round(item.price * conversionRate)}<small>.00</small></div>
                     
                    </div> </div>
                  <Button
                    className={`w-100 ${style.addToCartBtn}`}
                    onClick={() => handleCard(item)}
                  >
                    {buttonName}
                  </Button>
                </div>
              </div>
            </div>
          )) 
          : <div className="text-center w-100 ">
            <h1 className=" mt-5 text-danger">No Products Found</h1>
            <Button className="mt-5" onClick={() => {navigate("/"); window.location.reload();} }>Go Home</Button>
          </div> 
          }
      </div>
    </div>
  )
}

export default ProductsCard;
