/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./layout/Root";

import { About, Contact, Faq, Home, Shop, Login, Signup, UserDashboard, History, Inbox, Order, Settings, Wishlist, Products } from "./pages";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Root />}>
						<Route index element={<Home />} />
						<Route path="products" element={<Products />} />
						<Route path="about" element={<About />} />
						<Route path="login" element={<Login />} />
						<Route path="signup" element={<Signup />} />
						<Route path="contact" element={<Contact />} />
						<Route path="account" element={<Account />} />
						<Route path="faq" element={<Faq />} />
						<Route path="accountmanagement" element={<Settings />} />
						<Route path="inbox" element={<Inbox />} />
						<Route path="orders" element={<Order />} />
						<Route path="wishlist" element={<Wishlist />} />
						<Route path="history" element={<History />} />
						<Route path="userDashboard" element={<UserDashboard />} />
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
