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

function Logistics() {

  const navigate = useNavigate();

  // 
  let loggedInUser = false;
  const role = localStorage.getItem('role');
  useEffect(() => {
    loggedInUser = localStorage.getItem("authenticated");
    console.log(loggedInUser);
    if (loggedInUser === "false") {
      console.log("UNAUTHENTICATED");
      alert("Please login to continue")
      // return <Navigate replace to="/login" />;
      navigate("/login");
    }
    if (role !== 'organizer') {
      console.log("UNAUTHORIZED");
      alert("You are not authorized to access this page")
      navigate("/");
    }
    // console.log(authenticated);
  }, []);

  const [logistics, setLogistics] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8081/api/logistics`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => setLogistics(data))
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
        {logistics.map(logistic => (
          <div key={logistic.pid} className="event-box">
            <p> pid = {logistic.pid} </p>
            <p> hall = {logistic.hall} </p>
            <p> room no = {logistic.roomno} </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Logistics