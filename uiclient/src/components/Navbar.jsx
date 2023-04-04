import React, { useEffect } from 'react';
import { ReactDOM } from 'react';
import '../assets/globals.css';
import Cart from '../assets/Cart.svg';
import Notifications from '../assets/Notifications.svg';
import Profile from '../assets/Profile.svg';
import Saved from '../assets/Saved.svg';
import Search from '../assets/Search.svg';
import navbarLogo from '../assets/navbarLogo.svg';
import $ from 'jquery';

const Navbar = () => {
  const NavbarAni = () => {
    $('.nav-link').on('click', function() {
      $('.active-link').removeClass('active-link');
      $(this).addClass('active-link');
    });
  }

  useEffect(() => {
    NavbarAni();
  }, []);

  return (
    <div className="row navbarContainer pt-4 text-dark m-0">
      <div className="d-flex underlineContainer m-0 px-0">
        <div className="col-9 innerNavbarContainer p-0">
          <div className="container-fluid navbarNavigationContainer d-flex justify-content-start p-0 fs-5">
            <img className="align-self-center" src={navbarLogo} alt="navbar-logo" height="32" />
            <ul>
              <li class="nav-link">
               <a href="#">Products</a>
			        </li>
              <li class="nav-link">
               <a href="#">Solutions</a>
			        </li>		
              <li class="nav-link">
               <a href="#">Download & Support</a>
			        </li>		
              <li class="nav-link">
               <a href="#">Shop</a>
			        </li>		
	          </ul>
          </div>
        </div>
        <div className="col-3 innerNavbarContainer p-0 d-flex">
          <div className="container-fluid navbarIconsContainer d-flex align-items-center justify-content-end p-0">
            <img className="pe-4" src={Search} alt="search-icon" />
            <img className="pe-4" src={Cart} alt="cart-icon" />
            <img className="pe-4" src={Saved} alt="saved-icon" />
            <img className="pe-4" src={Notifications} alt="notification-icon" />
            <img src={Profile} alt="profile-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;