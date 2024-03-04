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

function Logistics() {

  const navigate = useNavigate();

  // 
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
    if (role !== 'organizer') {
      console.log("UNAUTHORIZED");
      alert("You are not authorized to access this page")
      navigate("/");
    }

  }, []);

  const [logistics, setLogistics] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8081/api/logistics`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => setLogistics(data))
      .catch(error => {
        console.log(error);
      });
  }
  , []);

  const [filterOption, setFilterOption] = useState('');
  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
};

const [inputText, setInputText] = useState("");

    const inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    function LogisticsList(props) {
      return (
          <div>
              {props.input === '' ? (
                  // Render all logistics if input is empty
                  logistics.map(logistic => (
                      <div key={logistic.pid} className="event-item">
                          <span>{logistic.pid}</span>
                          <span>{logistic.hall}</span>
                          <span>{logistic.roomno}</span>
                      </div>
                  ))
              ) : (
                  // Filter logistics based on input text
                  logistics.filter((el) => {
                      if (filterOption === '') {
                          return (
                              el.pid.toString().startsWith(props.input) ||
                              el.hall.toLowerCase().startsWith(props.input) ||
                              el.roomno.toString().startsWith(props.input)
                          );
                      } else {
                          switch (filterOption) {
                              case 'id':
                                  return el.pid.toString().startsWith(props.input);
                              case 'hall':
                                  return el.hall.toLowerCase().startsWith(props.input);
                              case 'roomno':
                                  return el.roomno.toString().startsWith(props.input);
                              default:
                                  return false;
                          }
                      }
                  }).map((item) => (
                      <div key={item.pid} className="event-item">
                          <span>{item.pid}</span>
                          <span>{item.hall}</span>
                          <span>{item.roomno}</span>
                      </div>
                  ))
              )}
          </div>
      );
  }
  

  return (
    <div>
      <Navbar />
        <div>
        <h1 style={{ textAlign: 'center' ,color: 'black '}}>Participant Logistics</h1>
        <div className="logistics-search">
                    <TextField
                        id="outlined-basic"
                        onChange={inputHandler}
                        variant="outlined"
                        fullWidth
                        label="Search"
                    />
                    <select value={filterOption} onChange={handleFilterChange}>
                    <option value="">Any Filter</option>
                    <option value="id">Search by PID</option>
                    <option value="hall">Search by Hall</option>
                    {/* <option value="roomno">Search by Room No.</option> */}
                </select>
                </div>
            <div className="p-event-list">
                <div className="event-header">
                    <span>PID</span>
                    <span>Hall</span>
                    <span>Room No.</span>
                </div>
                {/* {logistics.map(logistic => (
                    <div key={logistic.pid} className="event-item">
                        <span>{logistic.pid}</span>
                        <span>{logistic.hall}</span>
                        <span>{logistic.roomno}</span>
                    </div>
                ))} */}
                {LogisticsList({ input: inputText })}
            </div>
            
        </div>
    </div>
  );
}

export default Logistics