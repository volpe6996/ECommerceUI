import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import HamburgerNavbar from "../components/HamburgerNavbar";
import {Outlet} from 'react-router-dom';

const RootLayout = () => {
    return (  
        <>
            <Header/>
            <Navbar/>
            <HamburgerNavbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}
 
export default RootLayout;