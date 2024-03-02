// OrganisingEvents.js
import React from 'react';
import './Home.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import RegisteredEvents from './RegisteredEvents';
import VolunteerEvents from './VolunteerEvents';
import Events from './Events';
import Logout from './Logout';
import Navbar from './Navbar';
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";


function OrganisingEvents() {

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

  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');
  const role = localStorage.getItem('role');

  const [organisingEvents, setorganisingEvents] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8081/api/organized_events/${username}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => setorganisingEvents(data));
  }, []);

  console.log(organisingEvents);

  // add functionality if no events are organised by organiser

  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Events />} />
        <Route path="/registered-events" element={<RegisteredEvents />} />
        <Route path="/organising-events" element={<OrganisingEvents />} />
        <Route path="/volunteer-events" element={<VolunteerEvents />} />
        <Route path="/logout" element={<Logout />} /> */}
      </Routes>

      <div className="event-container">
        {organisingEvents.map(event => (
          <div key={event.id} className="event-box">
            {event.ename}
            <p>{event.date}</p>
            <p>{event.type}</p>
            <p>{event.description}</p>
            <button className="button">Register</button>
          </div>
        ))}
      </div>
    </div>

  );
}

export default OrganisingEvents;
