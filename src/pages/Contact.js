import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Testimonials from "../components/Testimonials"
import "../styles/Contact.css"
import chat from "../images/chat2.png"
import call from "../images/call.png"
import location from "../images/location.png"
import { ContactDetails, ContactForm, ContactHero } from "../components"

const Contact = () => {

    return(
        <>
            <ContactHero />
            <ContactDetails />
            <ContactForm />
        </>
    )

}

export default Contact