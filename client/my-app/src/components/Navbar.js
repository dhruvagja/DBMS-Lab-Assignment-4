import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Navbar() {
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');
  const role = localStorage.getItem('role');

  function renderLeftLinks() {
    if (role === 'student') {
      return (
        <>
          <CustomLink to="/registered-events">Registered Events</CustomLink>
          <CustomLink to="/volunteer-events">Volunteering Events</CustomLink>
        </>
      );
    } else if (role === 'external') {
      return (
        <>
          <CustomLink to="/registered-events">Registered Events</CustomLink>
          <CustomLink to="/participant-logistics">Logistics </CustomLink>

          {/* Add additional links specific to external participants here */}
        </>
      );
    } else if(role === 'organizer') {
      return (
        <>
          <CustomLink to="/organising-events">Organizing Events</CustomLink>
          <CustomLink to="/volunteers">Volunteers</CustomLink>
          <CustomLink to="/logistics">Logistics</CustomLink>
          {/* Add additional links specific to external participants here */}
          
        </>
      );
    }
  }
  return (
    <nav className="nav">
      <div className="left-links">
        <Link to="/" className="site-title">
          Home
        </Link>
        {renderLeftLinks()}
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
