import { Route, Routes, useLocation } from "react-router-dom"
import Cart from "./pages/Cart"
import NavbarHeading from "./component/navbar/NavbarHeading"
import { Container } from "react-bootstrap"
import Home from './pages/home/Home';
import SearchBar from "./component/searchBar/SearchBar";

function App() {
  const location = useLocation();
  const pathName = location.pathname.substring(1);

  const title = (name) => {
    const word = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return word;
  }

  return (
    <>
      <NavbarHeading />
      <div className="container-fluid">
        {pathName ? "" : <SearchBar/>}
        {pathName ? <h5 className="mt-3"> {title(pathName)} </h5> : <h5 className="mt-3">Products</h5>}
      </div>
      <Container fluid>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
