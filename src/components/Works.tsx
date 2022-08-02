
export const Works = () => {
  return (
    <div className="contenedor-works">
      <h2 className="titulo-seccion2">Some works</h2>
      <section id="somework" className="event-list">
        <article className="event">
          <a className="event-url" href="https://alexispavon010.github.io/oasis-fundation/" target='blank' >
            <figure className="event-imageContainer">
              <img className="event-image" src="./assets/oasis.png" />
            </figure>
          </a>
        </article>
        <article className="event">
          <a className="event-url" href="https://alexispavon010.github.io/Sushi/" target='blank'>
            <figure className="event-imageContainer">
              <img className="event-image" src="./assets/sushi.png" width={300} />
            </figure>
          </a>
        </article>
        <article className="event">
          <a className="event-url" href="https://alexispavon010.github.io/Sushi/" target='blank'>
            <figure className="event-imageContainer">
              <img className="event-image" src="./assets/react-tesla.png" alt="ImagenReact" width={300} />
            </figure>
          </a>
        </article>
        <article className="event">
          <a className="event-url" href="https://picker-store.herokuapp.com/" target='blank'>
            <figure className="event-imageContainer">
              <img className="event-image" src="./assets/picker.png" alt="ImagenReact" width={300} />
            </figure>
          </a>
        </article>
      </section>
    </div>
  )
}
