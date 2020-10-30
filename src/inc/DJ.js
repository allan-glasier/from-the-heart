import { Link } from "gatsby"
import React from "react"

const Photography = () => {
  return (
    <section className="section container">
      <h2 className="text-center">Celebrity Music DJ / Choreography</h2>
      <div className="flex">
        <div className="flex-item">
          <p>
            Choosing a song because its a hit is simple. You might as well use
            and iPod. Having someone represent, MC, coordinate and play the 2nd
            song and keep your dance floor packed all night is priceless. (Yes,
            I stole that phrase).
          </p>

          <div className="text-center">
            <Link to="/dj-choreography" className="btn btn-outline-primary">
              Additional Info
            </Link>
          </div>
        </div>
        <div className="flex-item">
          <img
            className="img-shadow"
            src="https://images.unsplash.com/photo-1596375357724-d016d2bde078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default Photography
