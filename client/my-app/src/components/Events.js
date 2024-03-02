import React from 'react';
import './Home.css';
import { useEffect, useState } from "react";

// const events = [
//     { eid: 1, ename: 'Mega Event', date: '2022-12-31', type: 'Cultural', description: 'Masti' },
//     { id: 2, name: 'Sports Fest' },
//     { id: 3, name: 'Literary Fest' },
//     { id: 4, name: 'Tech Fest' },
//     { id: 5, name: 'Cultural Fest' }
// ];



function Events() {

    const [events, setEvents] = useState([]);
    const username = localStorage.getItem('username');
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        const url = new URL('http://localhost:8081/api/event');
        //url.searchParams.append('id', username);
        fetch(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
            
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(data => setEvents(data));
    }, []);

    console.log(events);
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handleRegister = (eventId) => {
        // Implement your logic for handling registration here
        console.log(`Registering for event with ID: ${eventId}`);
        // Add your code to handle the registration process
    };
    

return (
    <div className="event-container">
        {events.map(event => (
            <div key={event.id} className="event-box">
            {event.ename}
            <p>{formatDate(event.date)}</p>
            <p>{event.type}</p>
            <p>{event.description}</p>
            <button className="button" onClick={() => handleRegister(event.id)}>Register</button>
            </div>
        ))}
    </div>
);
};

export default Events;