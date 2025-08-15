import { Link, NavLink } from "react-router-dom";
import './Login.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img
            src="image/logo-bg-remove.png"
            alt="Horizon Homes Logo"
            height="70px"
            width="70px"
          />
          <span className="logo-title">Horizon Homes</span>
        </Link>

        <nav className="navbar">
          <ul className="navbar-list">
            <li>
              <NavLink to="/" className="navbar-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Rent" className="navbar-link">
                Rent
              </NavLink>
            </li>
            <li>
              <NavLink to="/Sell" className="navbar-link">
                Sell
              </NavLink>
            </li>
            <li>
              <NavLink to="/Buy" className="navbar-link">
                Buy
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" className="navbar-link">
                About
              </NavLink>
            </li>
          </ul>

          <ul className="login-container">
            <NavLink to="/Login" className="navbar-link">
              Login
            </NavLink>
            <NavLink to="/Sign-up" className="navbar-link">
              Get Started
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
