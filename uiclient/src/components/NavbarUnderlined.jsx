import '../assets/globals.css';
import Cart from '../assets/Cart.svg';
import Notifications from '../assets/Notifications.svg';
import Profile from '../assets/Profile.svg';
import Saved from '../assets/Saved.svg';
import Search from '../assets/Search.svg';
import navbarLogo from '../assets/navbarLogo.svg';

const Navbar = () => {
    return (  
        <div className="row navbarContainer py-4 text-dark m-0">
        <div className="col-8 innerNavbarContainer p-0">
          <div className="container-fluid navbarNavigationContainer d-flex align-items-center justify-content-start p-0 fs-5">
            <img src={navbarLogo} alt="navbar-logo" height="32"/>          
            <p className="m-0">Menu</p>
            <p className="m-0">Rewards</p>
            <p className="m-0">Gift Cards</p>
          </div>
        </div>
        <div className="col-4 innerNavbarContainer p-0 d-flex">
          <div className="container-fluid navbarIconsContainer d-flex align-items-center justify-content-end p-0">
            <img className="pe-4" src={Search} alt="search-icon"/>
            <img className="pe-4" src={Cart} alt="cart-icon"/>
            <img className="pe-4" src={Saved} alt="saved-icon"/>
            <img className="pe-4" src={Notifications} alt="notification-icon"/>
            <img src={Profile} alt="profile-icon"/>
          </div>
        </div>
      </div>
    );
}
 
export default Navbar;