import React from "react";
import "../../styles/settings.css"

const Shipping = () => {
  return (
    <>
      <div className="ship-view">
        <p id="shp-vw-hd">Shipping Address</p>
        <form id="ad-frm">
            <div className="ad-inp">
                <label>Shipping Address:</label>
                <input type="text" id="addy"/>
            </div>
            <div className="ad-inp">
                <label>Country:</label>
                <input type="text" />
            </div>
            <div className="ad-inp">
                <label>State:</label>
                <input type="text" />
            </div>
            <div className="ad-inp">
                <label>City:</label>
                <input type="text" />
            </div>
            <button>Save Address</button>
        </form>
      </div>
    </>
  );
};

export default Shipping;
