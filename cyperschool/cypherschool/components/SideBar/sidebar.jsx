import React from 'react';
import { AiOutlineDashboard, AiOutlineUser,AiOutlineBook,AiOutlineBell,AiOutlineLogout } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import Link from 'next/link'
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Sidebar = ({ onSectionChange }) => {
  const handleSectionChange = (section) => {
    onSectionChange(section);
  };

  return (
    <div className="sidebar">
      <ul>
        <div className='dash'>
          <div className='dash_icon'><AiOutlineDashboard/> </div>
          <span className='tooltip'>Dashboard</span>
          <div><li onClick={() => handleSectionChange('dashboard')}>Dashboard</li></div>
        </div>
        <div className='dash'>
          <div className='dash_icon'><AiOutlineUser/> </div>
          <span className='tooltip'>Profile</span>
          <div><li onClick={() => handleSectionChange('profile')}>Profile</li></div>
        </div>
        <div className='dash'>
          <div className='dash_icon'><AiOutlineBook/> </div>
          <span className='tooltip'>Courses</span>
          <div><li onClick={() => handleSectionChange('courses')}>Courses</li></div>
        </div>
        <div className='dash'>
          <div className='dash_icon'><FaUsers /> </div>
          <span className='tooltip'>Community</span>
          <div><li onClick={() => handleSectionChange('community')}>Community</li></div>
        </div>
        <div className='dash'>
          <div className='dash_icon'><AiOutlineBell/> </div>
          <span className='tooltip'>Notification</span>
          <div><li onClick={() => handleSectionChange('notification')}>Notification</li></div>
        </div>
        <div className='dash'>
         <ConnectButton />
        </div>
        <div className='dash'>
          <div className='dash_icon'><AiOutlineLogout/> </div>
          <span className='tooltip'>Logout</span>
          <Link href="/" style={{textDecoration:"none"}}>
          <div>
             <li style={{color:"#333333"}} >
              Logout 
              </li>
          </div>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
