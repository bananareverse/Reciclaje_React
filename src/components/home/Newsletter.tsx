// Newsletter.jsx

import "./Newsletter.css";

export const Newsletter = () => {
  return (
    <section className="newsletter">
      {/* Imagen de fondo */}
      <div
        className="newsletter__background"
        style={{ backgroundImage: "url('/img/1.jpg')" }}
        role="img"
        aria-label="Boletín de noticias eco"
      />

      {/* Contenedor del contenido */}
      <div className="newsletter__container">
        <div className="newsletter__card">
          <h2 className="newsletter__title">Suscríbete para ver las ultimas noticias del medio ambiente</h2>
          <p className="newsletter__subtitle">Escribe tu correo para acceder a este recurso</p>
          <form className="newsletter__form">
            <input
              type="email"
              placeholder="Escribe tu correo electrónico"
              aria-label="Tu correo"
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};
