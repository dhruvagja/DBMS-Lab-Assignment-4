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
import ExternalParticipantLogin from './ExternalParticipantLogin';
import StudentLogin from './StudentLogin';
import OrganizerLogin from './OrganizerLogin';
import AdminLogin from './AdminLogin';
import './MainLogin.css'; // Import custom CSS file for styling

function MainLogin() {
    const [role, setRole] = useState('');

    const handleRoleSelection = (selectedRole) => {
        setRole(selectedRole);
    };

    // Render the appropriate login component based on the selected role
    const renderLoginComponent = () => {
        switch (role) {
            case 'externalParticipant':
                return <ExternalParticipantLogin />;
            case 'student':
                return <StudentLogin />;
            case 'organizer':
                return <OrganizerLogin />;
            case 'admin':
                return <AdminLogin />;
            default:
                return null;
        }
    };

    return (
        <div className="main-login-container">
            <div className="welcome-message">
                <h2>Welcome to IITKGP's Annual Fest 2024!</h2>
              {/* <h2>IITKGP's Annual Fest 2024!</h2> */}
            </div>
            <div className="role-selection-message">
                <p>Continue as:</p>
            </div>
            <div className="role-buttons">
                <div>
                    <button onClick={() => handleRoleSelection('externalParticipant')}>Participant</button>
                    <button onClick={() => handleRoleSelection('student')}>Student</button>
                </div>
                <div>
                    <button onClick={() => handleRoleSelection('organizer')}>Organizer</button>
                    <button onClick={() => handleRoleSelection('admin')}>Admin</button>
                </div>
            </div>
        </div>
    );
}

export default MainLogin;
