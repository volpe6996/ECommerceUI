import "bootstrap/dist/js/bootstrap.min.js";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../App.css";
import adminPanel from '../assets/admin-gray.svg';

export const HeaderAuthorized = () => {
  const LogOut = () =>{
    sessionStorage.clear();
  }

  return (
    <div class="navbarContainer bg-primary">
      <div className="container-fluid col-12 m-0 p-0 d-flex align-items-center">
        <div class="main col-11 d-flex justify-content-start p-3 text-white">
          <div className="fs-5 me-4">
            <Navbar.Brand href={`/`} onClick={() => LogOut()}>Management Side</Navbar.Brand>
          </div>
          <div class="col-8 fs-6 d-flex text-white align-items-center pt-1">
            <Nav.Link className="me-3" href={`/categories`}>Categories</Nav.Link>
            <Nav.Link className="me-3" href={`/products`}>Products</Nav.Link>
            <Nav.Link className="me-3" href={`/orders`}>Orders</Nav.Link>
            <Nav.Link href={`/users`}>Users</Nav.Link>
          </div>
        </div>
        {/* <div class="admin col-1 d-flex justify-content-end pe-3">
          <Nav.Link href={`/admin-panel`}>
            <img src={adminPanel} width="28px" alt="adminPanel">
            </img>
          </Nav.Link>
        </div> */}
      </div>
    </div>
  );
}

export default HeaderAuthorized;