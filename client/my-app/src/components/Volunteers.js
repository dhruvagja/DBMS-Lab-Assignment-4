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
import TextField from "@mui/material/TextField";

// function Volunteers() {

//     const navigate = useNavigate();

//     let loggedInUser = false;
//     const role = localStorage.getItem('role');
//     useEffect(() => {
//         loggedInUser = localStorage.getItem("authenticated");
//         console.log(loggedInUser);
//         if (loggedInUser === "false") {
//             console.log("UNAUTHENTICATED");
//             alert("Please login to continue")
//             // return <Navigate replace to="/login" />;
//             navigate("/login");
//         }
//         // console.log(authenticated);
//     }, []);


//     const [volunteers, setVolunteers] = useState([]);

//     useEffect(() => {
//         const username = localStorage.getItem('username');
//         fetch(`http://localhost:8081/api/organizer_has_volunteer/${username}`)
//             .then(res => {
//                 if (res.ok) {

//                     return res.json();
//                 }
//             })
//             .then(data => setVolunteers(data))
//             .catch(error => {
//                 console.log(error);
//             });
//     });
//     const formatDate = (dateString) => {
//         const options = { year: 'numeric', month: 'long', day: 'numeric' };
//         return new Date(dateString).toLocaleDateString(undefined, options);
//     };

//     const [inputText, setInputText] = useState("");
//     let inputHandler = (e) => {
//         //convert input text to lower case
//         var lowerCase = e.target.value.toLowerCase();
//         setInputText(lowerCase);
//     };

//     function List(props) {
//         //create a new array by filtering the original array
//         const filteredData = volunteers.filter((el) => {
//             //if no input the return the original
//             if (props.input === '') {
//                 return el;
//             }
//             //return the item which contains the user input
//             else {
//                 return el.text.toLowerCase().includes(props.input)
//             }
//         })
//         return (
//             <ul>
//                 {filteredData.map((item) => (
//                     <li key={item.id}>{item.text}</li>
//                 ))}
//             </ul>
//         )
//     }
    

//     return (
//         <div>
//             <Navbar />

//             <div>
//                 <h1 style={{ textAlign: 'center', color: 'black ' }}>List of Volunteers</h1>
//                 <div className="search">
//                     <TextField
//                         id="outlined-basic"
//                         // onChange={inputHandler}
//                         variant="outlined"
//                         fullWidth
//                         label="Search"
//                     />
//                 </div>
//                 {/* {List(inputText)} */}

//                 <div className="event-list">
//                     <div className="event-header">
//                         <span>Event ID</span>
//                         <span>Roll No.</span>
//                         <span>Event Name</span>
//                         <span>Type of Event</span>
//                     </div>
//                     {volunteers.map(volunteer => (
//                         <div key={`${volunteer.eid}-${volunteer.roll}`} className="event-item">
//                             <span>{volunteer.eid}</span>
//                             <span>{volunteer.roll}</span>
//                             <span>{volunteer.ename}</span>
//                             <span>{volunteer.type}</span>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Volunteers

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
            navigate("/login");
        }
    }, []);

    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        const username = localStorage.getItem('username');
        fetch(`http://localhost:8081/api/organizer_has_volunteer/${username}`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(data => setVolunteers(data))
            .catch(error => {
                console.log(error);
            });
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const [inputText, setInputText] = useState("");

    const inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    function List(props) {
        //create a new array by filtering the original array
        // const filteredData = volunteers.filter((el) => {
        //     //if no input then return the original
        //     if (props.input === '') {
                
        //         {volunteers.map(volunteer => (
        //             <div key={`${volunteer.eid}-${volunteer.roll}`} className="event-item">
        //                 <span>{volunteer.eid}</span>
        //                 <span>{volunteer.roll}</span>
        //                 <span>{volunteer.ename}</span>
        //                 <span>{volunteer.type}</span>
        //             </div>
        //         ))}
        
        //     }
        //     //return the item which contains the user input
        //     else {
        //         return (
        //             el.eid.toString().includes(props.input) ||
        //             el.roll.toString().includes(props.input) ||
        //             el.ename.toLowerCase().includes(props.input) ||
        //             el.type.toLowerCase().includes(props.input)
        //         );
        //     }
        // });

        return (
            // <ul>
            //     {filteredData.map((item) => (
            //         <li key={item.eid}>{item.ename}</li>
            //     ))}
            // </ul>
            <div>
            {props.input === '' ? (
                // Render all volunteers if input is empty
                volunteers.map(volunteer => (
                    <div key={`${volunteer.eid}-${volunteer.roll}`} className="event-item">
                        <span>{volunteer.eid}</span>
                        <span>{volunteer.roll}</span>
                        <span>{volunteer.ename}</span>
                        <span>{volunteer.type}</span>
                    </div>
                ))
            ) : (
                // Filter volunteers based on input text
                volunteers.filter((el) => (
                    el.eid.toString().includes(props.input) ||
                    el.roll.toString().includes(props.input) ||
                    el.ename.toLowerCase().includes(props.input) ||
                    el.type.toLowerCase().includes(props.input)
                )).map((item) => (
                    <div key={`${item.eid}-${item.roll}`} className="event-item">
                        <span>{item.eid}</span>
                        <span>{item.roll}</span>
                        <span>{item.ename}</span>
                        <span>{item.type}</span>
                    </div>
                ))
            )}
        </div>
        );
    }

    return (
        <div>
            {/* Navbar component is assumed */}
             <Navbar /> 

            <div>
                <h1 style={{ textAlign: 'center', color: 'black ' }}>List of Volunteers</h1>
                <div className="search">
                    <TextField
                        id="outlined-basic"
                        onChange={inputHandler}
                        variant="outlined"
                        fullWidth
                        label="Search"
                    />
                </div>
                <div className="event-list">
                    <div className="event-header">
                        <span>Event ID</span>
                        <span>Roll No.</span>
                        <span>Event Name</span>
                        <span>Type of Event</span>
                    </div>
                {/* <List input={inputText} /> */}
                {List({ input: inputText })}
                
                    {/* {volunteers.map(volunteer => (
                        <div key={`${volunteer.eid}-${volunteer.roll}`} className="event-item">
                            <span>{volunteer.eid}</span>
                            <span>{volunteer.roll}</span>
                            <span>{volunteer.ename}</span>
                            <span>{volunteer.type}</span>
                        </div>
                    ))} */}
                </div>
            </div>
        </div>
    );
}

export default Volunteers;