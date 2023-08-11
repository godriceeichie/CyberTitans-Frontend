/** @format */

import React from "react";
import { Adminsidemenu } from "../components";
import { Outlet } from "react-router";
const Adminroot = () => {
	return (
		<div>
			<Adminsidemenu />
			<Outlet />
		</div>
	);
};

export default Adminroot;
