import React, { useState } from 'react';
import { FaEnvelope, FaTrash } from 'react-icons/fa';
import '../Notification/notification.css';

const Notification = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'Request Answered',
      message: 'Your request to add join the academia community has been approved. See community list to view.',
      timestamp: '2 mins ago',
    },
    {
      id: 2,
      type: 'Assignment submitted',
      message: 'Your web3 profile page assignment has been submitted. Check portal for tracking.',
      timestamp: '10:10am',
    },
    {
      id: 3,
      type: 'Quiz failed',
      message: 'You did not meet the required pass mark. Your score is 50%, check portal to check and retake test.',
      timestamp: '10/02/2024',
    },
    {
      id: 4,
      type: 'Request Answered',
      message: 'Your request to join the front end class has been approved. The course has been added to your list of courses.',
      timestamp: '09/02/2024',
    },
    {
      id: 5,
      type: 'Registration Completed',
      message: 'You are now a student. Congratulations! Explore your portal to add courses and begin classes.',
      timestamp: '05/02/2024',
    },
  ]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleNotificationDelete = (notificationId) => {
    const updatedNotifications = notifications.filter((notification) => notification.id !== notificationId);
    setNotifications(updatedNotifications);
  };

  return (
    <div className="notif_container">
      <div>
        <h1 className="notif_h1">Notifications</h1>
        <p className="notif_p">2 unread notifications</p>
      </div>
      <div className="notif_section">
        <div>
          <ul className="notif_ul">
            <li className="notif_li">
              <button
                className={`notif_link ${activeTab === 'general' ? 'active' : ''}`}
                onClick={() => handleTabClick('general')}
              >
                General<span className="notif_badge">2</span>
              </button>
            </li>
            <li className="notif_li">
              <button
                className={`notif_link ${activeTab === 'assignments' ? 'active' : ''}`}
                onClick={() => handleTabClick('assignments')}
              >
                Assignments
              </button>
            </li>
            <li className="notif_li">
              <button
                className={`notif_link ${activeTab === 'quiz' ? 'active' : ''}`}
                onClick={() => handleTabClick('quiz')}
              >
                Quiz
              </button>
            </li>
          </ul>
        </div>
        <div>
          {activeTab === 'general' && (
            <>
              {notifications.length === 0 ? (
                <div className="no_notifications">You have no notifications</div>
              ) : (
                notifications.map((notification) => (
                  <div key={notification.id} className="general">
                    <span className="general_span">
                      <FaEnvelope className="general_icon" />
                    </span>
                    <div className="general_div">
                      <h3 className="general_h3">{notification.type}</h3>
                      <p className="general_p">{notification.message}</p>
                    </div>
                    <div className="general_trash" onClick={() => handleNotificationDelete(notification.id)}>
                      <FaTrash className="general_trash_icon" />
                      <p className="general_trash_p">{notification.timestamp}</p>
                    </div>
                  </div>
                ))
              )}
            </>
          )}
          {activeTab === 'assignments' && (
            <div className="assignment">
              {/* Render content for 'assignments' tab */}
            </div>
          )}
          {activeTab === 'quiz' && (
            <div className="quiz">
              {/* Render content for 'quiz' tab */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notification;
