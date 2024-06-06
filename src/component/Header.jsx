import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import{ CiShoppingCart } from "react-icons/ci";
import { FaOpencart } from 'react-icons/fa';
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useAuth} from "../hooks/useAuth";
import {Badge, Button} from "react-bootstrap";
import {useCart} from '../hooks/useCart';
import { CartContext } from '../context/CartContext';

function Header() {
  const {user, setUser} = useAuth();
  const {cart}= useCart();
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink to="/" className="nav-link">
        <Navbar.Brand >Ecomm</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/cart" className="nav-link">
            <FaOpencart />
            <span style= {{ marginLeft: "5px" }}>Cart</span>
            {CartContext.length != 0 &&  <Badge bg ="primary">{cart.length}</Badge>}
            </NavLink>
            {user ? (
              <Button
               onClick={() => {
                localStorage.removeItem("token");
                setUser(null);
               }}
               >
                Logout
                </Button>
              ):(
            <NavLink to="/login" className="nav-link">
               Login
               </NavLink>
              )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;