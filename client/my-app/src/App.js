import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainlogin from './components/Mainlogin'
import Signup from './components/signup'; // Import your Signup component

const App = () => {
  return (
    // <div className='container'>
    //   <Mainlogin />
    // </div>
    
      
        <Routes>
          <Route path="/" element={<Mainlogin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      
    
  );
}

export default App;

