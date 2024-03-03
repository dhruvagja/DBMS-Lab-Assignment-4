
import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom'; // Import Link component
import Signup from './signup'; // Import the Signup component
import {FaUser, FaLock} from 'react-icons/fa';
import './MainLogin.css'; // Import custom CSS file for styling
//import Axios from 'axios';
import { redirect } from 'react-router-dom';
import { useEffect } from 'react';


function MainLogin() {
    const navigate = useNavigate();
    const [role, setRole] = useState('student');
    
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [authenticated, setauthenticated] = useState(false);
    
//     const users = [{ username: "Jane", password: "testpassword" }];
  const HandleLogin = async (e) => {
    e.preventDefault()
    // const account = users.find((user) => user.username === username);
    // if (account && account.password === password) {
    //     setauthenticated(true)
    //     localStorage.setItem("authenticated", true);
    //     navigate("/");
    // }
    // else
    // {
    //     alert("Invalid credentials");
    // }

    // sending post request to server
    // Axios.post("http://localhost:8081/login", {
    //     id : username,
    //     password: password,
    //     role: role
    // }).then((response)=>{
    //     console.log(response);
    // }).catch (error => console.log(error));
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('role', role);


    const forminfo = {
        id : username,
        password : password,
        role : role
    }

    // useEffect(() => {
        fetch("http://localhost:8081/login", {
            method : "POST",
            headers:{
                'Content-Type' : "application/json"
            },
            body : JSON.stringify(forminfo)
        })
        // .then(res => {
        //     if(res.status == 200){
        //         console.log("Logged in rertyuiytretyuiytretyjkasfhgvauifvasghjfvahgfajvf");
                
        //     }
        //     navigate(`/`);
        // });
        .then(res => {
            if(!res.ok){
                alert("Invalid credentials");
                window.location.reload();
            }
            return res.json();
        })
        // .then(data => console.log(data));
        .then(data => {
            // console.log(`role ${role}`);
            setauthenticated(true);
            localStorage.setItem('authenticated', true);
            localStorage.setItem('accessToken' , data.accessToken);
            localStorage.setItem('username' , username);
            localStorage.setItem('role' , role);
            localStorage.setItem('password', password);
            navigate("/");
            // redirect("/");
        });
    // },[])

    // await Axios 
    //     .post("http://localhost:8081/login", {username:username, password:password, role:role})
    //     .then((res) => {
    //         console.log(res);
    //         alert("Logged in");
    //         // <Redirect to= "/" />
    //         navigate("/");
    //     })
    //     .catch((error) => {
    //         alert(error.response.data);
    //         window.location.reload();
    //     });

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
                <form onSubmit={HandleLogin}>
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