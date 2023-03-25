import navbarLogo from '../assets/footerLogo.svg';
import visa from '../assets/Payments Logos/Visa.svg';
import applePay from '../assets/Payments Logos/ApplePay.svg';
import googlePay from '../assets/Payments Logos/GooglePay.svg';
import masterCard from '../assets/Payments Logos/MasterCard.svg';
import payPal from '../assets/Payments Logos/PayPal.svg';
import amazonPay from '../assets/Payments Logos/AmazonPay.svg';
import klarna from '../assets/Payments Logos/Klarna.svg';

const Footer = () => {
    return (
        <div className="containerfluid footerContainer d-flex justify-content-start mt-4 py-4">
            <div className="col-sm-4 col-12 d-flex text-light">
                <div className="container-fluid innerFooterContainer p-0">
                    <div className="footerHeader d-flex justify-content-start align-items-center py-4">
                        <img className="pe-4" src={navbarLogo} height="38"/>
                        <p className="p-0 m-0 fw-bold fs-5">ADVANCED MICRO DEVICES</p>
                    </div>
                    <div className="footerDesciption">
                        <p className="p-0 m-0 fs-6">
                            <b>AMD</b> is a global provider of high-performance computing and graphics technologies, offering a diverse range of semiconductor products and related services, including processors, graphics cards, embedded processors, and software solutions, as well as technical support and consulting services to help customers get the most out of their systems.
                        </p>
                    </div>
                    <div className="footerPayments d-flex flex-column py-4">
                        <p className="p-0 m-0 fs-5">Accepted Payments</p>
                        <div className="container-fluid innerFooterPayments p-0 py-2">
                            <div className="container-fluid p-0 m-0 paymentsIconContainer d-flex align-items-center justify-content-between mb-3">
                                <div className="p-0 py-2">
                                    <img className="col-12" src={visa} height="20"/>
                                </div>
                                <div className="p-0 py-2">
                                    <img className="col-12" src={masterCard} height="20"/>
                                </div>
                                <div className="p-0 py-2">
                                    <img className="col-12" src={googlePay} height="20"/>
                                </div>
                                <div className="p-0 py-2">
                                    <img className="col-12" src={applePay} height="20"/>
                                </div>
                            </div>
                            <div className="container-fluid p-0 m-0 paymentsIconContainer d-flex align-items-center justify-content-between">
                                <div className="p-0 py-2">
                                    <img className="col-12" src={payPal} height="20"/>
                                </div>
                                <div className="p-0 py-2">
                                    <img className="col-12" src={amazonPay} height="20"/>
                                </div>
                                <div className="p-0 py-2">
                                    <img className="col-12" src={amazonPay} height="20"/>
                                </div>
                                <div className="p-0 py-2">
                                    <img className="col-12" src={klarna} height="20"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;