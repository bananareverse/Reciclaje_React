// NavBar.jsx
import { Link, NavLink } from "react-router-dom"
import { NavbarLinks } from "../constants/links"
import { HiOutlineSearch, HiOutlineShoppingBag } from "react-icons/hi"
import { FaBarsStaggered } from "react-icons/fa6"
import './NavBar.css'
import { Logo } from "./Logo"

export const NavBar = () => {
  return (
    <header className="header">
        <Logo />
      <nav>
        {NavbarLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.href}
            className={({ isActive }) =>
              `navlink ${isActive ? 'navlink-active' : ''}`
            }
          >
            {link.title}
          </NavLink>
        ))}
      </nav>
      <div className="icon-group">
        <button>
          <HiOutlineSearch size={25} />
        </button>
        <div className="relative">
          <Link to="/account" className="button-account">
            H
          </Link>
        </div>
        <div className="relative">
          <span className="cart-count">0</span>
          <HiOutlineShoppingBag size={25} />
        </div>
      </div>
      <button className="mobile-button">
        <FaBarsStaggered size={25} />
      </button>
    </header>
  )
}
