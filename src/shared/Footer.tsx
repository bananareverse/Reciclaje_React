import { Link } from "react-router-dom"
import { FaEnvelope } from "react-icons/fa"
import './Footer.css'
import { FooterLinks } from "../constants/links"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Link to="/" className="footer-logo">
          Eco<span className="logo-text">Vest</span>
        </Link>

        <div className="footer-socials">
            {FooterLinks.map((link) => (
            <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
            >
                {link.icon}
                
            </a>
            ))}
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-section">
          <h4>Conócenos</h4>
          <p><Link to="/nosotros">Sobre nosotros</Link></p>
          <p><Link to="/nosotros">Comunidad</Link></p>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p><FaEnvelope className="icon" /> contacto@ecovest.com</p>
        </div>

        <div className="footer-section">
          <h4>Suscríbete</h4>
          <form className="footer-form">
            <input type="email" placeholder="Tu correo" />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EcoVest. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
