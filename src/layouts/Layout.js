import React from "react"
import "../styles/bootstrap.min.css"
// import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../inc/Navbar"
import Contact from "../inc/Contact"
import Footer from "../inc/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Contact />
      <Footer />
    </>
  )
}

export default Layout
