// AboutPage.jsx
import "./AboutPage.css";

export const AboutPage = () => {
  return (
    <section className="about-page">
      <h1 className="about-title">Nuestra empresa</h1>

      <img
        src="/img/10.jpg"
        alt="Imagen de nuestra empresa"
        className="about-image"
      />

      <div className="about-content">
        <p>
          EcoVest
        </p>

        <p>
          Podras encontrar una amplia variedad de productos ecológicos y
          sostenibles, desde ropa hecha de materiales reciclados hasta accesorios
        </p>

        <h2 className="about-subtitle">
          ¡No esperes más y compra nuestros productos!
        </h2>

        <p>
          Para más información, no dudes en ponerte en contacto con
          nosotros a través de nuestro correo electrónico{" "}
          <a href="mailto:ecovest@gmail.com">
          ecovest@gmail.com
          </a>{" "}
          o llamando al{" "}
          <a href="tel:912650000">912650000</a>.
        </p>
      </div>
    </section>
  );
};
