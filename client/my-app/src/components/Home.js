// Home.js
import React from 'react';
import './Home.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import RegisteredEvents from './RegisteredEvents';
import OrganisingEvents from './OrganisingEvents';
import VolunteerEvents from './VolunteerEvents';
import Events from './Events';
import Logout from './Logout';
import Navbar from './Navbar';
import { useEffect, useState } from "react";


const Home = () => {
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState();
  let loggedInUser = false;
  useEffect(() => {
    loggedInUser = localStorage.getItem("authenticated");
    console.log(loggedInUser);
    if (loggedInUser === "false" || loggedInUser === undefined) {
      console.log("UNAUTHENTICATED");
      // return <Navigate replace to="/login" />;
      navigate("/login");

    }
    console.log(authenticated);
  }, []);

  // if (!authenticated) {
  //   return <Navigate replace to="/login" />;
  // }

    // Access user credentials from local storage
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const role = localStorage.getItem('role');

    // You can use username, password, and role as needed within this component

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
};

export default Home;
