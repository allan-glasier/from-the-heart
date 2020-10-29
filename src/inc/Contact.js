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
              Office:&nbsp;
              <a className="white" href="tel:519-966-0442">
                519-966-0442
              </a>
              <br />
              Cell:&nbsp;
              <a className="white" href="tel:519-791-2501">
                519-791-2501
              </a>
            </h4>
          </div>
          <form className="flex-item" action="">
            <div class="form-group">
              <label for="name">Your Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                aria-describedby="name"
                placeholder="Enter name"
              />
            </div>
            <div class="form-group">
              <label for="email">Your Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleTextarea">Message</label>
              <textarea
                class="form-control"
                id="exampleTextarea"
                rows="3"
              ></textarea>
            </div>
            <div className="form-group">
              <p>[Captcha Here]</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
