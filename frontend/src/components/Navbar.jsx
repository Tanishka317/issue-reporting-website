import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/report">Report Issue</Link>
      <Link to="/issues">View Issues</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
}

export default Navbar;
