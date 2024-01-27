import { useDispatch, useSelector } from "react-redux";
import Cards from "../cards/Cards";
import { useEffect } from "react";
import { fetchProducts } from "../../store/productSlice";
import { add } from "../../store/cartSlice";
import Loader from "../loader/Loader";
import loaderGif from "../../media/ZNeT.gif"
import AlertMessage from "../alert_message/AlertMessage";
import { alertMessage } from "../../store/generalSlice";


const Products = () => {
  const products = useSelector((state) => state.product);
  const generalData = useSelector((state) => state.general);
  const dispatch = useDispatch();

  const handleProduct = (item) => {
    dispatch(add(item));
    dispatch(alertMessage({
      content: `Added to Cart`,
      type: 'success'
    })) 
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const findData = products.data.filter(item => {
    if (products.searchedProducts && products.searchedProducts.length === 0) {
      return item;
    } else {
      const regex = new RegExp(products.searchedProducts, "i");
      return item.title.match(regex) || item.description.match(regex) || item.category.match(regex);
    }
  })

  return (
    <>
      <AlertMessage alert={generalData.message}/>
      {products.isloading ? (
        <h3><Loader gif={loaderGif} /> </h3>
      ) : products.error ? (
        <>
          <div className="text-center position-absolute top-50 start-50 translate-middle">
            <h3 className="text-danger">Oops! Something went wrong</h3>
            <small>We couldn&rsquo;t find the page you were looking for.</small>
          </div>
        </>
      ) : (
        <Cards
          productsList={findData}
          show="true"
          buttonName="Add to cart"
          handleCard={handleProduct}
        />
      )}
    </>
  );
};

export default Products;
