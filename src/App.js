import React from "react";

import { BrowserRouter as Router} from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/nav/nav";
import LandingPage from "./pages/landing page/landing";
import Footer from "./components/footer/footer";
import Product1 from "./pages/product-1/product-1";
import Product2 from "./pages/product-2/product-2";
import Product3 from "./pages/product-3/product-3";
import Product4 from "./pages/product-4/product-4";
import VisionMission from "./pages/vision-and-mission/vision-mission";
import Contact from "./pages/contact-us/contact-us";
import Career from "./pages/career/career";
import Destination from "./pages/Atom AC Destination Charging/Atom AC Destination Charging"
import Socket from "./pages/Atom AC Socket/Atom AC Socket"
import Hybrid from "./pages/Atom AC Hybrid Charger/Atom AC Hybrid Charger"
import Bharath from "./pages/Atom AC Bharath Charger/Atom AC Bharath Charger"
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="app">
      <NavBar/>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/vision-and-mission' element={<VisionMission/>} />
          <Route path='/p1' element={<Product1 />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/socket' element={<Socket />} />
          <Route path='/hybrid-charger' element={<Hybrid />} />
          <Route path='/bharath-charger' element={<Bharath />} />
          <Route path='/p2' element={<Product2 />} />
          <Route path='/p3' element={<Product3 />} />
          <Route path='/p4' element={<Product4 />} />
          <Route path='/career' element={<Career />} />
          <Route path='/contact-us' element={<Contact />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
