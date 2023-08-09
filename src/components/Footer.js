import { NavLink } from "react-router-dom"
import "../styles/Footer.css"
import fb from "../images/facebook.png"
import maps from "../images/maps.png"


const Footer = () => {

    return<>
        <footer>
            <div className={"leftFooter"}>
                <h2 className="logo">CyberTitans</h2>
                <p>Welcome to our Entertainment Company! We take pride in being your one-stop destination for all things music, movies, and creativity.</p>
                <div className={"socialIcons"}>
                    <NavLink to="/"><img src={fb} alt="Facebook Logo" /></NavLink>
                    <NavLink to="/"><img src={maps} alt="instagram Logo" /></NavLink>
                </div>
            </div>

            <div className={"rightFooter"}>
            
                <div className={"rightFooterContent"}>
                    <ul>
                        <h3>Quick Links</h3>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/contact">Contact Us</NavLink>

                    </ul>
                </div>

                <div className={"rightFooterContent"}>
                    <ul>
                        <h3>Services</h3>
                        <li>Private Car Hiring</li>
                        <li>Bust Transportation</li>
                        <li>Package Delivery</li>
                        <li>Car Transportation</li>
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