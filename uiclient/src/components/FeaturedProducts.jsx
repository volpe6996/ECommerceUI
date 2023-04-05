import '../assets/globals.css';
import zdj4 from '../assets/image4.png';
import zdj5 from '../assets/image5.png';
import zdj6 from '../assets/image6.png';

const FeaturedProducts = () => {
    return ( 
        <div className="fpContainer container-fluid d-flex flex-column m-0 py-5">
            <div className="fpContainerHeader d-flex justify-content-center fw-bold pb-4" style={{fontSize: "28px"}}>
                Featured Products
            </div>
            <div className="fpContaineroOffers container-fluid d-flex flex-row m-0 p-0">
                <div className="fpContainerOffer col-4" style={{paddingRight: "10.66px"}}>
                    <div className="fpOfferImage d-flex justify-content-center">
                        <img src={zdj4} height="200"/>
                    </div>
                    <div className="fpOfferDescription d-flex flex-column justify-content-start pt-4">
                        <h3 className="fw-bold">AMD Ryzen™ 9 7950X Processor</h3>
                        <h4>Change How You Game</h4>
                        <h3 className="price">$599</h3>
                    </div>
                </div>
                <div className="fpContainerOffer col-4" style={{padding: "0 5.33px"}}>
                    <div className="fpOfferImage d-flex justify-content-center">
                        <img src={zdj5} height="200"/>
                    </div>
                    <div className="fpOfferDescription d-flex flex-column justify-content-start pt-4">
                        <h3 className="fw-bold">AMD Ryzen™ 7 5800X3D Processor</h3>
                        <h4>The World’s Fastest PC Gaming Processor</h4>
                        <h3 className="priceMiddle">$349 </h3>
                    </div>
                </div>
                <div className="fpContainerOffer col-4" style={{paddingLeft: "10.66px"}}>
                    <div className="fpOfferImage d-flex justify-content-center">
                        <img src={zdj6} height="200"/>
                    </div>
                    <div className="fpOfferDescription d-flex flex-column justify-content-start pt-4">
                        <h3 className="fw-bold">AMD Radeon™ RX 6950 XT Graphics</h3>
                        <h4>Performance you deserve</h4>
                        <h3 className="price">$699</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default FeaturedProducts;