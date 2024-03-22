import React, { useState } from 'react';
import {AiOutlineLock } from 'react-icons/ai';
import {FaUser} from 'react-icons/fa';
import './login.css';
import SignUpModal from '../SignupModal/signup';
import ForgotPassword from '../ForgotPassWord/forgotPassWord';

function LoginModal({ toggleModal }) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    
    
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const handleForgotPassClick =()=>{
        setShowForgotPassword(true);
    }

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin =async ()=>{
       try{
            const response = await fetch('/*API goes here*/' ,{
                method:'POST',
                headers:{
                    'Content-type': 'application/json'
                },
                body:JSON.stringify({
                    //username: username,
                    //password: password
                })

            });

            if (response.ok){
                toggleModal();
                window.location.href= 'UserDashboard';
            }else{
                console.error('Login failed');
            }
        }catch(error){
            console.error('Error:',error)
        }


        
    }    
    //function for hide and show password

    const toggleShowPassword=()=>{
        setShowPassword((!showPassword));
    };
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    
    const handleSignUpClick = () => {
        setShowSignUpModal(true);
    };

    return (
        <div>
            <div className="modal">
                <div className="modal-content">
                    <span className="cancel" onClick={toggleModal}>&times;</span>
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className='logIn'>
                            <div className='userLabel'>
                            <FaUser style={{fontSize:'18px'}}/> <label htmlFor="username">Username</label>
            
                            </div>
                            <div className='userInput'>
                                <input type="text" id="username" name="username" required  value={formData.username} onChange={handleInputChange}/>
                            </div>
                        </div>
                        <div className='logIn'>
                         <div className='userLabel'>
                         <AiOutlineLock style={{fontSize:'18px'}}/> <label htmlFor="password" >Password</label>
            
                            </div>
                            <div className='userInput'>
                                <input type={showPassword ? 'text': 'password'} value={formData.password}
                                onChange={handleInputChange} id="password" name='password' required  />
                                <p onClick={toggleShowPassword}>{showPassword ? 'Hide': 'Show'}</p>

                            </div>
                        </div>
                        <h5 onClick={handleForgotPassClick}>Forgot password?</h5>
                        
                        
                        
                        
                        <button type="submit">Log In</button>
                        <div onClick={handleSignUpClick}><h4>Create account</h4></div>
                        {showSignUpModal && (
                            <SignUpModal onClose={() => setShowSignUpModal(false)} />
                        )}
                        {showForgotPassword && (
                            <ForgotPassword toggleModal={toggleModal} />
                        )}
                        
                    </form>
                </div>

            </div>
        
    </div>
    );
}

export default LoginModal;
