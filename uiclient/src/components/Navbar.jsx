import React, { useEffect } from 'react';
import { ReactDOM } from 'react';
import { Link } from 'react-router-dom';
import '../assets/globals.css';
import Cart from '../assets/Cart.svg';
import Notifications from '../assets/Notifications.svg';
import Profile from '../assets/Profile.svg';
import Saved from '../assets/Saved.svg';
import Search from '../assets/Search.svg';
import navbarLogo from '../assets/navbarLogo.svg';
import $ from 'jquery';

const Navbar = () => {
  const Underline = () => {
    $('.nav-link').on('click', function() {
      $('.active-link').removeClass('active-link');
      $(this).addClass('active-link');
    });
  }

  useEffect(() => {
    Underline();
  }, []);

  return (
    <div className="row navbarContainer pt-5 text-dark m-0">
      <div className="d-flex underlineContainer px-0">
        <div className="col-9 innerNavbarContainer p-0">
          <div className="container-fluid navbarNavigationContainer d-flex justify-content-start p-0">
            <a className='p-0 m-0' href={`/`} style={{position: "relative", bottom: "-4px"}}>
              <img className="align-self-center" src={navbarLogo}  alt="navbar-logo" height="24" />
            </a>
            <ul>
              <li>
                <Link className='nav-link' to={`categories`}>
                  Products
                </Link>
			        </li>
              <li>
                <Link className='nav-link' to={`solutions`}>
                  Solutions
                </Link>
			        </li>		
              <li>
                <Link className='nav-link' to={`download&support`}>
                  Download & Support
                </Link>
			        </li>		
              <li>
                <Link className='nav-link' to={`products`}>
                  Shop
                </Link>
			        </li>		
	          </ul>
          </div>
        </div>
        <div className="col-3 innerNavbarContainer p-0 d-flex">
          <div className="container-fluid navbarIconsContainer d-flex align-items-center justify-content-end p-0">
            <img className="spacedIcon" src={Search} alt="search-icon" />
            <img className="spacedIcon" src={Cart} alt="cart-icon" />
            <img className="spacedIcon" src={Saved} alt="saved-icon" />
            <img className="spacedIcon" src={Notifications} alt="notification-icon" />
            <Link to={`/login`}>
              <img src={Profile} alt="profile-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;