import Navbar from "../components/Navbar"
import "../styles/Navbar.css"
import "../styles/Home.css"
import Testimonials from "../components/Testimonials"
import rCaronroad from "../images/rcaronroad.png"
import cardrawing from "../images/cardrawing.svg"
import taxi from "../images/taxi.png"
import box from "../images/delivery.png"
import bus from "../images/bus.png"
import Footer from "../components/Footer"
import booking from "../images/booking.png"

const Home = () => {

    return <>
        {/* <Navbar/> */}

        <section className="hero">
            <div className="leftHero">
                <h1>ADVENTURES ON THE ROAD</h1>
                <h3>Drive with us and get the best experiences and services.</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim sit, laborum alias, beatae ipsam sint temporibus cum exercitationem molestias quae adipisci aut repellendus dignissimos ipsa incidunt sequi libero maiores quas.</p>
                <button>Get Started</button>
            </div>
            <div className="rightHero">
                <img src={rCaronroad} alt="" />
            </div>
            {/* <div className="bottomHeroDesign">
                <img src={cardrawing} alt="" />
            </div> */}
        </section>

        <section className="servicesSection">
            <div className="heading">
                <h2>WHAT WE <span>PROVIDE</span></h2>
                <p>We provide transportation and delivery services with 3 years of experience and to all locations in Nigeria Port Harcourt.</p>
            </div>

            <div className="servicesCardWrapper">
                <div className="serviceCard">
                    <img src={bus} alt="" />
                    <h3>Safe Transportations</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias voluptas quia natus eaque expedita eligendi fuga molestiae autem rem, labore, deserunt numquam cum iure enim!</p>
                </div>
                <div className="serviceCard">
                    <img src={box} alt="" />
                    <h3>Secure Delivery</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias voluptas quia natus eaque expedita eligendi fuga molestiae autem rem, labore, deserunt numquam cum iure enim!</p>
                </div>
                <div className="serviceCard">
                    <img src={taxi} alt="" />
                    <h3>Fast Booking</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias voluptas quia natus eaque expedita eligendi fuga molestiae autem rem, labore, deserunt numquam cum iure enim!</p>
                </div>
            </div>
        </section>

        <section className="bookTicketSection">
            <div className="leftBookTicketAd">
                <h2>BOOK A TICKET WITH US TODAY</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi distinctio nisi impedit dicta enim hic! Sint praesentium laudantium iure nam.</p>
                <button>Buy Ticket</button>
            </div>
            <div className="rightBookTicketAd">
                <img src={booking} alt="" />
            </div>
        </section>
        <Testimonials/>

        {/* <Footer/> */}
        
    </>

}

export default Home