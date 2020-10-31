import { Link } from "gatsby"
import React from "react"
import { Nav, Navbar } from "react-bootstrap"

export default function Navigation() {
  return (
    <Navbar expand="lg" bg="light" fixed="top">
      <Navbar.Toggle aria-controls="navbarResponsive" />
      <Navbar.Brand href="/" className="mobile-logo">
        <img src={"/fthLogo.png"} alt="" />
        <img className="ml-3" src={"/celebrityLogo.png"} alt="" />
      </Navbar.Brand>
      <Navbar.Collapse id="navbarResponsive">
        <Nav as="ul" className="mx-auto">
          <Nav.Item as="li">
            <Link to="/about" className="nav-link" activeClassName="active">
              About
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/gallery" className="nav-link" activeClassName="active">
              Gallery
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link
              to="/videography"
              className="nav-link"
              activeClassName="active"
            >
              Videography
            </Link>
          </Nav.Item>
          <Navbar.Brand href="/" className="large-logo">
            <img src={"/fthLogo.png"} alt="" />
            <img className="ml-5" src={"/celebrityLogo.png"} alt="" />
          </Navbar.Brand>
          <Nav.Item as="li">
            <Link
              to="/dj-choreography"
              className="nav-link"
              activeClassName="active"
            >
              DJ/Choreograpy
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/blog" className="nav-link" activeClassName="active">
              Blog
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="#contact" className="nav-link" activeClassName="active">
              Contact
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
