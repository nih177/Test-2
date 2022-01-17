import React from "react";
import './nav.css';
import * as ReactBootStrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function NavBar() {
  return (
    <div className="nav-pos navigation-bar">
      <div className="pl0">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid pl0 pr0">
            <a href="/" className="navbar-brand"><img className="logo logo-2" src="images/axonifylogo.png" /></a>
            <button type="button" className="navbar-toggler mr10" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse   align-items-center justify-content-center" id="navbarCollapse">
              <div className="navbar-nav  align-items-center justify-content-center">
                <a href="/" className="nav-item nav-link ">HOME</a>
                {/* <a href="#" className="nav-item nav-link">Profile</a> */}
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle " data-bs-toggle="dropdown">PRODUCTS</a>
                  <div className="dropdown-menu ">
                    <a href="/p1" className="dropdown-item dropdown-bg ">ATOM AC</a>
                    <a href="/destination" className="dropdown-item dropdown-bg ">Destination Charging</a>
                    <a href="/socket" className="dropdown-item dropdown-bg ">Socket</a>
                    <a href="/hybrid-charger" className="dropdown-item dropdown-bg ">Hybrid Charger</a>
                    <a href="/bharath-charger" className="dropdown-item dropdown-bg ">Bharath Charger</a>
                    <a href="/p2" className="dropdown-item dropdown-bg ">DC FAST</a>
                    <a href="/p3" className="dropdown-item dropdown-bg ">ATOM PUBLIC</a>
                    <a href="/p4" className="dropdown-item dropdown-bg ">AGRICELL</a>
                  </div>
                </div>
                <a href="#" className="nav-item nav-link dropdown-toggle">SERVICES</a>
                <a href="/vision-and-mission" className="nav-item nav-link ">ABOUT US</a>
                <a href="/career" className="nav-item nav-link ">CAREERS</a>
                <a href="/contact-us" className="nav-item nav-link ">CONTACT US</a>
                <a href="#" className="nav-item nav-link ">GET IN TOUCH</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;