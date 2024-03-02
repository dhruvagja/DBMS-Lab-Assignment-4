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
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');
  const role = localStorage.getItem('role');


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

export default OrganisingEvents;
