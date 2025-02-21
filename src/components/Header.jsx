import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/add-new-car">Add new car</Link>
      </li>
      <li>
        <Link>All cars</Link>
      </li>
    </nav>
  );
};

export default Header;
