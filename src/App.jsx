import { Route, Routes } from "react-router";
import Cart from "./pages/Cart";
import NavbarHeading from "./component/navbar/NavbarHeading";
import Home from "./pages/home/Home";
import PageNotFound from "./pages/page_not_found/PageNotFound";
import Title from "./component/Title";
import Products from "./component/products/Products";

function App() {
  return (
    <>
      <NavbarHeading />
      <Title />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route index element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
