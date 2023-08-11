/** @format */

import React from "react";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaShopify } from "react-icons/fa";
import { MdInventory } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
const Adminsidemenu = () => {
	return (
		<div className="adminsidemenu">
			<div className="navitems">
				<Logo />

				<div className="navlinks">
					<NavLink>
						{" "}
						<span>
							{" "}
							<RiDashboard2Fill />{" "}
						</span>
						Overview
					</NavLink>
					<NavLink>
						{" "}
						<span>
							{" "}
							<FaShopify />{" "}
						</span>
						Orders
					</NavLink>
					<NavLink>
						{" "}
						<span>
							<MdInventory />
						</span>
						Inventory
					</NavLink>
					<NavLink>
						{" "}
						<span>
							<VscFeedback />
						</span>
						Reviews
					</NavLink>
				</div>
			</div>

			<div className="settings">
				<NavLink>Settings</NavLink>
				<NavLink>Log Out</NavLink>
			</div>
		</div>
	);
};

export default Adminsidemenu;
