import React from "react";
import Usersidebar from "../../components/Usersidebar";
import {AiOutlineClose} from "react-icons/ai"
import "../../styles/wishlist.css"

const Wishlist = () => {
  return (
    <div className="accountwrp">
      <Usersidebar />
      <div className="wishmenu">
        <p>My WishList</p>
        <div className="wish-con">
          <div className="wishbx">
            <div className="img-hld"></div>
            <div className="txt-hld">
              <p className="itm-nm">Royal Cactus Hibiscus</p>
              <p className="itm-dsc">This is a plant of which has many various things about it and so on and so forth there are more descriptions to be added to this but i no them not</p>
            </div>
            <div className="icn-hld">
              <AiOutlineClose/>
              <p className="itm-prc">$12.99</p>
              <button className="atc">Add To Cart</button>
            </div>
          </div>
          <div className="wishbx"></div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
