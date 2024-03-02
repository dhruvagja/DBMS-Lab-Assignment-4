// Logout.js

import React from 'react';
import { useNavigate} from 'react-router-dom';
import { useEffect } from "react";

const Logout = () => {
  // Add logout functionality here
  // Clear local storage
  const navigate = useNavigate();
  // localStorage.clear();
  localStorage.setItem('username', null);
  localStorage.setItem('password', null);
  localStorage.setItem('role', null);
  localStorage.setItem('authenticated', false);
  localStorage.removeItem('accessToken');
  console.log("Logged out");
  
  useEffect(() => {
    navigate("/login");
  
  },[]);

};

export default Logout;
