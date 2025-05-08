// FeatureGrid.jsx
import { BiWorld } from "react-icons/bi";
import { FaHammer } from "react-icons/fa";
import { HiMiniReceiptRefund } from "react-icons/hi2";
import { MdLocalShipping } from "react-icons/md";
import "./FeatureGrid.css";

export const FeatureGrid = () => {
  return (
    <section className="feature-grid">
      <div className="feature-item">
        <MdLocalShipping size={40} className="feature-icon" />
        <div className="feature-content">
          <h2 className="feature-title">Envío gratis</h2>
          <p className="feature-text">En compras superiores a $50.00</p>
        </div>
      </div>

      <div className="feature-item">
        <HiMiniReceiptRefund size={40} className="feature-icon" />
        <div className="feature-content">
          <h2 className="feature-title">Devoluciones</h2>
          <p className="feature-text">
            Devuelve si tienes algún problema con nuestros productos
          </p>
        </div>
      </div>

      <div className="feature-item">
        <BiWorld size={40} className="feature-icon" />
        <div className="feature-content">
          <h2 className="feature-title">Garantía</h2>
          <p className="feature-text">
            Garantía de un año en todos los productos
          </p>
        </div>
      </div>

      <div className="feature-item">
        <FaHammer size={40} className="feature-icon" />
        <div className="feature-content">
          <h2 className="feature-title">Soporte</h2>
          <p className="feature-text">Disponibilidad 24/7</p>
        </div>
      </div>
    </section>
  );
};
