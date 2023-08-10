/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./layout/Root";
import UserDashboard from "./pages/UserDashboard";
import Settings from "./pages/account/Settings";
import History from "./pages/account/History";
import Inbox from "./pages/account/Inbox";
import Order from "./pages/account/Order";
import Wishlist from "./pages/account/Wishlist";
import { About, Contact, Faq, Home, Products, Signin, Signup } from "./pages";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Root />}>
						<Route index element={<Home />} />
						<Route path="products" element={<Products />} />
						<Route path="about" element={<About />} />
						<Route path="signin" element={<Signin />} />
						<Route path="signup" element={<Signup />} />
						<Route path="contact" element={<Contact />} />
						<Route path="account" element={<UserDashboard />} />
						<Route path="faq" element={<Faq />} />
						<Route path="accountmanagement" element={<Settings />} />
						<Route path="inbox" element={<Inbox />} />
						<Route path="orders" element={<Order />} />
						<Route path="wishlist" element={<Wishlist />} />
						<Route path="history" element={<History />} />
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
