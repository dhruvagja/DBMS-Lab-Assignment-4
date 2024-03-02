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
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');
  const role = localStorage.getItem('role');

  const forminfo = {
    id : username,
    password : password,
    role : role
  }

// useEffect(() => {
    fetch(`http://localhost:8081/api/registered_events/${username}`, {
        method : "GET",
        headers:{
            'Content-Type' : "application/json"
        },
        // body : JSON.stringify(forminfo)
    })
    // .then(res =>{

    // })
    // .then(res => res.json())
    // // .then(data => console.log(data));
    // .then(data => {
    //     console.log(`${data} Logged in`);
    //     setauthenticated(true);
    //     localStorage.setItem('authenticated', true);
    //     navigate("/");
    //     // redirect("/");
    // });
// },[])

  return (
    <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Events />} />
                <Route path="/registered-events" element={<RegisteredEvents />} />
                <Route path="/organising-events" element={<OrganisingEvents />} />
                <Route path="/volunteer-events" element={<VolunteerEvents />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
    </div>
  );
}

export default RegisteredEvents;
