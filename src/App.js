/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./layout/Root";

import { About, Contact, Faq, Home, Shop, Signin, Signup, UserDashboard, History, Inbox, Order, Settings, Wishlist } from "./pages";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Root />}>
						<Route index element={<Home />} />
						<Route path="shop" element={<Shop />} />
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
