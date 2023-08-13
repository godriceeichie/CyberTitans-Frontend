import React, {useState} from 'react';
import Usersidebar from './../../components/Usersidebar';
import "../../styles/setting.css"
import { FcShipped } from "react-icons/fc"
import { BsFillLockFill } from "react-icons/bs"
import Swal from 'sweetalert2';
import axios from 'axios';
import Cookies from 'js-cookie';

const Settings = () => {
  const [displayEditProfile, setDisplayEditProfile] = useState(true);
  const [displayShipping, setDisplayShipping] = useState(false);
  const [displaySecurity, setDisplaySecurity] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phoneNumber: "",
  });
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditProfileClick = () => {
    setDisplayEditProfile(true);
    setDisplayShipping(false);
    setDisplaySecurity(false);
  };
  const handleShippingClick = () => {
    setDisplayEditProfile(false);
    setDisplayShipping(true);
    setDisplaySecurity(false);
  };
  const handleSecurityClick = () => {
    setDisplayEditProfile(false);
    setDisplayShipping(false);
    setDisplaySecurity(true);
  };
  const token = Cookies.get("USER_TOKEN");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        "http://localhost:8081/api/v1/auth/update",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.status === 200) {
        Swal.fire({
          title: "Success",
          text: "User details updated successfully",
          icon: "success",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred while updating user details",
        icon: "error",
      });
    }
  };

  const handlePassword = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get("USER_TOKEN"); // Get the user token from the cookie

      const response = await axios.patch(
        "http://localhost:8081/api/v1/auth/updatePassword",
        {
          oldPassword,
          newPassword,
          confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      if (response.status === 200) {
        Swal.fire({
          title: "Success",
          text: "Password updated successfully",
          icon: "success",
        });
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred while updating the password",
        icon: "error",
      });
    }
  };

  return (
    <div className="accountwrp">
				<Usersidebar   />
				<div className="settmenu">
            <div className='set-con'>
              <div className='set-nav'>
              <button onClick={handleEditProfileClick} style={displayEditProfile ? { borderBottom: '2px solid #58c90293', transition: '0.7s' } : {}}>Edit Profile</button>
              <button onClick={handleShippingClick} style={displayShipping ? { borderBottom: '2px solid #58c90293', transition: '0.7s' } : {}}>Shipping</button>
                <button onClick={handleSecurityClick} style={displaySecurity ? { borderBottom: '2px solid #58c90293', transition: '0.7s' } : {}}>Security</button>
              </div>
              {displayEditProfile ? (
              <div className='edit-prf-bx'>
                <div className='prf-img'>
                  <img src={"../../assets/aloe-vera-img.webp"} alt="" />
                </div>
                <div className='prf-frm'>
                  <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='First Name' name="firstname" value={formData.firstname} onChange={handleChange}/>
                    <input type="text" placeholder='lastName' name="lastname" value={formData.lastname} onChange={handleChange}/>
                    <input type="text" placeholder='User Name' name="username" value={formData.username} onChange={handleChange}/>
                    <input type="text" placeholder='Email'  name="email" value={formData.email} onChange={handleChange}/>
                    <input type="text" placeholder='Phone Number' name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
                    <button type="submit">Edit Profile</button>
                  </form>
                </div>
              </div>
              ) : null}
               {displayShipping ? (
              <div className='shp-ad-bx'>
              <div className='shp-img'>
                  <div className='shp-i-hld'>
                    <FcShipped id='shp-i'/> 
                  </div>
              </div>
              <div className='shp-frm'>
                  <form>
                    <input type="text" placeholder='Address'/>
                    <input type="text" placeholder='Country'/>
                    <input type="text" placeholder='State'/>
                    <input type="text" placeholder='City'/> 
                    <button>Save</button>
                  </form>
                </div>
              </div>
              ) : null}
              {displaySecurity ? (
               <div className='sec-ad-bx'>
               <div className='shp-img'>
                  <div className='shp-i-hld'>
                    <BsFillLockFill id='sec-i'/> 
                  </div>
              </div>
              <form className='sec-frm-bx' onSubmit={handlePassword}>
                  <input type="text" placeholder='Enter Old Password' value={oldPassword} onChange={(e) => setOldPassword(e.target.value)}required/>
                  <input type="password" placeholder='Enter New Password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)}required/>
                  <input type="password" placeholder='Confirm New Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}required/>
                  <button type="submit">Change Password</button>
              </form>
               </div>
            ) : null}
            </div>
        </div>
      </div>
  );
};

export default Settings;