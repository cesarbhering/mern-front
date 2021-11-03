import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './Components/LoginComponent';
import ActivitiesList from './Components/ActivitiesList';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <LoginComponent /> } />
        <Route exact path="/ActivitiesList" element={ <ActivitiesList /> } />
      </Routes>
    </Router>
  );
}

export default App;
