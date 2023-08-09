import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Testimonials from "../components/Testimonials"
import "../styles/Contact.css"
import chat from "../images/chat2.png"
import call from "../images/call.png"
import location from "../images/location.png"

const Contact = () => {

    return<>

        
        <section className="contactusWrapper">
            <div className="leftContactus">
                <div className="leftContactusWrapper">
                    <div className="contactusHeading">
                        <h2>Get in touch</h2>
                        <p>Our friendly team would love to hear from you!</p>
                    </div>
                    <form action="">
                        <div className="inputContainer">
                            <div className="inputWrapper">
                                <label for="">Firstname:</label>
                                <input type="text" name="" id=""/>
                            </div>
                            <div className="inputWrapper">
                                <label for="">Lastname:</label>
                                <input type="text" name="" id=""/>
                            </div>
                        </div>
                        <div className="inputWrapper">
                            <label for="">Email Address:</label>
                            <input type="text" name="" id=""/>
                        </div>
                        <div className="inputWrapper">
                            <label for="">Phone Number:</label>
                            <input type="tel" name="" id=""/>
                        </div>
                        <div className="inputWrapper">
                            <label for="">Message:</label>
                            <textarea name="" id="" cols="30" rows="5"></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div className="rightContactus">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d885.0513431140979!2d7.058799515137421!3d4.852956703553796!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cdcf5a4f50cd%3A0x498d1cbc72ac4cd0!2sAptech%20Computer%20Education!5e0!3m2!1sen!2sng!4v1689731654300!5m2!1sen!2sng" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
        <section className="contactDetails">
            <div className="contactDetailsHeading">
                <h2>We'd love to hear from you</h2>
                <p>You can reach us through the following means on any inquiries, complaint and report you have.</p>
            </div>
            <div className="contactDetailsCard">
                <div className="contactCard">
                    <img src={chat} alt="" />
                    <div className="contactCardDetails">
                        <h3>Chat to us</h3>
                        <p>Speak to our friendly team</p>
                        <p>email@gmail.com</p>
                    </div>
                </div>
                <div className="contactCard">
                    <img src={location} alt="" />
                    <div className="contactCardDetails">
                        <h3>Visit us</h3>
                        <p>Visit our office HQ.</p>
                        <p>Aptech Computer education, Beside Shell I.A</p>
                    </div>
                </div>
                <div className="contactCard">
                    <img src={call} alt="" />
                    
                    <div className="contactCardDetails">
                        <h3>Call us</h3>
                        <p>Mon-Fri from 8am to 5pm</p>
                        <p>+23410234567</p>
                    </div>
                </div>
            </div>
        </section>

        <Testimonials/>

    </>

}

export default Contact