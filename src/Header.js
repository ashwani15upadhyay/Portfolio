import { Link } from "react-router-dom"
import React from 'react'

function Header() {
  return (
    <>
    <header id="header">
    <div className="d-flex flex-column">

    <div className="profile">
    <img src="/assets/img/profile-img1.jpg" alt="" className="img-fluid rounded-circle"/>
        <h1 className="text-light"><a href="index.html">Ashwani Upadhyay</a></h1>

        <div className="social-links mt-3 text-center">

          <a href="#" className="google-plus"><i className="bx bxl-github"></i></a>
          <a href="*" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="*" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>

        </div>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><Link to="/" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></Link></li>
          <li><Link to="/about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></Link></li>
          <li><Link to="/resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></Link></li>
          <li><a href="/projects" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Projects</span></a></li>
          <li><a href="/services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Experience</span></a></li>
          <li><Link to="/contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></Link></li>
        </ul>
      </nav>
    </div>
  </header>
    </>
  )
}

export default Header