import React from 'react';
import Usersidebar from './../../components/Usersidebar';
import "../../styles/setting.css"

const Settings = () => {
  return (
    <div className="accountwrp">
				<Usersidebar   />
				<div className="settmenu">
            <div className='set-con'>
              <div className='set-nav'>
                <button>Edit Profile</button>
                <button>Shipping</button>
                <button>Security</button>
              </div>
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
            </div>
        </div>
      </div>
  );
};

export default Settings;