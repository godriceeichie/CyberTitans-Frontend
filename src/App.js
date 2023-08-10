/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./layout/Root";
import UserDashboard from "./pages/UserDashboard";

import { About, Contact, Faq, Home, Signin, Signup } from "./pages";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Root />}>
						<Route index element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="signin" element={<Signin />} />
						<Route path="signup" element={<Signup />} />
						<Route path="contact" element={<Contact />} />
						<Route path="login" element={<Faq />} />
						<Route path="/account" element={<UserDashboard />} />
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
