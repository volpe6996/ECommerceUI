import HamburgerNavbar from "../components/HamburgerNavbar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";
import FeaturedProducts from "../components/FeaturedProducts";

const HomePage = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <HamburgerNavbar/>
            <ImageCarousel/>
            <FeaturedProducts/>
            <Footer/>
        </>
    );
}
 
export default HomePage;