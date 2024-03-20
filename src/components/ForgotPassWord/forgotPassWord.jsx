import React, { useState } from 'react';
import { AiOutlineMail} from 'react-icons/ai';
import './forgotPassWord.css';
import LoginModal from '../LoginModal/login';

function ForgotPasswordModal({ toggleModal }) {
  const [email, setEmail] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };
  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Your forgot password logic here...
      console.log('Password reset email sent to:', email);
      
      toggleModal();
    } catch (error) {
      console.error('Error resetting password:', error);
    }
  };

  return (
    <div>
      <div className="forgotPassDiv">
        <div className="forgotPassContent">
          <span className="cancelForgot" onClick={toggleModal}>&times;</span>
          <h3>Forgot Password</h3>
          <p>Enter the email address associated with your account, a reset link will
            be sent to you.
          </p>
          <form onSubmit={handleSubmit}>
            <div className='forgotPassword'>
                <div className='forgotLabel'>
                    <AiOutlineMail style={{fontSize:'18px'}}/>
                     <label htmlFor="Email">Enter your email address</label>
    
                    </div>
                    <div className='signInput'>
                    <input type="email" id="email" name="email" value={email} onChange={handleInputChange} required />
                </div>
              
            </div>
            <button type="submit">Reset Password</button>
            <div className='remPass'><p>Remember your password? <i onClick={handleLoginClick}>Log In</i></p></div>
            {showLoginModal && (
                <LoginModal onClose={() => setShowLoginModal(false)} />
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordModal;
