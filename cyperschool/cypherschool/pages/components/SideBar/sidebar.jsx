// Sidebar.js
import React from 'react';
// import '../SideBar/sidebar.css';
import { AiOutlineDashboard, AiOutlineUser,AiOutlineBook,AiOutlineBell,AiOutlineLogout } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import Link from 'next/navigation'

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
          <div><li onClick={() => handleSectionChange('courses')}>Courses</li></div>
        </div>
        <div className='dash'>
          <div className='dash_icon'><FaUsers /> </div>
          <div><li onClick={() => handleSectionChange('community')}>Community</li></div>
        </div>
        <div className='dash'>
          <div className='dash_icon'><AiOutlineBell/> </div>
          <div><li onClick={() => handleSectionChange('notification')}>Notification</li></div>
        </div>
        <div className='dash'>
          <div className='dash_icon'><AiOutlineLogout/> </div>
          <a to="/" style={{textDecoration:"none"}}>
          <div>
             <li style={{color:"#333333"}} >
              Logout 
              </li>
          </div>
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
