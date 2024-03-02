import { Link } from "react-router-dom";


const username = localStorage.getItem('username');
const password = localStorage.getItem('password');
const role = localStorage.getItem('role');

export default function Navbar() {
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
          {/* Add additional links specific to external participants here */}
        </>
      );
    } else if(role === 'organizer') {
      return (
        <>
          <CustomLink to="/organizing-events">Organizing Events</CustomLink>
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
        {/* if(role === 'student'){
        <ul>
          <CustomLink to="/registered-events">Registered Events</CustomLink>
          <CustomLink to="/volunteer-events">Volunteering Events</CustomLink>
        </ul>
        }
        else if(role === 'external'){
        <ul>
          <CustomLink to="/registered-events">Registered Events</CustomLink>
        </ul>
        }
        else if(role === 'organizer'){
        <ul>
          <CustomLink to="/organising-events">Organising Events</CustomLink>
        </ul>
        } */}
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
