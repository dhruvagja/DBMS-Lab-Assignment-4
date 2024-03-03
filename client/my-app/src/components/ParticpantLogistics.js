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

function ParticpantLogistics() {

    const navigate = useNavigate();

  // 
  let loggedInUser = false;
  const role = localStorage.getItem('role');
  const username = localStorage.getItem('username');

  useEffect(() => {
    loggedInUser = localStorage.getItem("authenticated");
    console.log(loggedInUser);
    if (loggedInUser === "false") {
      console.log("UNAUTHENTICATED");
      alert("Please login to continue")
      // return <Navigate replace to="/login" />;
      navigate("/login");
    }
    // console.log(authenticated);
  }, []);

  const [participantlogistic, setparticipantLogistics] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8081/api/logistics/${username}`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(data => setparticipantLogistics(data))
            .catch(error => {
                console.log(error);
            });
    }
    , []);

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
        
          <div key={participantlogistic.pid} className="event-box">
            <p> pid = {participantlogistic.pid} </p>
            <p> hall = {participantlogistic.hall} </p>
            <p> room no = {participantlogistic.roomno} </p>
          </div>
      </div>
    </div>
    
  )
}

export default ParticpantLogistics