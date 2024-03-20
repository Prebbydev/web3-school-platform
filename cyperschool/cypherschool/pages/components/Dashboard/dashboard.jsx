import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import './dashboard.css';
import Greeting from '../../components/Greetings/greetings';
import PerformanceAnalysis from '../../components/PerformanceAnalysis/performance';
import Quotes from '../Quotes/quotes';
import Tasks from '../../components/Tasks/tasks';
import UpdatePasswordForm from '../../components/UpdatePassWordForm/updatePassForm';

const UserDash = () => {
    const name = 'Precious'; 
    const coursesRegistered = 5;

    const performanceData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        values: [65, 59, 80, 81, 56, 55, 40] // Sample data
    };

    const [showUpdatePasswordForm, setShowUpdatePasswordForm] = useState(false);
    const [showTasks, setShowTasks] = useState(false);
    const [isOnDashboard, setIsOnDashboard] = useState(true);

    const handleUpdatePasswordClick = () => {
        setShowUpdatePasswordForm(true);
        setIsOnDashboard(false);
    };

    const handleHomeClick = () => {
        setIsOnDashboard(true);
        setShowUpdatePasswordForm(false);
        setShowTasks(false);
    };

    const handleTaskClick = () => {
        setShowTasks(true);
        setIsOnDashboard(false);
        setShowUpdatePasswordForm(false);
    };

    return (
        <div style={{ marginTop: "20px", padding: "20px" }} className='widget-container'>
            <div style={{ display: "flex", gap: "10px", marginLeft: "10px" }}>
                <div>
                    {isOnDashboard ? (
                        <span style={{ textDecoration: "none", color: "#007bff", cursor: "pointer" }} onClick={handleHomeClick}>Home</span>
                    ) : (
                        <Link to="/user-dashboard" style={{ textDecoration: "none", color: "#007bff", cursor: "pointer" }} onClick={handleHomeClick}>Home</Link>
                    )}
                </div>
                <div style={{ color: "#007bff" }}>/</div>
                <div style={{ color: "#007bff" }}>Student's Dashboard</div>
            </div>

            

            <div className="dashboard" style={{ display: showUpdatePasswordForm || showTasks ? 'none' : 'block' }}>
            <Greeting name={name} className="greeting"/>
                <div className='top-widget'>
                    <div className="widget" onClick={handleUpdatePasswordClick}>
                        <p className="widget-title">Update Password</p>
                        <p className='widget-value'> <FaArrowUp className='up-arrow'/> </p>
                    </div>
                    <div className="widget">
                        <p className="widget-title">Courses Registered</p>
                        <p className='widget-value'>{coursesRegistered}</p>
                    </div>
                </div>

                <div className='bottom-widget'>
                    <div className="widget">
                        <p className="widget-title">Inspirational Quote</p>
                        <Quotes />
                    </div>
                    <div className="widget" onClick={handleTaskClick}>
                        <p className="widget-title">Daily Tasks</p>
                        <p className='widget-value'> <FaArrowUp className='up-arrow'/> </p>
                    </div>
                </div>

                <div style={{marginLeft:'10px'}}>
                   <p>Link to live class: <a href='meet.google.com/ugk-hqjb-neh'>meet.google.com/ugk-hqjb-neh</a></p>
                </div>

                <div className="performance-analysis">
                    <PerformanceAnalysis data={performanceData} />
                </div>
            </div>

            {showUpdatePasswordForm && (
                <div className="update-password-form">
                    <UpdatePasswordForm />
                </div>
            )}

            {showTasks && (
                <div >
                    <Tasks />
                </div>
            )}
        </div>
    );
};

export default UserDash;
