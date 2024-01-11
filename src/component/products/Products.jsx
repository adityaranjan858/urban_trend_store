import { useDispatch, useSelector } from "react-redux";
import Cards from "../cards/Cards";
import { useEffect } from "react";
import { fetchProducts } from "../../store/productSlice";
import { add } from "../../store/cartSlice";
import Loader from "../loader/Loader";
import loaderGif from "../../media/ZNeT.gif"


const Products = () => {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handleProduct = (item) => {
    dispatch(add(item));
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const findData = products.data.filter(item=> {
    if (products.searchedProducts && products.searchedProducts.length === 0) {
      return item;
    } else{
      const regex = new RegExp(products.searchedProducts, "i");
      return item.title.match(regex) || item.description.match(regex) || item.category.match(regex);
    }
  })

  return (
    <>
      {products.isloading ? (
        <h3><Loader gif={loaderGif}/> </h3>
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
