import { NavLink } from "react-router-dom"
import "../styles/Signup.css"
import google from "../images/google.png"

const Signup = () => {

    return<>
        <div className="signupWrapper">
        <div className="leftSignup">
            <div className="leftSignupWrapper">
            <div className="signupHeading">
                <h2>Create your account</h2>
                <p>Let's get started with (company name) and give you the best experience</p>
                <button><span><img src={google} alt="" /></span> &nbsp; Sign up with google</button>
            </div>
            <div className="or">
                <hr/>
                <p>or</p>
                <hr/>
            </div>
        
            <form action="">
                <div className="inputWrapper">
                    <label for="">First Name:</label>
                    <input type="text"/>
                </div>
                <div className="inputWrapper">
                    <label for="">Last Name:</label>
                    <input type="text"/>
                </div>
                <div className="inputWrapper">
                    <label for="">Email Address:</label>
                    <input type="text"/>
                </div>
                <div className="inputWrapper">
                    <label for="">Password:</label>
                    <input type="text"/>
                </div>
                <div className="checkboxWrapper">
                    <input type="checkbox" name="" id=""/>
                    <p>I agree to the terms and condition</p>
                </div>
                <button type="submit">Submit</button>
            </form>
            <p className="loginLink">Already have an account? <NavLink  to="/signin">login</NavLink></p>
            </div>
        </div>
    
        <div className="rightSignupWrapper">
            <div className="rightSignup">
            <div className="rightSignupWrapperContent">
                <h2>Discover the best items/transportation </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sunt amet nemo officiis, fugiat porro pariatur beatae quasi</p>
            </div>
            </div>
        </div>
        </div>

    </>

}

export default Signup