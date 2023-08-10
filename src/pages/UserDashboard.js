/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../components/Card";
import CardData from "../Carddetails";
import { FaUserAstronaut } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { MdOutlineRateReview } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { GrHistory } from "react-icons/gr";

import "../styles/account.css";
const UserDashboard = () => {
	const cardItems = CardData.map((item) => {
		return <Card key={item.id} {...item} />;
	});
	return (
		<>
			<div className="accountwrp">
				<div className="sidemenu">
					<NavLink to={"/account"}>
						{" "}
						<span>
							<FaUserAstronaut className="icon" />
						</span>{" "}
						Account
					</NavLink>

					<NavLink to={"/orders"}>
						{" "}
						<span>
							{" "}
							<BsShop className="icon" />{" "}
						</span>{" "}
						Orders
					</NavLink>

					<NavLink to={"/inbox"}>
						{" "}
						<span>
							{" "}
							<MdOutlineEmail className="icon" />{" "}
						</span>{" "}
						Inbox
					</NavLink>
					{/* <NavLink>
						{" "}
						<span>
							<MdOutlineRateReview className="icon" />
						</span>{" "}
						Pending Reviews
					</NavLink> */}
					<NavLink to={"/wishlist"}>
						{" "}
						<span>
							<AiOutlineHeart className="icon" />
						</span>{" "}
						Wishlist
					</NavLink>
					<NavLink to={"/history"}>
						{" "}
						<span>
							<GrHistory className="icon history" />
						</span>{" "}
						History
					</NavLink>
					<NavLink to={"/accountmanagement"}>Account Management</NavLink>
				</div>
				<div className="contentmenu">
					<h1 className="acntoverview">Account Overview</h1>
					<div className="carditems">{cardItems}</div>
				</div>
			</div>
		</>
	);
};

export default UserDashboard;
