import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './HomePage/HomePage.jsx';
import UserDashboard from './UserDashboard/UserDashboard.jsx';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/user-dashboard" element={ <UserDashboard />} />
      </Routes>

    </Router>
  );
};

export default App;
