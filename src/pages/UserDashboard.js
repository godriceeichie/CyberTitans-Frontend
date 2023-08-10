/** @format */

import React from "react";
import Card from "../components/Card";
import CardData from "../Carddetails";
import Usersidebar from "../components/Usersidebar";

import "../styles/account.css";
const UserDashboard = () => {
	const cardItems = CardData.map((item) => {
		return <Card key={item.id} {...item} />;
	});
	return (
		<>
			<div className="accountwrp">
				<Usersidebar />
				<div className="contentmenu">
					<h1 className="acntoverview">Account Overview</h1>
					<div className="carditems">{cardItems}</div>
				</div>
			</div>
		</>
	);
};

export default UserDashboard;
