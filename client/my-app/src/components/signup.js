// signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './signup.css'; // Import custom CSS file for styling
// import Dropdown from 'react-bootstrap/Dropdown';


function Signup() {
    const [userType, setUserType] = useState('');

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    const renderUserFields = () => {
        if (userType === 'student') {
            return (
                <div className="user-fields">
                    {/* Fields for student */}
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <input type="password" placeholder="Confirm Password" required />
                    <input type="text" placeholder="Roll no." required />
                    <input type="text" placeholder="Name" required />
                    <input type="text" placeholder="Department" required />
                    {/* Add more fields for student if needed */}
                </div>
            );
        } else if (userType === 'external') {
            return (
                <div className="user-fields">
                    {/* Fields for external participant */}
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <input type="password" placeholder="Confirm Password" required />
                    <input type="text" placeholder="Name" required />
                    <input type="text" placeholder="Participant ID" required />   
                    <input type="text" placeholder="College Name" required />
                    {/* Add more fields for external participant if needed */}
                </div>
            );
        } else {
            return null;
        }
    };

    return (
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
            <button type="submit" className="signup-btn"><Link to="/login">SignUp</Link></button>
        </div>
    );
}

export default Signup;
