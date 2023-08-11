/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
	Inbox,
	Order,
	Settings,
	Wishlist,
	Products,
	UserDashboard,
	Overview,
	Cart,
	Checkout,
} from "./pages";

function App() {
	const [cartItems, setCartItems] = useState([]);
	  const [isCartModalOpen, setIsCartModalOpen] = useState(false); // State for cart modal

	   const handleCartModalOpen = () => {
    setIsCartModalOpen(true);
  };

  const handleCartModalClose = () => {
    setIsCartModalOpen(false);
  };

	return (
		<>
			<Router>
			
				<Routes>
					<Route path="/" element={<Root />}>
						<Route index element={<Home />} />
						<Route path="/products" element={<Products cartItems={cartItems} setCartItems={setCartItems} />} />
						<Route path="about" element={<About />} />
						<Route path="contact" element={<Contact />} />
						<Route path="account" element={<Account />} />
						<Route path="faq" element={<Faq />} />
						<Route path="accountmanagement" element={<Settings />} />
						<Route path="inbox" element={<Inbox />} />
						<Route path="orders" element={<Order />} />
						<Route path="wishlist" element={<Wishlist />} />
						<Route path="history" element={<History />} />
						<Route path="userDashboard" element={<UserDashboard />} />
						<Route path="cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} handleCartModalOpen={handleCartModalOpen} />} />
						<Route path="checkout" element={<Checkout />} />
					</Route>
					<Route path="/admin/" element={<Adminroot />}>
						<Route path="overview" element={<Overview />} />
					</Route>
					<Route path="/auth">
						<Route path="login" element={<Login />} />
						<Route path="signup" element={<Signup />} />
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
