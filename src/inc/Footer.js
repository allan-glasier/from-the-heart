import React from "react"

const Footer = () => {
  return (
    <footer className="text-center dark pb-3">
      <p className="m-0">
        &copy;  {new Date().getFullYear()} Developed by{" "}
        <a href="mailto:allan@phoenixdesing.ca">Phoenix Design</a>
      </p>
    </footer>
  )
}

export default Footer
