import img1 from '../assets/image4.png'
import img2 from '../assets/image7.png'
import img3 from '../assets/image8.png'
import Saved from '../assets/Saved.svg'
import Cart from '../assets/Cart White.svg'
import rating from '../assets/Rating.svg'
import General from '../assets/General Spec.jpg'

const images = [{ id: 0, img: img1 }, { id: 1, img: img2 }, { id: 2, img: img3 },]

const ProductHardcoded = () => {
    return (
        <div className="productsDetailContainer container-fluid d-flex flex-column m-0">
            <div className="productDetailBorderedContainer">
                <div className="productInfoContainer d-flex flex-md-row-reverse flex-column">
                    <div className="col-md-7 col-12 ps-md-5 m-0 p-0">
                        <div className="innerInfoContainer">
                            <h2 style={{ fontWeight: "700" }}>AMD Ryzen™ 9 7950X</h2>
                            <h4 style={{ fontWeight: "600" }}>The Best for Gaming and Creating</h4>
                            <h4 className="400">The 16-core powerhouse processor can do it all for the most demanding gamers and creators.
                            </h4>
                            <div className="rating d-flex flex-fow">
                                <h4 className="m-0 mt-1 me-3" style={{ fontFamily: "Outfit", fontWeight: "800"}}>4.2</h4>
                                <img src={rating} />
                            </div>
                            <h2 className="price py-4">$599</h2>
                            <table className="col-12 mt-4">
                                <tr>
                                    <td><h4 className="600">CPU Socket</h4></td>
                                    <td><h4 className="400">AM5</h4></td>
                                </tr>
                                <tr>
                                    <td><h4 className="600">Base Clock</h4></td>
                                    <td><h4 className="400">4.5 GHz</h4></td>
                                </tr>
                                <tr>
                                    <td><h4 className="600"># of CPU Cores</h4></td>
                                    <td><h4 className="400">16</h4></td>
                                </tr>
                                <tr>
                                    <td><h4 className="600">Cache</h4></td>
                                    <td><h4 className="400">80 MB</h4></td>
                                </tr>
                                <tr>
                                    <td><h4 className="mt-3">View full specifications</h4></td>
                                </tr>
                            </table>
                        </div>
                        <div className="shopButtons col-12 d-flex flex-row mt-4 fs-lg-2 fs-xl-2">
                            <div className="col-6 pe-2">
                                <button className="btnLeft" >
                                    Add to cart
                                    <img className="ms-3" src={Cart} />
                                </button>
                            </div>
                            <div className="col-6 ps-2">
                                <button className="btnRight">
                                    Save for later
                                    <img className="ms-2" src={Saved} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-12 d-flex flex-column pe-lg-5 m-md-0 mt-5">
                        <div className="activeImage d-flex justify-content-center align-items-center">
                            <img src={img1} height={230} />
                        </div>
                        <div className="smallImage d-flex justify-content-center align-items-center mt-4">
                            {images.map((i) => <img className="me-3" key={i.id} src={i.img} height={64} />)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="specificationContainer col-12 d-flex flex-row">
                <div className="col-5"></div>
                <div className="col-7 ms-5 ps-5">
                    {/* <img src={General} /> */}
                </div>
            </div>
        </div>
    );
}

export default ProductHardcoded;