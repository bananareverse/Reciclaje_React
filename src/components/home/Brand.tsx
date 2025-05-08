// Brand.jsx
import "./Brand.css";

const brands = [
  { image: "/img/brands/AMP-Robotics.jpeg", alt: "AMP Robotics" },
  { image: "/img/brands/BlueAlp.jpeg",      alt: "Blue Alp" },
  { image: "/img/brands/Empower.jpeg",      alt: "Empower" },
  { image: "/img/brands/Mura-Technology.jpeg", alt: "Mura Technology" },
  { image: "/img/brands/rePurpose-Global.jpeg", alt: "rePurpose Global" },
];

export const Brand = () => {
  return (
    <section className="brand">
      <div className="brand__intro">
        <h2 className="brand__title">Conoce nuestra marca</h2>
        <p className="brand__subtitle">
          Nosotros somos una marca de ropa sostenible y ecológica, que busca
          crear conciencia sobre el impacto ambiental de la industria de la moda.
        </p>
      </div>
      <div className="brand__grid">
        {brands.map((brand, idx) => (
          <div key={idx} className="brand__item">
            <img
              src={brand.image}
              alt={brand.alt}
              className="brand__image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
