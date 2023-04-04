import '../assets/globals.css';
import Cart from '../assets/Cart.svg';
import Notifications from '../assets/Notifications.svg';
import Profile from '../assets/Profile.svg';
import Saved from '../assets/Saved.svg';
import Search from '../assets/Search.svg';
import navbarLogo from '../assets/navbarLogo.svg';
import { useState } from 'react';

const HamburgerNavbar = () => {
    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [navbar, setNavbar] = useState("navbarHamburgerContainer unsticky")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
            setNavbar("navbarHamburgerContainer sticky")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu")
            setNavbar("navbarHamburgerContainer unsticky")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div className={navbar}>
            <div className="col-8 innerNavbarContainer d-flex align-items-center justify-content-start p-0">
                <img src={navbarLogo} alt="navbar-logo" height="20" />
            </div>
            <div className="col-4 innerNavbarContainer d-flex align-items-center justify-content-end p-0">
                <div className="hamburger-navigation" >
                    <div className="burger-menu" onClick={updateMenu}>
                        <div className={burger_class} />
                        <div className={burger_class} />
                        <div className={burger_class} />
                    </div>
                    <div className={menu_class}>
                        <div className="d-flex flex-column align-items-center fs-5 h-100">
                        <p className="m-0 pb-3">Products</p>
                        <p className="m-0 pb-3">Solutions</p>
                        <p className="m-0 pb-3">Download & Support</p>
                        <p className="m-0">Shop</p>
                        </div>
                        <div className="d-flex innerNavbarContainer">
                            <img className="pe-4" src={Search} alt="search-icon" />
                            <img className="pe-4" src={Cart} alt="cart-icon" />
                            <img className="pe-4" src={Saved} alt="saved-icon" />
                            <img className="pe-4" src={Notifications} alt="notification-icon" />
                            <img src={Profile} alt="profile-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HamburgerNavbar
