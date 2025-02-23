import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <Link to="/" className="header-item">
        Home
      </Link>

      <Link to="/add-new-car" className="header-item">
        Add new car
      </Link>
    </nav>
  );
};

export default Header;
