// Home.js

import React from 'react';
import './Home.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisteredEvents from './RegisteredEvents';
import OrganisingEvents from './OrganisingEvents';
import Logout from './Logout';
import Navbar from './Navbar';


const events = [
  { id: 1, name: 'Mega Event' },
  { id: 2, name: 'Sports Fest' },
  { id: 3, name: 'Literary Fest' },
  { id: 4, name: 'Tech Fest' },
  { id: 5, name: 'Cultural Fest' }
];

const Home = () => {
  return (
    <div>
    <Router>
      <Navbar />
      <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registered-events" element={<RegisteredEvents />} />
        <Route path="/organising-events" element={<OrganisingEvents />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
      </Routes>
      </div>
    </Router>   

    <div className="event-container">
      {events.map(event => (
        <div key={event.id} className="event-box">
          {event.name}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Home;
