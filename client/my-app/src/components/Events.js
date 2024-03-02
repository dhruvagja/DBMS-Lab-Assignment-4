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

    useEffect(() => {
        fetch('http://localhost:8081/api/event')
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(data => setEvents(data));
    }, []);

    console.log(events);

return (
    <div className="event-container">
        {events.map(event => (
            <div key={event.id} className="event-box">
            {event.ename}
            <p>{event.date}</p>
            <p>{event.type}</p>
            <p>{event.description}</p>
            <button className="button">Register</button>
            </div>
        ))}
        </div>
    );
};

export default Events;