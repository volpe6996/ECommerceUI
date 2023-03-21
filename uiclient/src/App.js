import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import './assets/globals.css';
import navbarLogo from './assets/navbarLogo.svg';
import Cart from './assets/Cart.svg';
import Notifications from './assets/Notifications.svg';
import Profile from './assets/Profile.svg';
import Saved from './assets/Saved.svg';
import Search from './assets/Search.svg';
import Image1 from './assets/Image1.svg';
import Image2 from './assets/Image2.svg';
import Language from './assets/Language.svg';
import Location from './assets/Location.svg';
import useScript from './hooks/useScript.js';

function App() {
  //useScript("./scripts/hamburgerScript.js");

  return (
    <div className="container-fluid appContainer p-0">
      {/* FUTURE HEADER COMPONENT */}
      <div className="row headerContainer d-sm-flex d-none text-light m-0">
        <div className="col-6 innerHeaderContainer p-0">
          <div className="container-fluid d-flex justify-content-start m-auto p-0">
            <p className="m-0 py-2 pe-4">Find a store</p>
            <p className="m-0 py-2">Contact</p>
          </div>
        </div>
        <div className="col-6 innerHeaderContainer p-0">
          <div className="container-fluid d-flex justify-content-end m-auto p-0">
            <img src={Language} alt="change-language" />
            <p className="m-0 py-2 ps-1 pe-4">English</p>
            <img src={Location} alt="change-location" />
            <p className="m-0 py-2 ps-1">United States</p>
          </div>
        </div>
      </div>

      {/* FUTURE NAVBAR COMPONENT */}
      <div className="row navbarContainer py-4 text-dark m-0">
        <div className="col-8 innerNavbarContainer p-0">
          <div className="container-fluid d-flex align-items-center justify-content-start p-0 fs-5">
            <div className="item pe-4">
              <img src={navbarLogo} alt="navbar-logo" width="48" />
            </div>
            <p className="m-0 pe-4">Menu</p>
            <p className="m-0 pe-4">Rewards</p>
            <p className="m-0">Gift Cards</p>
          </div>
        </div>
        <div className="col-4 innerNavbarContainer p-0 d-flex">
          <div className="container-fluid d-flex align-items-center justify-content-end p-0">
            <img className="pe-4" src={Search} alt="search-icon" height="30" />
            <img className="pe-4" src={Cart} alt="cart-icon" height="30" />
            <img className="pe-4" src={Saved} alt="saved-icon" height="30" />
            <img className="pe-4" src={Notifications} alt="notification-icon" height="30" />
            <img src={Profile} alt="profile-icon" height="30" />
          </div>
        </div>
      </div>

      {/* FUTURE HAMBURGER NAVBAR CONTAINER */}
      <div className="row navbarHamburgerContainer py-4 text-dark m-0">
        <div className="col-8 innerNavbarContainer d-flex align-items-center justify-content-start p-0">
          <img src={navbarLogo} alt="navbar-logo" width="48" />
        </div>
        <div className="col-4 innerNavbarContainer d-flex align-items-center justify-content-end p-0">
          <div class="hamburger-navigation d-flex">
            <button class="hamburger p-0">
              <span class="hamburger__box">
                <span class="hamburger__inner"></span>
              </span>
            </button>
            <div class="navigation">
              <ul class="navigation__list">
                <li class="navigation__item"><a class="nav-link1" href="#home">Home</a></li>
                <li class="navigation__item"><a class="nav-link2" href="#about-us">About Us</a></li>
                <li class="navigation__item"><a class="nav-link3" href="#services">Services</a></li>
                <li class="navigation__item"><a class="nav-link3" href="gallery.html">Gallery</a></li>
                <li class="navigation__item"><a class="nav-link4" href="#footer">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FUTURE Image Banner COMPONENT */}
      <div className="row imageBannerContainer d-flex m-0">
        <div className="container-fluid innerContainer d-flex col-sm-6 p-0 pe-sm-2">
          <img className="image1" src={Image1} alt="image-1" />
        </div>
        <div className="container-fluid innerContainer d-flex col-sm-6 p-0 ps-sm-2">
          <img className="image2" src={Image2} alt="image-2" />
        </div>
      </div>
    </div>
  );
}

export default App;
