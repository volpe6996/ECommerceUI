import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"

const Header = () => {
    return (
        <div className="header row text-center bg-primary position-relative">
        <div className="col-md-2 fs-3 text-start ps-3">Management Side</div>
        <div className="nav-opt col-md-2 fs-5">Categories & Products</div>
        {/* <div className="nav-opt col-md-1 fs-5">Products</div> */}
        <div className="nav-opt col-md-1 fs-5">Orders</div>
        <div className="nav-opt col-md-1 fs-5">Users</div>
        <div className="nav-opt col-md-1 fs-5  position-absolute end-0">
          <img class="admin-panel-icon" src="admin-icon.png"/>
        </div>
      </div>
      );
}
 
export default Header;