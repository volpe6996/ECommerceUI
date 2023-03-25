import '../assets/globals.css';
import Language from '../assets/Language.svg';
import Location from '../assets/Location.svg';

const Header = () => {
    return (
        <div className="row headerContainer text-light m-0">
        <div className="col-6 innerHeaderContainer p-0">
          <div className="container-fluid d-flex justify-content-start m-auto p-0">
            <p className="m-0 py-2 pe-4">Find a store</p>
            <p className="m-0 py-2">Contact</p>
          </div>
        </div>
        <div className="col-6 innerHeaderContainer p-0">
          <div className="container-fluid d-flex justify-content-end m-auto p-0">
            <img src={Language} alt="change-language" />
            <p className="m-0 py-2 ps-1 pe-4">English</p>
            <img src={Location} alt="change-location" />
            <p className="m-0 py-2 ps-1">United States</p>
          </div>
        </div>
      </div>
      );
}
 
export default Header;
