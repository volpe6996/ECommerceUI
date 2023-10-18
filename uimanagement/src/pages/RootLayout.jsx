import {Outlet} from 'react-router-dom';
import Footer from '../layout components/Footer';
import Header from "../layout components/Header";
import HeaderAuthorized from "../layout components/HeaderAuthorized";

const RootLayout = () => {
    return ( 
        <>
            {sessionStorage.length > 0 ? <HeaderAuthorized/> : <Header/>}
            <Outlet/>
            <Footer/>
        </>
     );
}
 
export default RootLayout;