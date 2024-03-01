// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Mainlogin = () => {
//     const history = useNavigate();

//     const handleRoleSelection = (role) => {
//         switch (role) {
//             case 'externalParticipant':
//                 history.push('/externalParticipant-login');
//                 break;
//             case 'student':
//                 history.push('/student-login');
//                 break;
//             case 'organizer':
//                 history.push('/organizer-login');
//                 break;
//             case 'admin':
//                 history.push('/admin-login');
//                 break;
//             default:
//                 break;
//         }
//     };

//     return (
//         <div>
//             <h2>Welcome to the University Fest!</h2>
//             <p>Please select your role:</p>
//             <button onClick={() => handleRoleSelection('externalParticipant')}>External Participant</button>
//             <button onClick={() => handleRoleSelection('student')}>Student</button>
//             <button onClick={() => handleRoleSelection('organizer')}>Organizer</button>
//             <button onClick={() => handleRoleSelection('admin')}>Admin</button>
//         </div>
//     );
// }

// export default Mainlogin;

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
// import { useNavigate } from 'react-router-dom'; // Import useHistory hook
import Signup from './signup'; // Import the Signup component
import './MainLogin.css'; // Import custom CSS file for styling
import {FaUser, FaLock} from 'react-icons/fa';

function MainLogin() {
    // const [role, setRole] = useState('');

    // const handleRoleSelection = (selectedRole) => {
    //     setRole(selectedRole);
    // };

    // // Render the appropriate login component based on the selected role
    // const renderLoginComponent = () => {
    //     switch (role) {
    //         case 'externalParticipant':
    //             return <ExternalParticipantLogin />;
    //         case 'student':
    //             return <StudentLogin />;
    //         case 'organizer':
    //             return <OrganizerLogin />;
    //         case 'admin':
    //             return <AdminLogin />;
    //         default:
    //             return null;
    //     }
    // };
    // const [showSignup, setShowSignup] = useState(false);

    // const handleSignupClick = () => {
    //     setShowSignup(true);
    // };

    return (
        <div className="main-login-container">
            <div className="welcome-message">
                <h2>Welcome to IITKGP's Annual Fest 2024!</h2>
            </div>
            <div className='wrapper'>
                <form action="">
                    <h2>Login</h2>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <FaUser className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <FaLock className='icon'/>
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
            {/* {showSignup && <Signup />} Conditionally render the Signup component */}
        </div>
    );
}

export default MainLogin;
