import React, {useState} from 'react';
import Usersidebar from './../../components/Usersidebar';
import "../../styles/setting.css"
import { FcShipped } from "react-icons/fc"
import { BsFillLockFill } from "react-icons/bs"

const Settings = () => {
  const [displayEditProfile, setDisplayEditProfile] = useState(true);
  const [displayShipping, setDisplayShipping] = useState(false);
  const [displaySecurity, setDisplaySecurity] = useState(false);

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
                  <form>
                    <input type="text" placeholder='Username'/>
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='Email'/>
                    <input type="text" placeholder='D.O.B'/>
                    <input type="text" placeholder='Address'/>
                    <button>Edit Profile</button>
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
              <form className='sec-frm-bx'>
                  <input type="text" placeholder='Enter Old Password'/>
                  <input type="password" placeholder='Enter New Password'/>
                  <input type="password" placeholder='Confirm New Password'/>
                  <button>Change Password</button>
              </form>
               </div>
            ) : null}
            </div>
        </div>
      </div>
  );
};

export default Settings;