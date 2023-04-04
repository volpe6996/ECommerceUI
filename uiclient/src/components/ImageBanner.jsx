import '../assets/globals.css';
import Image1 from '../assets/Image1.jpg';
import Image2 from '../assets/Image2.jpg';

const ImageBanner = () => {
    return (
        <div className="row imageBannerContainer d-flex m-0 pt-4">
            <div className="container-fluid d-flex col-sm-6 p-sm-0 pe-sm-2 px-0 pb-3">
                <img className="image1" src={Image1} alt="image-1" />
            </div>
            <div className="container-fluid d-flex col-sm-6 p-0 ps-sm-2">
                <img className="image2" src={Image2} alt="image-2" />
            </div>
        </div>
    );
}

export default ImageBanner;