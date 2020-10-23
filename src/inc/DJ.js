import React from "react"

const Photography = () => {
  return (
    <section className="section container pt-5 pb-5">
      <h2 className="text-center">Celebrity Music DJ / Choreography</h2>
      <div className="flex">
        <div className="flex-item pr-5">
          <p>
            Choosing a song because its a hit is simple. You might as well use
            and iPod. Having someone represent, MC, coordinate and play the 2nd
            song and keep your dance floor packed all night is priceless. (Yes,
            I stole that phrase).
          </p>

          <div className="text-center">
            <a href="#" className="btn btn-outline-primary">
              Additional Info
            </a>
          </div>
        </div>
        <div className="flex-item">
          <img
            src="https://images.unsplash.com/photo-1596375357724-d016d2bde078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default Photography
