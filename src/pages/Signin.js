import { NavLink } from "react-router-dom"
import "../styles/Signup.css"
import google from "../images/google.png"

const Signin = () => {

    return<>
        <div className="signupWrapper">
            <div className="leftSignup">
            <div className="leftSignupWrapper">
                <div className="signupHeading">
                <h2>Welcome back!</h2>
                <p>Enter your credentials to access your account</p>
                <button><span><img src={google} alt="" /></span> &nbsp; Sign in with google</button>
                </div>
                <div className="or">
                <hr/>
                <p>or</p>
                <hr/>
                </div>
        
                <form action="">
                <div className="inputWrapper">
                    <label for="">Email Address:</label>
                    <input type="text"/>
                </div>
                <div className="inputWrapper">
                    <label for="">Password:</label>
                    <input type="text"/>
                </div>
                <div className="forgotpassword">
                    <a href="">Forgot Password</a>
                </div>
                <button type="submit">Submit</button>
                </form>
                <p className="loginLink">Don't have an account? <NavLink to="/signup">Create your account</NavLink></p>
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

export default Signin