import "bootstrap/dist/js/bootstrap.min.js";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../App.css";
import adminPanel from '../assets/admin-gray.svg';

export const Header = () => {
    return (
      <div class="navbarContainer bg-primary">
        <div className="container-fluid col-12 m-0 p-0 d-flex align-items-center">
          <div class="logo col-6 d-flex justify-content-start fs-5 p-3 text-white">
            <Navbar.Brand href={`/`}>Management Side</Navbar.Brand>
          </div>
          {/* <div class="admin col-6 d-flex justify-content-end pe-3">
            <Nav.Link href={`/log-in`}>
              <img src={adminPanel} width="28px" alt="adminPanel">
              </img>
            </Nav.Link>
          </div> */}
        </div>
      </div>
      );
}
 
export default Header ;