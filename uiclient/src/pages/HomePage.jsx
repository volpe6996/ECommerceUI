import HamburgerNavbar from "../components/HamburgerNavbar";
import Header from "../components/Header";
import ImageBanner from "../components/ImageBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <HamburgerNavbar/>
            <ImageBanner/>
            <Footer/>
        </>
    );
}
 
export default HomePage;