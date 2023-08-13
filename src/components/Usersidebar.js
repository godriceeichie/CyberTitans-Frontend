/** @format */

import React from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { GrHistory } from "react-icons/gr";
import { BsFillPersonFill } from "react-icons/bs"
import { NavLink } from "react-router-dom";

const Usersidebar = () => {
	return (
		<div className="sidemenu">
			<NavLink to={"/account"}>
				{" "}
				<span>
					<FaUserAstronaut className="icon" />
				</span>{" "}
				<p>Account</p>
			</NavLink>

			<NavLink to={"/orders"}>
				{" "}
				<span>
					{" "}
					<BsShop className="icon" />{" "}
				</span>{" "}
				<p>Orders</p>
			</NavLink>
			<NavLink to={"/wishlist"}>
				{" "}
				<span>
					<AiOutlineHeart className="icon" />
				</span>{" "}
				<p>Wishlist</p>
			</NavLink>
			<NavLink to={"/accountmanagement"}>
				{" "}
				<span>
					<BsFillPersonFill className="icon"/>
				</span>
				<p>Profile</p>
				</NavLink>
		</div>
	);
};

export default Usersidebar;
