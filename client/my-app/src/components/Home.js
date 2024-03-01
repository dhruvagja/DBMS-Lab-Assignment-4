// Home.js

import React from 'react';
import './Home.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisteredEvents from './RegisteredEvents';
import OrganisingEvents from './OrganisingEvents';
import VolunteerEvents from './VolunteerEvents';
import Events from './Events';
import Logout from './Logout';
import Navbar from './Navbar';


const Home = () => {
  return (
    <div>
      <Router>
      <Navbar />
      
       <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/registered-events" element={<RegisteredEvents />} />
        <Route path="/organising-events" element={<OrganisingEvents />} />
        <Route path="/volunteer-events" element={<VolunteerEvents />} />
        <Route path="/logout" element={<Logout />} />
      </Routes> 
      
      </Router>
      
    </div>
  );
};

export default Home;
