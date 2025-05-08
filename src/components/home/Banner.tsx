// Banner.jsx
import { Link } from "react-router-dom";
import "./Banner.css";

export const Banner = () => {
  return (
    <div className="banner">
      <div
        className="banner__image"
        style={{ backgroundImage: "url('/img/2.jpg')" }}
        role="img"
        aria-label="Productos ecológicos"
      />

      <div className="banner__overlay" />

      <div className="banner__content">
        <h1 className="banner__title">
          Los productos mejores al <span className="highlight">medio ambiente</span>
        </h1>
        <p className="banner__subtitle">
          Descubre nuestra colección de moda sostenible y reciclaje responsable.
        </p>
        <Link to="/reciclaje" className="banner__button">
          Ver productos
        </Link>
      </div>
    </div>
  );
};
