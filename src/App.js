import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Root from "./layout/Root";
import Faq from "./pages/Faq";

function App() {
  return<>
  <Faq/>
    {/* <Router>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="signin" element={<Signin/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="contact" element={<Contact/>}/>
          </Route>
          
        </Routes>
    </Router> */}
  </>
}

export default App;
