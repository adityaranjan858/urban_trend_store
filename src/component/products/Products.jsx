import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../store/productSlice";
import { add } from "../../store/cartSlice";
import AlertMessage from "../alert_message/AlertMessage";
import { alertMessage } from "../../store/generalSlice";
import ProductsCard from "../cards/ProductsCard";
import SearchBar from "../searchBar/SearchBar";
import ShimmerProductsCard from "../cards/ShimmerProductsCard";
import Filter from "./Filter";
import Sorting from "./Sorting";

const Products = () => {
  const [checkBoxValue, setCheckBoxValue] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const products = useSelector((state) => state.product);
  const generalData = useSelector((state) => state.general);
  const dispatch = useDispatch();

  const handleProduct = (item) => {
    dispatch(add(item));
    dispatch(
      alertMessage({
        content: `Added to Cart`,
        type: "success",
      })
    );
  };

  useEffect(() => {
    if (products.searchedProducts.length === 0) {
      dispatch(fetchProducts());
    }
  }, [products.searchedProducts, dispatch]);

  const findData = products.data.filter((item) => {
    const matchSearch =
      products.searchedProducts && products.searchedProducts.length === 0
        ? true
        : new RegExp(products.searchedProducts, "i").test(item.title) ||
          new RegExp(products.searchedProducts, "i").test(item.description) ||
          new RegExp(products.searchedProducts, "i").test(item.category);

    const matchCategory =
      checkBoxValue.length === 0
        ? true
        : checkBoxValue.includes(item.category.toLowerCase());
    return matchSearch && matchCategory;
  });

  const sortedData = [...findData];

  switch (sortOption) {
    case "Price High to Low":
      sortedData.sort((a, b) => b.price - a.price);
      break;
    case "Price Low to High":
      sortedData.sort((a, b) => a.price - b.price);
      break;
    case "Ratings":
      sortedData.sort((a, b) => b.rating?.rate - a.rating?.rate);
      break;
    case "A-Z":
      sortedData.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "Z-A":
      sortedData.sort((a, b) => b.title.localeCompare(a.title));
      break;
    default:
      break;
  }

  return (
    <>
      <AlertMessage alert={generalData.message} />
      {products.isloading ? (
        <ShimmerProductsCard />
      ) : products.error ? (
        <>
          <div className="text-center position-absolute top-50 start-50 translate-middle">
            <h3 className="text-danger">Oops! Something went wrong</h3>
            <small>We couldn&rsquo;t find the page you were looking for.</small>
          </div>
        </>
      ) : (
        <>
          <SearchBar />
          <div className="container ">
            {/* for desktop */}
            <div className="d-none d-sm-block">
              <Sorting onSortChange={setSortOption} />
            </div>
            {/* ***************** */}

            <div className="row">
              <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <Filter
                      checkBoxValue={checkBoxValue}
                      setCheckBoxValue={setCheckBoxValue}
                    />
                  </div>
                  <div className="d-block d-sm-none">
                    <Sorting onSortChange={setSortOption} />
                  </div>
                </div>
                  <hr className="d-block d-sm-none"/>
              </div>
              <div className="col-12 col-sm-7 col-md-8 col-lg-9">
                <ProductsCard
                  productsList={sortedData}
                  buttonName="Add to cart"
                  handleCard={handleProduct}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Products;
