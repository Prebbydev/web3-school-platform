import React, { useState } from 'react';
import '../Community/community.css';
import ChatBox from '../ChatBox/chatbox';
import student1 from '../../Images/student_1.png';
import student2 from '../../Images/student_2.png';

const Community = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { id: 1, name: 'Chinedu Okonkwo', department: 'Computer Science', image: student1 },
    { id: 2, name: 'Ngozi Obi', department: 'Accounting', image: student2 },
    { id: 3, name: 'Oluchi Okafor', department: 'Law', image: student1 },
    { id: 4, name: 'Emeka Nwosu', department: 'Civil Engineering', image: student2},
    { id: 5, name: 'Aisha Ibrahim', department: 'Chemical Engineering', image: student2 },
    { id: 6, name: 'Yusuf Abdullahi', department: 'Mechanical Engineering', image: student1 },
    { id: 7, name: 'Funke Adekunle', department: 'Electrical Engineering', image: student2 },
    { id: 8, name: 'Tolu Adebayo', department: 'Mass Communication', image: student2 },
    { id: 9, name: 'Segun Oladele', department: 'Medicine and Surgery', image: student1 },
    { id: 10, name: 'Chiamaka Nwachukwu', department: 'Biochemistry', image: student1 },
  ];

  const handleUserClick = (user) => {
    setSelectedUser(prevUser => (prevUser && prevUser.id === user.id) ? null : user);
  };
  const Pagination = () => {
    return (
      <div className="pagination">
        <button>&laquo; Prev</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>Next &raquo;</button>
      </div>
    );
  };

  return (
    <div className="community">
        <div className='community-header'>
            <h2>Meet the community</h2>
            <p>Connect with other students</p>
        </div>
      
      <div className="user-list">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <img src={user.image} alt={user.name} onClick={() => handleUserClick(user)} />
            <div className="user-details">
              <h3 onClick={() => handleUserClick(user)}>{user.name}</h3>
              <p>Department: {user.department}</p>
            </div>
            {selectedUser && selectedUser.id === user.id && (
              <div className="chatbox">
                <h3>Chatting with {selectedUser.name}</h3>
                <ChatBox />
              </div>
            )}
          </div>
        ))}
      </div>
      <Pagination/>
    </div>
  );
};

export default Community;
