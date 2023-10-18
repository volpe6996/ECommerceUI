import '../assets/globals.css';
import fb from "../assets/Social Media Logos/Facebook.svg";
import yt from "../assets/Social Media Logos/Youtube.svg";
import ig from "../assets/Social Media Logos/Instagram.svg";
import lin from "../assets/Social Media Logos/LinkedIn.svg";
import tw from "../assets/Social Media Logos/Twitch.svg";
import twit from "../assets/Social Media Logos/Twitter.svg";

const Footer = () => {
    return (
        <div className="containerfluid footerContainer d-flex flex-column mt-4">
            <div className="container-fluid row d-flex align-items-center m-0 p-0">
                <div className="footerSocialMediaIcons col-md-7 col-xl-8 d-flex justify-content-md-start justify-content-between m-0 px-md-0 pt-5">
                    <img src={fb}/>
                    <img src={twit}/>
                    <img src={ig}/>
                    <img src={lin}/>
                    <img src={tw}/>
                    <img src={yt}/>
                </div>
                <div className="row col-md-5 col-xl-4 m-0 p-0 pb-1 pt-5 d-flex align-items-center border-bottom border-2 border-white">
                    <p className="col-11 m-0">Subscribe to the latest news from AMD</p>
                    <p className="col-1 m-0 d-flex justify-content-end fs-5">{">"}</p>
                </div>
            </div>
            <div className="container-fluid footerMiddleContainer row d-flex justify-content-between py-5">
                <div className="col-2 footerColumn">
                    <p>Company</p>
                    <ul className="p-md-0 pb-3">
                        <li>About AMD</li>
                        <li>Management Team</li>
                        <li>Corporate Responsibility</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="col-2 footerColumn">
                    <p>News & Events</p>
                    <ul className="p-md-0 pb-3">
                        <li>Newsroom</li>
                        <li>Events</li>
                        <li>Media Library</li>
                    </ul>
                </div>
                <div className="col-2 footerColumn">
                    <p>Community</p>
                    <ul className="p-md-0 pb-3">
                        <li>Support</li>
                        <li>Developer</li>
                        <li>Red Team</li>
                    </ul>
                </div>
                <div className="col-2 footerColumn">
                    <p>Partners</p>
                    <ul className="p-md-0 pb-3">
                        <li>AMD Partner Hub</li>
                        <li>Partner Resource Library</li>
                        <li>Authorized Distributors</li>
                    </ul>
                </div>
                <div className="col-2 footerColumn">
                    <p>Investors</p>
                    <ul>
                        <li>Investor Relations</li>
                        <li>Financial Information</li>
                        <li>Board of Directors</li>
                        <li>Governance Documents</li>
                        <li>SEC Filings</li>
                    </ul>
                </div>
            </div>
            <div className="container-fluid row footerEndContainer m-0 border-top border-2 border-dark">
                <ul className="col-12 d-flex flex-md-row flex-column flex-wrap justify-content-center align-items-center p-0">
                    <li class="endFooterLinks">Terms and Conditions</li>
                    <li class="endFooterLinks">Privacy</li>
                    <li class="endFooterLinks">Trademarks</li>
                    <li class="endFooterLinks">Statement on Forced Labour</li>
                    <li class="endFooterLinks">Fair & Open Competition</li>
                    <li class="endFooterLinks">UK Tax Strategy</li>
                    <li class="endFooterLinks">Cookies Policy</li>
                    <li>Cookies Settings</li>
                </ul>
            </div>
            <div className="container-fluid row d-flex align-self-center" style={{padding: "0 0 64px 0"}}>
                <p className="d-flex justify-content-center" style={{fontSize: "12px"}}>© 2023 Advanced Micro Devices, Inc.</p>
            </div>
        </div>
    );
}
 
export default Footer;