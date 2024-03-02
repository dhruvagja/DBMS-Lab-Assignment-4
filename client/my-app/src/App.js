import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainlogin from './components/Mainlogin'
import Signup from './components/signup'; // Import your Signup component
import Home from './components/Home.js'
import RegisteredEvents from './components/RegisteredEvents.js';
import OrganisingEvents from './components/OrganisingEvents.js';
import VolunteerEvents from './components/VolunteerEvents.js';
import Logout from './components/Logout.js';

const App = () => {
  return (
    // <div className='container'>
    //   <Home />
    // </div>
    
      
        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path="/login" element={<Mainlogin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path= "/registered-events" element={<RegisteredEvents />} />
          <Route path= "/organising-events" element={<OrganisingEvents />} />
          <Route path= "/volunteer-events" element={<VolunteerEvents />} />
          <Route path= "/logout" element={<Logout />} />
        </Routes>
      
    
  );
}

export default App;

