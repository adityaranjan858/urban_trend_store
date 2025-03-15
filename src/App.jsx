import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import NavbarHeading from "./component/navbar/NavbarHeading";
import Home from "./pages/home/Home";
import PageNotFound from "./pages/page_not_found/PageNotFound";
import Title from "./component/Title";

function App() {
  return (
    <>
      <NavbarHeading />
      <Title />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
