import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
// import logo from './logo.svg';
import { ReactDOM } from "react";
import './App.css';
import Header from './Header';
// import Footer from './Footer';
import About from './About';
import Home from './Home';
import Contact from './Contact'
import Resume from "./Resume";

function App() {
  return (
   <>
   <Router>
   <Header />
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/about" element={<About />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/resume" element={<Resume />} />
   </Routes>
   {/* <Footer /> */}
   </Router>
   </>
  );
}

export default App;
