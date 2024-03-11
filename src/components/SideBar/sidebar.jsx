// Sidebar.js
import React from 'react';
import '../SideBar/sidebar.css';
import { AiOutlineDashboard, AiOutlineUser,AiOutlineBook,AiOutlineBell,AiOutlineLogout } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Sidebar = ({ onSectionChange }) => {
  const handleSectionChange = (section) => {
    onSectionChange(section);
  };

  return (
    <div className="sidebar">
      <ul>
        <div className='dash'>
          <div className='dash_icon'><AiOutlineDashboard/> </div>
          <div><li onClick={() => handleSectionChange('dashboard')}>Dashboard</li></div>
        </div>
        <div className='dash'>
          <div className='dash_icon'><AiOutlineUser/> </div>
          <div><li onClick={() => handleSectionChange('profile')}>Profile</li></div>
        </div>
        <div className='dash'>
          <div className='dash_icon'><AiOutlineBook/> </div>
          <div><li onClick={() => handleSectionChange('course')}>Courses</li></div>
        </div>
        <div className='dash'>
          <div className='dash_icon'><AiOutlineBell/> </div>
          <div><li onClick={() => handleSectionChange('notification')}>Notification</li></div>
        </div>
        <div className='dash'>
          <div className='dash_icon'><AiOutlineLogout/> </div>
          <div>
             <li style={{color:"#333333"}} >
              <Link to="/">Logout </Link>
              </li>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
