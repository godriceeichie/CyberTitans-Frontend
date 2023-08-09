import "../styles/Navbar.css"
import { NavLink } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)

    const activeStyle = {
        color: "#003498",
        fontWeight: 500
    }

    const ShowNavbar = () => {
        if (window.innerWidth < 1000) {
            showNav ? setShowNav(false) : setShowNav(true)
        }
    }

    return<>
        <nav>
            <div className="logo">
                <h3>CyberTitans</h3>
            </div>
            <ul className="menu">
                <li><NavLink to="/" style = {({isActive}) => isActive? activeStyle : undefined} end>Home</NavLink></li>
                <li><NavLink to="/about" style = {({isActive}) => isActive? activeStyle : undefined} end>About</NavLink></li>
                <li><NavLink>Services</NavLink></li>
                <li><NavLink to="/contact" style = {({isActive}) => isActive? activeStyle : undefined} end>Contact Us</NavLink></li>
            </ul>
            <div className="navButtonWrapper">
                <NavLink to="/signup"><button>Create Account</button></NavLink>
                <NavLink to="/signin"> <button>Signin</button></NavLink>
                <span class={showNav || window.innerWidth > 1000 ? "hide" : "material-symbols-outlined"} onClick={ShowNavbar}>menu</span>
                <span class={!showNav ? "hide" : "material-symbols-outlined"} onClick={() => setShowNav(false)}>close</span>
            </div>
            
            {/* <ul className="profileWrapper">
                <span class="material-symbols-outlined">notifications</span>
                <div className="profile">
                    <img src="" alt="" />
                    <p>John Doe</p>
                </div>
                
            </ul> */}
            
        </nav>
        <div className={showNav ? "responsivenav" : "hide"}>
            <ul className="menu">
                <li><NavLink to="/" style = {({isActive}) => isActive? activeStyle : undefined} end>Home</NavLink></li>
                <li><NavLink to="/about" style = {({isActive}) => isActive? activeStyle : undefined} end>About</NavLink></li>
                <li><NavLink>Services</NavLink></li>
                <li><NavLink>Contact Us</NavLink></li>
            </ul>
            <div className="navButtonWrapper">
                <NavLink to="/signup"><button>Create Account</button></NavLink>
               <NavLink to="/sgnin"> <button>Signin</button></NavLink>
            </div>
        </div>
    </>

}

export default Navbar