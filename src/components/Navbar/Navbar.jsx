import './Navbar.css';
import logo from '../../../public/images/Frame 1143 (1).png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-icon"><img src={logo} alt="Logo" /></span>
          <span className="logo-text">Cognitude</span>
        </Link>

        {/* Nav Links */}
        <ul className="navbar-links">
          <li><Link to="/" className="active">Home</Link></li>
          <li><a href="/#expertise">Expertise</a></li>
          <li><a href="/#arts">Arts &amp; Innovation</a></li>
          <li><a href="/#leadership">Thought Leadership</a></li>
        </ul>

        {/* CTA */}
        <a href="/#connect" className="navbar-cta">
          Contact Us &rarr;
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
