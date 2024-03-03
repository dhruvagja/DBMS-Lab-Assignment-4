// OrganisingEvents.js
import React from 'react';
import './Home.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import OrganisingEvents from './OrganisingEvents';
import RegisteredEvents from './RegisteredEvents';
import Events from './Events';
import Logout from './Logout';
import Navbar from './Navbar';
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";


function VolunteerEvents() {

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

  const [volunteerEvents, setvolunteerEvents] = useState([]);
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

  useEffect(() => {
    fetch(`http://localhost:8081/api/volunteered_events/${username}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        // else{
        //   throw new Error('Failed to fetch data');
        // }
      })
      .then(data => setvolunteerEvents(data))
      .catch(error => {
        console.log(error);
      });
  }, []);

  console.log(volunteerEvents);
  

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
        {volunteerEvents.map(event => (
          <div key={event.eid} className="event-box">
            <p className="event-name">{event.ename}</p>
            <p className="event-type">{event.type}</p>
            <p className="event-date">{formatDate(event.date)}</p>
            <p className="event-description">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VolunteerEvents;
