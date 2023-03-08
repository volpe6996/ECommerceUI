import "bootstrap/dist/js/bootstrap.min.js";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./App.css";

export const Header = () => {
    return (
      <div class="navbarContainer">
        <Navbar bg="primary" variant="dark">
        <Container className="mx-0 px-3">
          <Navbar.Brand href={`/`}>Management Side</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href={`/categories`}>Categories</Nav.Link>
            <Nav.Link href={`/products`}>Products</Nav.Link>
            <Nav.Link href={`/orders`}>Orders</Nav.Link>
            <Nav.Link href={`/users`}>Users</Nav.Link>
            <Nav.Link className="position-absolute end-0" href={`/adminPanel`}>
              <img src="admin-gray.svg" width="28px" alt="adminPanel">
              </img>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
      );
}
 
export default Header ;