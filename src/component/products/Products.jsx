import { useDispatch, useSelector } from "react-redux";
import Cards from "../cards/Cards";
import { useEffect } from "react";
import { fetchProducts } from "../../store/productSlice";
import { add } from "../../store/cartSlice";

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
        <h3 className="text-warning text-center">Loading...</h3>
      ) : products.error ? (
        <h3 className="text-danger text-center">Something went wrong...</h3>
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
