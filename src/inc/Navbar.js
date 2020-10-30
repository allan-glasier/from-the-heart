import { Link } from "gatsby"
import React from "react"

import "../styles/bootstrap.min.css"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav mr-auto mx-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gallery">
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/videography">
              Videography
            </Link>
          </li>
          <Link className="navbar-brand" to="/">
            <img src={"/fthLogo.png"} alt="" />
          </Link>
          <Link className="navbar-brand" to="/">
            <img src={"/celebrityLogo.png"} alt="" />
          </Link>
          <li className="nav-item">
            <Link className="nav-link" to="/dj-choreography">
              DJ / choreography
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
