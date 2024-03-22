import React, { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Head from 'next/head';
import Sidebar from "./../components/SideBar/sidebar"
import Profile from './../components/UserProfile/userpProfile'
import Notification from './../components/Notification/notification'
import UserDash from "./../components/Dashboard/dashboard"
import Courses from "./../components/Courses/courses"
import Community from "./../components/Community/community"
import AuthMiddleware from "../middlewares/AuthMiddleware"
const Home = () => {
  const [currentSection, setCurrentSection] = useState('dashboard');

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };
  return (
    <AuthMiddleware>

    <div className="dashboard-container">
      <Sidebar onSectionChange={handleSectionChange} />

      <div className="main-content">
        {currentSection === 'dashboard' && <UserDash />}
        {currentSection === 'profile' && <Profile />}
        {currentSection === 'community' && <Community />}
        {currentSection === 'courses' && <Courses />}
        {currentSection === 'notification' && <Notification />}

      </div>
    </div>
   </AuthMiddleware>
  );
};

export default Home;
