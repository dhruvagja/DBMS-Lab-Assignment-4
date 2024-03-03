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
        <div>
        <h1 style={{ textAlign: 'center' ,color: 'black '}}>Participant Logistics</h1>
            <div className="event-list">
                <div className="event-header">
                    <span>PID</span>
                    <span>Hall</span>
                    <span>Room No.</span>
                </div>
                {logistics.map(logistic => (
                    <div key={logistic.pid} className="event-item">
                        <span>{logistic.pid}</span>
                        <span>{logistic.hall}</span>
                        <span>{logistic.roomno}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Logistics