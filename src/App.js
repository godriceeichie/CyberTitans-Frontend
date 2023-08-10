import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./layout/Root";

import { About, Contact, Faq, Home, Shop, Signin, Signup } from "./pages";

function App() {
  return<>
  
    <Router>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home/>}/>
            <Route path="shop" element={<Shop />}/>
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
