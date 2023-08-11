/** @format */

import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import React, { useState } from 'react';
import Root from "./layout/Root";
import Adminroot from "./layout/Adminroot";
import {
	About,
	Contact,
	Faq,
	Home,
	Login,
	Signup,
	Account,
	History,
	Order,
	Settings,
	Wishlist,
	Products,
	UserDashboard,
	Overview,
	Cart,
	UserRoot,
} from "./pages";

function App() {
	const [cartItems, setCartItems] = useState([]);
	return (
		<>
			<Router>
			
				<Routes>
					<Route path="/" element={<Root />}>
						<Route index element={<Home />} />
						<Route path="/products" element={<Products cartItems={cartItems} setCartItems={setCartItems} />} />
						<Route path="about" element={<About />} />
						<Route path="login" element={<Login />} />
						<Route path="signup" element={<Signup />} />
						<Route path="contact" element={<Contact />} />
						<Route path="account" element={<Account />} />
						<Route path="faq" element={<Faq />} />
						<Route path="accountmanagement" element={<Settings />} />
						<Route path="orders" element={<Order />} />
						<Route path="wishlist" element={<Wishlist />} />
						<Route path="history" element={<History />} />
						
						
					</Route>
					<Route path="/user/" element={<UserRoot/>}>
						<Route path="userDashboard" element={<UserDashboard />} />
					</Route>
					<Route path="/admin/" element={<Adminroot />}>
						<Route path="overview" element={<Overview />} />
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
