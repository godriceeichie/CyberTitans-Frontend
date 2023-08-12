/** @format */

import React from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { GrHistory } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Usersidebar = () => {
	return (
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
			<NavLink to={"/wishlist"}>
				{" "}
				<span>
					<AiOutlineHeart className="icon" />
				</span>{" "}
				Wishlist
			</NavLink>
			<NavLink to={"/accountmanagement"}>Account Management</NavLink>
		</div>
	);
};

export default Usersidebar;
