
import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom'; // Import Link component
import Signup from './signup'; // Import the Signup component
import {FaUser, FaLock} from 'react-icons/fa';
import './MainLogin.css'; // Import custom CSS file for styling


function MainLogin() {
    const navigate = useNavigate();
    const [role, setRole] = useState('student');
    
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [authenticated, setauthenticated] = useState(false);
    
    const users = [{ username: "Jane", password: "1234" }];
  const handleLogin = (e) => {
    console.log(username);
    e.preventDefault()
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
        console.log("Logged in");
        setauthenticated(true)
        localStorage.setItem("authenticated", true);
        navigate("/");
    }
    else
    {
        alert("Invalid credentials");
    }
  };

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    return (
        <div className="main-login-container">
            <div className="welcome-message">
                <h2>Welcome to IITKGP's Annual Fest 2024!</h2>
            </div>
            <div className='wrapper'>
                <form onSubmit={handleLogin}>
                    <h2>Login</h2>
                    <div className="input-box">
                        <input type="text"
                         placeholder="Username"
                         value={username}
                         onChange={(e) => setusername(e.target.value)} required/>
                         
                        <FaUser className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                         required />
                        <FaLock className='icon'/>
                    </div>
                    
                    
                    <div className="role-dropdown">
                        <select value={role} onChange={handleRoleChange}>
                            <option value="student">Student</option>
                            <option value="organizer">Organizer</option>
                            <option value="external">External Participant</option>
                        </select>
                    </div>
                   
                    <div className="remember-me">
                        <label><input type="checkbox" />Remember me</label>
                    </div>

                    <button type="submit" className="btn">Login</button>
                    <div className="register-link">
                    <p>Don't have an account? <Link to="/signup">Register here</Link></p>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default MainLogin;
