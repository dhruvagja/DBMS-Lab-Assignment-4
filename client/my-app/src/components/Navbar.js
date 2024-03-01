import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="left-links">
        <Link to="/" className="site-title">
          Home
        </Link>
        <ul>
          <CustomLink to="/registered-events">Registered Events</CustomLink>
          <CustomLink to="/organising-events">Organising Events</CustomLink>
          <CustomLink to="/volunteer-events">Volunteering Events</CustomLink>
        </ul>
      </div>
      <div className="right-links">
        <CustomLink to="/logout">Logout</CustomLink>
      </div>
    </nav>
  );
}

function CustomLink({ to, children }) {
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  );
}
