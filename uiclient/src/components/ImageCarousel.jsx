import '../assets/globals.css';
import Carousel from '../components/Carousel';

const ImageCarousel = () => {
    return (
        <div className="container-fluid row imageCarouselContainer col-12 d-flex m-0">
            <div className="container-fluid col-12 innerCarouselContainer p-0">
                <Carousel/>
            </div>
        </div>
    );
}

export default ImageCarousel;