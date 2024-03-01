import React from 'react';
import './Home.css';

const events = [
    { id: 1, name: 'Mega Event' },
    { id: 2, name: 'Sports Fest' },
    { id: 3, name: 'Literary Fest' },
    { id: 4, name: 'Tech Fest' },
    { id: 5, name: 'Cultural Fest' }
  ];

const Events = () => {
return (
    <div className="event-container">
        {events.map(event => (
            <div key={event.id} className="event-box">
            {event.name}
            <button className="button">Register</button>
            </div>
        ))}
        </div>
    );
};

export default Events;