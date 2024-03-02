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
    const handleRegister = async (eventId) => {
        // Implement your logic for handling registration here
        console.log(`Registering for event with ID: ${eventId}`);

        const forminfo = {
            eid : eventId,
            role : role
        }

        fetch(`http://localhost:8081/api/registered_events/${username}`, {
            method : "POST",
            headers:{
                'Content-Type' : "application/json"
            },
            body : JSON.stringify(forminfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(`${data} Registered`);
        });
    };
    const handleVolunteer = async (eventId) => {
        // Implement your logic for handling volunteering here
        console.log(`Volunteering for event with ID: ${eventId}`);

        const forminfo = {
            eid: eventId,
            role: role
        }

        fetch(`http://localhost:8081/api/volunteered_events/${username}`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(forminfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(`${data} Volunteered`);
            });
    };
    

return (
    <div className="event-container">
        {events.map(event => (
            <div key={event.eid} className="event-box">
            {event.ename}
            <p>{event.date}</p>
            <p>{event.id}</p>
            <p>{event.type}</p>
            <p>{event.description}</p>
            <button className="volunteer-button" onClick={()=>handleVolunteer(event.eid)}> Volunteer </button>
            <button className="button" onClick={()=>handleRegister(event.eid)}> Register </button>
            </div>
        ))}
    </div>
);
};

export default Events;