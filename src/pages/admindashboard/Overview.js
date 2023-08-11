/** @format */

import React from "react";
import "../../styles/admin/overview.css";
import { Adminsidemenu } from "../../components";
const Overview = () => {
	return (
		<>
			<div className="adminwrp">
				<Adminsidemenu />
				<div className="overview">
					<h1>Overview</h1>
				</div>
			</div>
		</>
	);
};

export default Overview;
