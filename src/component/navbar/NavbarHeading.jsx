import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';
import style from "./NavbarHeading.module.css"
import { useSelector } from 'react-redux';
import logo from "/logo.png";
function NavbarHeading() {
  const cartProduct = useSelector(state => state.cart)
  
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className={style.navbar}>
      <Container fluid>
        <Navbar.Brand>
          <Link to="/" className={`logo ${style.logo}`}><img className="" src={logo} alt="logo" /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-white' />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="align-items-baseline ms-auto flex-row justify-content-center">
            <Link className='' to="/">Home</Link>
            <Link className='' to="/cart">
              Cart
              <i className="position-relative fa-solid fa-2x fa-cart-shopping">
                <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill ${style.cartIcon}`}>
                  {cartProduct.totalCartitem}
                </span>
              </i>
            </Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavbarHeading;