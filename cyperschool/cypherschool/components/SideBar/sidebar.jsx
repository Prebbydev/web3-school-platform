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
          <div className='dash_icon' onClick={() => handleSectionChange('dashboard')}><AiOutlineDashboard/> </div>
          <span className='tooltip'>Dashboard</span>
          <div><li onClick={() => handleSectionChange('dashboard')}>Dashboard</li></div>
        </div>
        <div className='dash'>
          <div className='dash_icon' onClick={() => handleSectionChange('profile')}><AiOutlineUser/> </div>
          <span className='tooltip'>Profile</span>
          <div><li onClick={() => handleSectionChange('profile')}>Profile</li></div>
        </div>
        <div className='dash'>
          <div className='dash_icon' onClick={() => handleSectionChange('courses')}><AiOutlineBook/> </div>
          <span className='tooltip'>Courses</span>
          <div><li onClick={() => handleSectionChange('courses')}>Courses</li></div>
        </div>
        <div className='dash'>
          <div className='dash_icon' onClick={() => handleSectionChange('community')}><FaUsers /> </div>
          <span className='tooltip'>Community</span>
          <div><li onClick={() => handleSectionChange('community')}>Community</li></div>
        </div>
        <div className='dash'>
          <div className='dash_icon' onClick={() => handleSectionChange('notification')}><AiOutlineBell/> </div>
          <span className='tooltip'>Notification</span>
          <div><li onClick={() => handleSectionChange('notification')}>Notification</li></div>
        </div>
        <div className='dash'>
         <ConnectButton />
        </div>
        <div className='dash'>
          
          <span className='tooltip'>Logout</span>
          <Link href="/" style={{textDecoration:"none"}}>
            <div className='dash_icon'><AiOutlineLogout/> </div>
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
