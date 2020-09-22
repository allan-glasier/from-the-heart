import React from "react"

const Videography = () => {
  return (
    <section className="section pt-5 pb-5 dark">
      <div className="container">
        <h2 className="text-center">From the Heart Videography</h2>
        <div className="flex flex-row-reverse">
          <div className="flex-item pl-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              praesentium consequuntur cupiditate. Explicabo quia nemo aut harum
              nostrum. Dolorem a animi perspiciatis nulla ad corporis voluptas
              placeat rerum. Porro, fuga. sit amet consectetur adipisicing elit.
              Assumenda praesentium consequuntur cupiditate. Explicabo quia nemo
              aut harum nostrum. Dolorem a animi perspiciatis nulla ad corporis
              voluptas placeat rerum. Porro, fuga.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              praesentium consequuntur cupiditate. Explicabo quia nemo aut harum
              nostrum. Dolorem a animi perspiciatis nulla ad corporis voluptas
              placeat rerum. Porro, fuga. animi perspiciatis nulla ad corporis
              voluptas placeat.
            </p>
            <div className="text-center">
              <a href="#" className="btn btn-outline-secondary">
                View Films
              </a>
            </div>
          </div>
          <div className="flex-item">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rHQri6V45pY"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Videography
