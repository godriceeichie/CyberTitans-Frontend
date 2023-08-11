import React from 'react';
import Usersidebar from '../../components/Usersidebar';
import "../../styles/Inbox.css"

const Inbox = () => {
  return (
    <div className="accountwrp">
				<Usersidebar />
				<div className="contentmenu">
        <div className="notification-view">
        <div className="not-bx">
            <div className="nots">
                <p className="not-txt">This is to inform you that the imperial hibiscus plant that you        ordered is on its way to the it is you added</p>
                <div className="btn-fld">
                    <button id="rd">
                      <p>Read</p>
                      {/* <TiTick id="ni"/> */}
                    </button>
                    <button id="dl">
                      <p>Delete</p>
                      {/* <AiFillDelete id="ni"/> */}
                    </button>
                </div>
            </div>
            
        </div>
      </div>
				</div>
			</div>
  );
};

export default Inbox;