import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import './assets/globals.css';
import navbarLogo from './assets/navbarLogo.svg';
import Cart from './assets/Cart.svg';
import Notifications from './assets/Notifications.svg';
import Profile from './assets/Profile.svg';
import Saved from './assets/Saved.svg';
import Search from './assets/Search.svg';
import Cr1 from './assets/carousel1.svg';
import Cr2 from './assets/carousel2.svg';
import Language from './assets/Language.svg';
import Location from './assets/Location.svg';

function App() {
  return (
    <div className="container-fluid appContainer p-0">
      {/* FUTURE HEADER COMPONENT */}
      <div className="container-fluid headerContainer d-flex text-light">
        <div className="col-6 innerHeaderContainer p-0">
          <div className="container-fluid d-flex justify-content-start m-auto p-0">
            <p className="m-0 py-2 pe-4">Find a store</p>
            <p className="m-0 py-2">Contact</p>
          </div>
        </div>
        <div className="col-6 innerHeaderContainer p-0">
          <div className="container-fluid d-flex justify-content-end m-auto p-0">
            <img src={Language} alt="change-language"/>
            <p className="m-0 py-2 ps-1 pe-4">English</p>
            <img src={Location} alt="change-location"/>
            <p className="m-0 py-2 ps-1">United States</p>
          </div>
        </div>
      </div>

      {/* FUTURE NAVBAR COMPONENT */}
      <div className="container-fluid navbarContainer py-4 d-flex text-dark">
        <div className="col-8 innerNavbarContainer p-0">
          <div className="container-fluid d-flex align-items-center justify-content-start p-0">
              <div className="item pe-4">
                <img src={navbarLogo} alt="navbar-logo" width="48"/>
              </div>
              <p className="m-0 pe-4 fs-5">Menu</p>
              <p className="m-0 pe-4 fs-5">Rewards</p>
              <p className="m-0 fs-5">Gift Cards</p>
          </div>
        </div>
        <div className="col-4 innerNavbarContainer p-0 d-flex">
          <div className="container-fluid d-flex align-items-center justify-content-end p-0">
              <img className="pe-4" src={Search} alt="search-icon" height="30"/>
              <img className="pe-4" src={Cart} alt="cart-icon" height="30"/>
              <img className="pe-4" src={Saved} alt="saved-icon" height="30"/>
              <img className="pe-4" src={Notifications} alt="notification-icon" height="30"/>
              <img src={Profile} alt="profile-icon" height="30"/>   
          </div>
        </div>
      </div>

      {/* FUTURE CAROUSEL COMPONENT */}
      <div className="container-fluid carouselContainer d-flex">
        <div className="container-fluid col-6 innerCarouselContainer p-0 pe-2 d-flex">
          <img className="carousel1" src={Cr1} alt="carousel-1"/>
        </div>
        <div className="container-fluid col-6 innerCarouselContainer p-0 ps-2 d-flex">
          <img className="carousel2" src={Cr2} alt="carousel-2"/>
        </div>
      </div>
    </div>
  );
}

export default App;
