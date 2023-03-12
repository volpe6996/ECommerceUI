import {Outlet} from 'react-router-dom';
import Footer from '../layout components/Footer';
import Header from "../layout components/Header";

const RootLayout = () => {
    return ( 
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
     );
}
 
export default RootLayout;