import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainlogin from './components/Mainlogin'
import Signup from './components/signup'; // Import your Signup component
import Home from './components/Home.js'

const App = () => {
  return (
    // <div className='container'>
    //   <Home />
    // </div>
    
      
        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path="/login" element={<Mainlogin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      
    
  );
}

export default App;

