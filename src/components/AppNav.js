import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AppNav(){
    const cart = useSelector((state) => state.cart);
    return(
        <>
        <Navbar fixed="top" expand="lg" className="bg-body-tertiary" >
      <Container>
        <Link to="/" className="navbar-brand">CartApp</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Products</Link>
            <Link to="cart" className="nav-link">Cart - {cart.length}</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
}
export default AppNav;