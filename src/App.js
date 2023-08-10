import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./layout/Root";
import { About, Contact, Faq, Home, Products, Signin, Signup } from "./pages";
import { Forgotpassword } from "./components";

function App() {
  return<>
    <Router>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="signin" element={<Signin/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="faq" element={<Faq/>}/>
          </Route>
          
        </Routes>
    </Router>
  </>
}

export default App;
