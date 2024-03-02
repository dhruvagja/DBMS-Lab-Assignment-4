// signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './signup.css'; // Import custom CSS file for styling
// import Dropdown from 'react-bootstrap/Dropdown';


function Signup() {
    const [userType, setUserType] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [Rollno, setRollno] = useState("");
    const [Name, setName] = useState("");
    const [Department, setDepartment] = useState("");
    const [ParticipantID, setParticipantID] = useState("");
    const [CollegeName, setCollegeName] = useState("");

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    const handleSignup = (e) => {
        e.preventDefault()
        if (password !== confirmpassword) {
            alert("Passwords do not match");
        } else {
            // Store user credentials in local storage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            localStorage.setItem('role', userType);
            // Additional fields can be stored as needed
            // Redirect to login page
            window.location.href = '/login';
        }

      };

    const renderUserFields = () => {
        if (userType === 'student') {
            return (
                <div className="user-fields">
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setusername(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} required />
                    <input type="password" placeholder="Confirm Password" value={confirmpassword} onChange={(e) => setconfirmpassword(e.target.value)} required />
                    <input type="text" placeholder="Roll no." value={Rollno} onChange={(e) => setRollno(e.target.value)} required />
                    <input type="text" placeholder="Name" value={Name} onChange={(e) => setName(e.target.value)} required />
                    <input type="text" placeholder="Department" value={Department} onChange={(e) => setDepartment(e.target.value)} required />
                    {/* Add more fields for student if needed */}
                </div>
            );
        } else if (userType === 'external') {
            return (
                <div className="user-fields">
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setusername(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} required />
                    <input type="password" placeholder="Confirm Password" value={confirmpassword} onChange={(e) => setconfirmpassword(e.target.value)} required />
                    <input type="text" placeholder="Name" value={Name} onChange={(e) => setName(e.target.value)} required />
                    <input type="text" placeholder="Participant ID" value={ParticipantID} onChange={(e) => setParticipantID(e.target.value)} required />
                    <input type="text" placeholder="College Name" value={CollegeName} onChange={(e) => setCollegeName(e.target.value)} required />
                    {/* Add more fields for external participant if needed */}
                </div>
            );
        } else {
            return null;
        }
    };

    return (
        <form onSubmit={handleSignup}>
        <div className="signup-container">
            
            <h2>Create an Account</h2>
            <div className="user-type-dropdown">
                <select value={userType} onChange={handleUserTypeChange}>
                    <option value="">Select User Type</option>
                    <option value="student">Student</option>
                    <option value="external">External Participant</option>
                </select>
            </div>
            {renderUserFields()}
            {/* Additional fields can be added here */}
            <button type="submit" className="signup-btn">SignUp</button>
            
        </div>
        </form>
        
    );
}

export default Signup;
