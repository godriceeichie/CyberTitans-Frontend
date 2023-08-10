/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/account.css'
const UserDashboard = () => {
	return (
	<>
		<div className="accountwrp">
			<div className="sidemenu">
				<NavLink to={"/"}>Account</NavLink>
				<NavLink>Orders</NavLink>
				<NavLink>Inbox</NavLink>
				<NavLink>Pending Reviews</NavLink>
				<NavLink>Wishlist</NavLink>
				<NavLink>History</NavLink>
				<NavLink>Account Management</NavLink>
			</div>
			<div className="contentmenu">
				<h1>Account Overview</h1>
			</div>
		</div>
	</>
	);
};

export default UserDashboard;
