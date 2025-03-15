import Footer from "../../component/footer/Footer";
import Products from "../../component/products/Products";
import style from "./Home.module.css"

const Home = () => {
  return (
    <>
  <div className={`d-flex flex-column ${style.home_container}`}>
      <Products />
    <div className="mt-auto">
      <Footer />
    </div>
  </div>
</>

  );
};

export default Home;
