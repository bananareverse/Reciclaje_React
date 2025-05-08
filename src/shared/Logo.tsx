// Logo.jsx
import { Link } from "react-router-dom"
import './Logo.css'

export const Logo = () => {
  return (
    <Link to="/" className="logo">
      <p className="logo-desktop">
        Eco<span className="logo-text">Vest</span>
      </p>

      <p className="logo-mobile">
        <span className="logo-text skew-left">E</span>
        <span className="logo-text skew-right">V</span>
      </p>
    </Link>
  )
}
