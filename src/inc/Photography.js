import { Link } from "gatsby"
import React from "react"

const Photography = () => {
  return (
    <section className="section container pt-5 pb-5">
      <h2 className="text-center">From the Heart Photography</h2>
      <div className="flex">
        <div className="flex-item pr-5">
          <p>
            Before booking a photographer, allow me to take you for an
            engagement session for free to establish if we bond (to get a feel
            for one another) and show you the quality of pictures for your day.
            After 10 years of working with an array of professional
            photographers, I was able to establish From the Heart Photography 15
            years ago, blending all the best attributes of my colleagues and
            removing the boredom and rules of time that a lot in the industry
            have.
          </p>
          <p>
            Its now been 15 years of wedding photography with professionalism of
            uniform, equipment and results adding a sense of relaxation to the
            bride, groom and wedding party giving full day coordination along
            with it. An iPhone can now take an awesome picture so careful of why
            you’re investing in a camera that someone carries rather than the
            person behind it. We also include standard video with all
            photography packages.
          </p>
          <div className="text-center">
            <Link to="/gallery" className="btn btn-outline-primary">
              View Gallery
            </Link>
          </div>
        </div>
        <div className="flex-item">
          <img
            src="https://images.unsplash.com/photo-1544078751-58fee2d8a03b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="7133637A-4D95-4C07-B255-D1A3BBAA509D.jpeg"
          />
        </div>
      </div>
    </section>
  )
}

export default Photography
