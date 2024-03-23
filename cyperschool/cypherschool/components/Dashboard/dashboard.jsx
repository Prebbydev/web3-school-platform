import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { FaArrowUp } from 'react-icons/fa';
import Greeting from '../../components/Greetings/greetings';
import PerformanceAnalysis from '../../components/PerformanceAnalysis/performance';
import Quotes from '../Quotes/quotes';
import Tasks from '../../components/Tasks/tasks';
import UpdatePasswordForm from '../../components/UpdatePassWordForm/updatePassForm';
import { useWriteContract, useSimulateContract, useAccount, useReadContract  } from "wagmi";
import axios from "../../axios/authAxios"
import { truuncateAddress } from "../../helpers/truncateAddress"
const UserDash = () => {
    const coursesRegistered = 5;
    const { address } = useAccount()

    const [data, setData] = useState()

    

    
    


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

    useEffect(() => {
        const profile = async () => {
            try {
                const response = await axios().get("/user-profile")
            console.log(response)
            setData(response)
            } catch (error) {
             console.log(error);   
            }
          }
        profile()
      }, [])

      console.log(data);

    return (
        <div style={{ marginTop: "20px", padding: "20px" }} className='widget-container'>
            <div style={{ display: "flex", gap: "10px", marginLeft: "10px" }}>
                <div>
                    {isOnDashboard ? (
                        <span style={{ textDecoration: "none", color: "#007bff", cursor: "pointer" }} onClick={handleHomeClick}>Home</span>
                    ) : (
                        <Link href="/user-dashboard" style={{ textDecoration: "none", color: "#007bff", cursor: "pointer" }} onClick={handleHomeClick}>Home</Link>
                    )}
                </div>
                <div style={{ color: "#007bff" }}>/</div>
                <div style={{ color: "#007bff" }}>Student's Dashboard Coming Soon</div>
            </div>

            

            <div className="dashboard" style={{ display: showUpdatePasswordForm || showTasks ? 'none' : 'block' }}>
            <Greeting name={truuncateAddress(address)} className="greeting"/>
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
