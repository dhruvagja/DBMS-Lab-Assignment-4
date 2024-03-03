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

function Volunteers() {

    const navigate = useNavigate();

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
        // console.log(authenticated);
    }, []);


    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        const username = localStorage.getItem('username');
        fetch(`http://localhost:8081/api/volunteered_events/${username}`)
            .then(res => {
                if (res.ok) {
                    
                    return res.json();
                }
            })
            .then(data => setVolunteers(data))
            .catch(error => {
                console.log(error);
            });
    });
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };


    return (
        <div>
            <Navbar />
            
            <div>
                <h1 style={{ textAlign: 'center' ,color: 'black '}}>List of Volunteers</h1>
                <div className="event-list">
                    <div className="event-header">
                        <span>EID</span>
                        <span>Role</span>
                        <span>Ename</span>
                        <span>Type</span>
                    </div>
                    {volunteers.map(volunteer => (
                        <div key={`${volunteer.eid}-${volunteer.roll}`} className="event-item">
                            <span>{volunteer.eid}</span>
                            <span>{volunteer.roll}</span>
                            <span>{volunteer.ename}</span>
                            <span>{volunteer.type}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Volunteers