import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="/images/images/ChatGPT Image Mar 2, 2026, 12_14_05 PM.png"
          alt="Blue Peak Infra & Constructions"
        />
      </div>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

     <a href="/#expert" className="consultation-btn hover-orange">
  Free Consultation
  <span>›</span>
</a>
    </nav>
  );
}

export default Navbar;