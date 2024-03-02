// OrganisingEvents.js
import React from 'react';
import './Home.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import OrganisingEvents from './OrganisingEvents';
import VolunteerEvents from './VolunteerEvents';
import Events from './Events';
import Logout from './Logout';
import Navbar from './Navbar';
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";


function RegisteredEvents() {

  // handling unauthorized access
  const navigate = useNavigate();
  // const [authenticated, setauthenticated] = useState();
  let loggedInUser = false;
  useEffect(() => {
    loggedInUser = localStorage.getItem("authenticated");
    console.log(loggedInUser);
    if (loggedInUser === "false") {
      console.log("UNAUTHENTICATED");
      // return <Navigate replace to="/login" />;
      navigate("/login");
    }
    // console.log(authenticated);
  }, []);

  // if authorized
  // const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');
  const role = localStorage.getItem('role');

  const [registeredEvents, setregisteredEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem('username');
    fetch(`http://localhost:8081/api/registered_events/${username}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        else {
          throw new Error('Failed to fetch data');
        }
      })
      .then(data => {
        setregisteredEvents(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  console.log(registeredEvents);
  // console.log(registeredEvents[1].ename);

  // add functionality if no events are registered
// alert(registeredEvents[1].ename)
  return (
    <div>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/registered-events" element={<RegisteredEvents />} />
        <Route path="/organising-events" element={<OrganisingEvents />} />
        <Route path="/volunteer-events" element={<VolunteerEvents />} />
        <Route path="
        /logout" element={<Logout />} />
      </Routes> */}
      

      <div className="event-container">
        {registeredEvents.map(event => (
          <div key={event.id} className="event-box">
            <p>{event.ename}</p>
            <p>{event.date}</p>
            <p>{event.type}</p>
            <p>{event.description}</p>
            {/* <button className="button">Register</button> */}
          </div>
        ))}
      </div>
      </div>
  );
}

export default RegisteredEvents;
