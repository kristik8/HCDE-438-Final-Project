import { Link } from "react-router-dom";
import { FiCoffee } from "react-icons/fi";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        <span className="logo-mark">
          <FiCoffee />
        </span>
        QuietSpot
      </Link>
      <nav>
        <button className="navbar-button" disabled>
          ☕ Favorites (soon)
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
