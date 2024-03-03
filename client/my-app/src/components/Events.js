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
            // headers: {
            //     'Authorization': `Bearer ${accessToken}`,
            //     'Content-Type': 'application/json'
            // }

        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

            })
            .then(data => {
                setEvents(data);
                
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    // console.log(events);
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const [volunteerEvents, setvolunteerEvents] = useState([]);
    useEffect(() => {
    if (role === 'student') {
        fetch(`http://localhost:8081/api/volunteered_events/${username}`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                // else {
                //     throw new Error('Failed to fetch data');
                // }
            })
            .then(data => setvolunteerEvents(data))
            .catch(error => {
                console.log(error);
            });

    }
    }, []);
    const [registeredEvents, setregisteredEvents] = useState([]);
    useEffect(() => {
    if (role == 'student' || role == 'external') {
        // useEffect(() => {
        fetch(`http://localhost:8081/api/registered_events/${username}`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                // else {
                //     throw new Error('Failed to fetch data');
                // }
            })
            .then(data => {
                setregisteredEvents(data);
            })
            .catch(error => {
                console.log(error);
            });
        // }, []);

    }
    }, []);

    localStorage.setItem('volunteered', false);
    localStorage.setItem('registered', false);


    // console.log(registeredEvents, username);

    const handleRegister = async (eventId) => {
        // Implement your logic for handling registration here
        if (localStorage.getItem('registered') === 'true') {
            alert("Already registered");
            window.location.reload();
            return;
        }

        if (localStorage.getItem('volunteered') === 'true') {
            alert("You are already a volunteer for this event!");
            window.location.reload();
            return;
        }
        console.log(`Registering for event with ID: ${eventId}`);

        const forminfo = {
            eid: eventId,
            role: role
        }

        // const [volunteerEvents, setvolunteerEvents] = useState([]);
        // useEffect(() => {
        // if (role === 'student') {
        //     fetch(`http://localhost:8081/api/volunteered_events/${username}`)
        //         .then(res => {
        //             if (res.ok) {
        //                 return res.json();
        //             }
        //             // else {
        //             //     throw new Error('Failed to fetch data');
        //             // }
        //         })
        //         .then(data => setvolunteerEvents(data))
        //         .catch(error => {
        //             console.log(error);
        //         });

        // }
        // }, []);


        // const [registeredEvents, setregisteredEvents] = useState([]);
        // useEffect(() => {
        // fetch(`http://localhost:8081/api/registered_events/${username}`)
        //     .then(res => {
        //         if (res.ok) {
        //             return res.json();
        //         }
        //         // else {
        //         //     throw new Error('Failed to fetch data');
        //         // }
        //     })
        //     .then(data => {
        //         setregisteredEvents(data);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });

        // }, []);

        for (let i = 0; i < registeredEvents.length; i++) {
            console.log(registeredEvents[i].eid, eventId);
            if (registeredEvents[i].eid === eventId) {
                console.log("Already registered");
                alert("Already registered");
                window.location.reload();
                return;
            }
        }

        if (role === 'student') {
            for (let i = 0; i < volunteerEvents.length; i++) {
                if (volunteerEvents[i].eid === eventId) {
                    console.log("You are already a volunteer for this event!");
                    alert("You are already a volunteer for this event!");
                    window.location.reload();
                    return;
                }
            }
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
                localStorage.setItem('registered', true);
                alert("Registered for the event.");
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleVolunteer = async (eventId) => {
        // Implement your logic for handling volunteering here
        // console.log(`Volunteering for event with ID: ${eventId}`);

        if (localStorage.getItem('volunteered') === 'true') {
            alert("Already volunteered");
            window.location.reload();
            return;
        }
        if (localStorage.getItem('registered') === 'true') {
            alert("You have already registered for this event!");
            window.location.reload();
            return;
        }

        const forminfo = {
            eid: eventId,
            role: role
        }

        // if (role === 'student') {
        //     fetch(`http://localhost:8081/api/volunteered_events/${username}`)
        //         .then(res => {
        //             if (res.ok) {
        //                 return res.json();
        //             }
        //             // else {
        //             //     throw new Error('Failed to fetch data');
        //             // }
        //         })
        //         .then(data => setvolunteerEvents(data))
        //         .catch(error => {
        //             console.log(error);
        //         });

        // }

        // fetch(`http://localhost:8081/api/registered_events/${username}`)
        //     .then(res => {
        //         if (res.ok) {
        //             return res.json();
        //         }
        //         // else {
        //         //     throw new Error('Failed to fetch data');
        //         // }
        //     })
        //     .then(data => {
        //         setregisteredEvents(data);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });

        if (role === 'student') {
            for (let i = 0; i < volunteerEvents.length; i++) {
                if (volunteerEvents[i].eid === eventId) {
                    console.log("Already volunteered");
                    alert("Already volunteered");
                    window.location.reload();
                    return;
                }
            }
        }

        for (let i = 0; i < registeredEvents.length; i++) {
            if (registeredEvents[i].eid === eventId) {
                console.log("You have already registered for this event!");
                alert("You have already registered for this event!");
                window.location.reload();
                return;
            }
        }

        if (role === 'student') {
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
                    localStorage.setItem('volunteered', true);
                    alert("Volunteering for the event.");
                    window.location.reload();
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };


    return (
        <div className="event-container">
            {events.map(event => (
                <div key={event.eid} className="event-box">
                    <p className="event-name">{event.ename}</p>
                    <p className="event-type">{event.type}</p>
                    <p className="event-date">{formatDate(event.date)}</p>
                    
                    <p className="event-description">{event.description}</p>
                    {role === 'student' ? (
                        <>
                            <button className="volunteer-button" onClick={() => handleVolunteer(event.eid)}> Volunteer </button>
                            <button className="button" onClick={() => handleRegister(event.eid)}> Register </button>
                        </>
                    ) : (role==='external' ? (
                        <>
                            <button className="button" onClick={() => handleRegister(event.eid)}> Register </button>
                        </>
                    ) : <></>    
                    )}
                </div>
            ))}
        </div>
    );
};

export default Events;