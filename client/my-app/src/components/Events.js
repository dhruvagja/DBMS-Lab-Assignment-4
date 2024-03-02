import React from 'react';
import './Home.css';
import { useEffect, useState } from "react";


function Events() {

    const [events, setEvents] = useState([]);
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');
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


    const handleRegister = async (eventId) => {
        // Implement your logic for handling registration here
        console.log(`Registering for event with ID: ${eventId}`);

        const forminfo = {
            eid: eventId,
            role: role
        }

        fetch(`http://localhost:8081/api/registered_events/${username}`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(forminfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(`${data} Registered`);
            });
    };


    return (
        <div className="event-container">
            {events.map(event => (
                <div key={event.eid} className="event-box">
                    <p className="event-name">{event.ename}</p>
                    <p className="event-date">{formatDate(event.date)}</p>
                    <p className="event-id">{event.id}</p>
                    <p className="event-type">{event.type}</p>
                    <p className="event-description">{event.description}</p>
                    <button className="button" onClick={() => handleRegister(event.eid)}> Register </button>
                </div>
            ))}
        </div>
    );
};

export default Events;