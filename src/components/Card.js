/** @format */

import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
const Card = (props) => {
	return (
		<div className="card">
			<h1>
				{props.type}
				<span>
					{" "}
					<MdOutlineAccountCircle />{" "}
				</span>
			</h1>
			<p>{props.name}</p>
		</div>
	);
};

export default Card;
