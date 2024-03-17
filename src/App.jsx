import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './HomePage/HomePage.jsx';
import UserDashboard from './UserDashboard/UserDashboard.jsx';
import Courses from './components/AllCourses/allCourses.jsx';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/user-dashboard" element={ <UserDashboard />} />
        <Route path="/courses" element={ <Courses />} />
      </Routes>

    </Router>
  );
};

export default App;
