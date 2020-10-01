import React from "react"

const Contact = () => {
  return (
    <section className="pt-5 pb-5 dark">
      <div className="container">
        <h2 className="text-center">Get in Touch</h2>
        <div className="flex">
          <div className="flex-item">
            <h3 className="text-muted">Add google maps?</h3>
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
