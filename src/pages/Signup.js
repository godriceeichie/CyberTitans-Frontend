import { NavLink } from "react-router-dom"
import "../styles/Signup.css"
import google from "../images/google.png"
import axios from "axios"
import {useState} from "react"

const Signup = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        agreed: false,
    });
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("your_signup_endpoint_here", formData);
            console.log("Signup successful:", response.data);
        } catch (error) {
            console.error("Signup error:", error);
        }
    };


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
        
            <form onSubmit={handleSubmit}>
                <div className="inputWrapper">
                    <label for="">First Name:</label>
                    <input type="text" value={formData.firstName} onChange={handleChange}/>
                </div>
                <div className="inputWrapper">
                    <label for="">Last Name:</label>
                    <input type="text" value={formData.laststName} onChange={handleChange}/>
                </div>
                <div className="inputWrapper">
                    <label for="">Email Address:</label>
                    <input type="text"  value={formData.email} onChange={handleChange}/>
                </div>
                <div className="inputWrapper">
                    <label for="">Password:</label>
                    <input type="text"  value={formData.password} onChange={handleChange}/>
                </div>
                <div className="checkboxWrapper">
                    <input type="checkbox" name="" id=""  value={formData.agreed} onChange={handleChange}/>
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