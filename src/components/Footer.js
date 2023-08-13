import { NavLink } from "react-router-dom"
import "../styles/Footer.css"
import fb from "../images/facebook.png"
import maps from "../images/maps.png"
import Logo from "./Logo"
import '../styles/Navbar.css'

const Footer = () => {

    return<>
        <footer>
            <div className={"leftFooter"}>
                <Logo />
                <p>Bringing nature to your doorstep. Explore our curated collection of vibrant plants. Elevate your space with green elegance</p>
                <div className={"socialIcons"}>
                    <NavLink to="/"><img src={fb} alt="Facebook Logo" /></NavLink>
                    <NavLink to="/"><img src={maps} alt="instagram Logo" /></NavLink>
                </div>
            </div>

            <div className={"rightFooter"}>
            
                <div className={"rightFooterContent"}>
                    <ul>
                        <h3>Quick Links</h3>
                        <NavLink to={'/'} className={'navbar__link'}>Home</NavLink>
                        <NavLink to={'/products'} className={'navbar__link'}>Products</NavLink>
                        <NavLink to={'/faq'} className={'navbar__link'}>FAQ</NavLink>
                        <NavLink to={'/about'} className={'navbar__link'}>About Us</NavLink>
                        <NavLink to={'/contact'} className={'navbar__link'}>Contact Us</NavLink>

                    </ul>
                </div>

                <div className={"rightFooterContent"}>
                    <ul>
                        <h3>Services</h3>
                        <li>Order Tracking</li>
                        <li>Plants</li>
                        <li>Package Delivery</li>
                        <li>Plants Accessories</li>
                    </ul>
                </div>

                <div className={"rightFooterContent"}>
                    <ul>
                        <h3>Office</h3>
                        <li>+2348104009853</li>
                        <li>Aptech Computer Education,<br/> Beside Shell IA, Rumuobiakani, <br/> Port Harcourt</li>
                    </ul>
                </div>

                <div className={"rightFooterContent"}>
                    <ul>
                        <h3>Company</h3>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

            </div>
        </footer>
        <div className={"copyright"}>
            <p>All Rights Reserved. CyberaTitans</p>
        </div>
    </>

}

export default Footer