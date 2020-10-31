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

// export default function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarColor03"
//         aria-controls="navbarColor03"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="mobile-logo">
//         <img src={"/fthLogo.png"} alt="" />
//         <img src={"/celebrityLogo.png"} alt="" />
//       </div>

//       <div className="collapse navbar-collapse" id="navbarColor03">
//         <ul className="navbar-nav mr-auto mx-auto">
//           <li className="nav-item">
//             <Link className="nav-link" to="/about">
//               About
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/gallery">
//               Gallery
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/videography">
//               Videography
//             </Link>
//           </li>
//           <Link className="navbar-brand" to="/">
//             <img src={"/fthLogo.png"} alt="" />
//           </Link>
//           <Link className="navbar-brand" to="/">
//             <img src={"/celebrityLogo.png"} alt="" />
//           </Link>
//           <li className="nav-item">
//             <Link className="nav-link" to="/dj-choreography">
//               DJ / choreography
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/blog">
//               Blog
//             </Link>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#contact">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   )
// }
