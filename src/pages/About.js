import Navbar from "../components/Navbar"
import "../styles/About.css"
import chat from "../images/chat.png"
import detail from "../images/detail.png"
import service from "../images/cservice.png"
import star from "../images/star.png"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
import about from "../images/about.jpg"
import Sophia from "../images/sophia.jpg"
import Wutche from "../images/wutche.jpg"
import Obinna from "../images/obinna.jpg"
import Fortune from "../images/fortune.jpg"


const About = () => {

    return<>
        <Navbar/>

        <section className="aboutHero">
            <div className="leftAbout">
                <h2>WHO WE <span>ARE</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta corporis aut repellendus porro eius quia eaque explicabo laudantium necessitatibus, aliquam inventore modi in perspiciatis? Earum repellat illum velit quam deleniti!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facere veritatis explicabo quisquam. Veritatis explicabo dignissimos esse, reiciendis, ratione, cumque eius sint natus velit dolore beatae voluptatum non perspiciatis aut.</p>
                <button>Get in touch</button>
            </div>
            <img src={about} alt="" />
        </section>

        <section className="missionWrapper">
            <div className="heading">
                <h2>WHY <span>CHOOSE</span> US</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis dolores enim hic atque, ipsum corporis, quia autem temporibus suscipit sit facilis dolor corrupti recusandae expedita ea? Ullam impedit perspiciatis adipisci.</p>
            </div>
            <div className="missionCardsWrapper">
                <div className="missionCards">
                    <img src={star} alt="" />
                    <h3>Expertise</h3>
                    <p>Lorem ipsum dolor sit amet consectetur,  elit. Iusto laborum molestias reprehenderit a dolorem.</p>
                </div>
                <div className="missionCards">
                    <img src={chat} alt="" />
                    <h3>Communication</h3>
                    <p>Lorem ipsum dolor sit amet consectetur,  elit. Iusto laborum molestias reprehenderit a dolorem.</p>
                </div>
                <div className="missionCards">
                    <img src={detail} alt="" />
                    <h3>Attention to Detail</h3>
                    <p>Lorem ipsum dolor sit amet consectetur,  elit. Iusto laborum molestias reprehenderit a dolorem.</p>
                </div>
                <div className="missionCards">
                    <img src={service} alt="" />
                    <h3>Customer Service</h3>
                    <p>Lorem ipsum dolor sit amet consectetur,  elit. Iusto laborum molestias reprehenderit a dolorem.</p>
                </div>
            </div>
        </section>

        <section className="teamWrapper">
            <div className="heading">
                <h2>MEET THE <span>TEAM</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum quod excepturi recusandae, autem exercitationem neque ipsa nemo, cum explicabo praesentium dolores nam ratione magni reprehenderit quibusdam, est quam debitis.</p>
            </div>
            <div className="teamCardWrapper">
                <div className="teamCard">
                    <img src="" alt="" />
                    <div className="teamCardContent">
                        <h3>Kingsley Henshaw</h3>
                        <p>STUDENT1346180</p>
                    </div>
                </div>
                <div className="teamCard sophia">
                    <img src={Sophia} alt="" />
                    <div className="teamCardContent">
                        <h3>Okosodo Sophia Osewe</h3>
                        <p>STUDENT1373737</p>
                    </div>
                </div>
                <div className="teamCard">
                    <img src={Wutche} alt="" />
                    <div className="teamCardContent">
                        <h3>Wutche Chikaome</h3>
                        <p>STUDENT1384506</p>
                    </div>
                </div>
                <div className="teamCard">
                    <img src={Fortune} alt="" />
                    <div className="teamCardContent">
                        <h3>Fortune Ken Osuh</h3>
                        <p>STUDENT1383723</p>
                    </div>
                </div>
                <div className="teamCard">
                    <img src={Obinna} alt="" />
                    <div className="teamCardContent">
                        <h3>Nwabuisi Obinna Divine</h3>
                        <p>STUDENT1343388</p>
                    </div>
                </div>
                <div className="teamCard">
                    <img src="" alt="" />
                    <div className="teamCardContent">
                        <h3>Godrice Eichie</h3>
                        <p>STUDENT1422116</p>
                    </div>
                </div>
            </div>
        </section>


        <Testimonials/>
        <Footer/>
    </>

}

export default About