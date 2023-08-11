import {React, useState} from 'react';
import Usersidebar from '../../components/Usersidebar';
import { Bars, TailSpin } from 'react-loader-spinner';
import "../../styles/settings.css"

const Settings = () => {

  return (
    <>
      <div className="accountwrp">
        <Usersidebar />
        <div className="contentmenu">
          <div className="cont-hd">
              <p>My Settings</p>
              <div className="cont-nav">
                <button className="active">Edit Profile</button>
                <button>Shipping</button>
                <button>Security</button>
              </div>
          </div>
          <div className="main-cont">
              <div className="prof-img">
                {/* <img src={} alt="" /> */}
              </div>
              <form className="edit-prf"></form>
          </div>
        </div>
      </div>
    </>
  );
};


export default Settings;