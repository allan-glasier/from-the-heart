import React from "react"
import "../styles/bootstrap.min.css"

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav mr-auto mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Gallery
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Film
            </a>
          </li>
          <a class="navbar-brand" href="#">
            From The Heart
          </a>
          <a class="navbar-brand" href="#">
            |
          </a>
          <a class="navbar-brand" href="#">
            Celebrity Music
          </a>
          <li class="nav-item">
            <a class="nav-link" href="#">
              DJ / choreography
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Blog
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
