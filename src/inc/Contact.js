import React from "react"

const Contact = () => {
  return (
    <section id="contact" className="pt-5 pb-5 dark">
      <div className="container">
        <h2 className="text-center">Get in Touch</h2>
        <div className="flex">
          <div className="flex-item flex justify-content-center text-center">
            <h3 className="white">Call or Text</h3>
            <h4 className="white">
              <a className="white" href="tel:519-791-2501">
                519-791-2501
              </a>
            </h4>
            <hr />
            <h3 className="white">Email</h3>
            <h4 className="white">
              <a className="white" href="mailto:celebritymusicjoe@gmail.com">
                celebritymusicjoe@gmail.com
              </a>
            </h4>
          </div>
          <form
            className="flex-item"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="name"
                placeholder="Enter name"
                name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleTextarea">Message</label>
              <textarea
                className="form-control"
                id="exampleTextarea"
                rows="3"
                name="message"
              ></textarea>
            </div>
            <div className="form-group mt-3 text-center">
              <button type="submit" className="btn btn-outline-secondary w-100">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
