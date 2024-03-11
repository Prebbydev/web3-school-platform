// SignUpModal.js
import React, { useState, useEffect } from 'react';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import '../SignupModal/signup.css';
import LoginModal from '../LoginModal/login';

function SignUpModal({ toggleModal, openLoginModal }) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [showLoginModal, setShowLoginModal] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!document.querySelector('.signUp_content').contains(e.target)) {
                toggleModal();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [toggleModal]);

    const handleLoginClick = () => {
        toggleModal();
        openLoginModal();
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmitSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Replace the empty string with your backend API URL
            const response = await fetch('YOUR_API_ENDPOINT_HERE', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('SignUp successful:', data);
                setSuccessMessage('SignUp successful! Check Email for confirmation');
                setTimeout(() => {
                    setShowLoginModal(true);
                }, 5000);
            } else {
                const errorData = await response.json();
                console.error('Signup error:', errorData);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }

        setError(null);
    };

    // function for hide and show password
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    if (showLoginModal) {
        return <LoginModal toggleModal={() => setShowLoginModal(false)} />;
    }

    return (
        <div>
            <div className="signUpDiv">
                <div className="signUp_content">
                    <span className="close" onClick={toggleModal}>
                        &times;
                    </span>
                    <h2>SignUp</h2>
                    <form onSubmit={handleSubmitSignUp}>
                        <div className="signIn">
                            <div className="signLabel">
                                <AiOutlineMail style={{ fontSize: '18px' }} /> <label htmlFor="Email">Email</label>
                            </div>
                            <div className="signInput">
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                            </div>
                        </div>
                        <div className="signIn">
                            <div className="signLabel">
                                <FaUser style={{ fontSize: '18px' }} /> <label htmlFor="username">Username</label>
                            </div>
                            <div className="signInput">
                                <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} required />
                            </div>
                        </div>
                        <div className="signIn">
                            <div className="signLabel">
                                <AiOutlineLock style={{ fontSize: '18px' }} /> <label htmlFor="password">Password</label>
                            </div>
                            <div className="signInput">
                                <input type={showPassword ? 'text' : 'password'} value={formData.password} onChange={handleInputChange} id="password" name="password" required />
                                <p onClick={toggleShowPassword}>{showPassword ? 'Hide' : 'Show'}</p>
                            </div>
                        </div>
                        {error && <p className="signUpmessage">{error}</p>}
                        {successMessage && <p className="message">{successMessage}</p>}

                        <button type="submit" disabled={loading}>
                            {loading ? 'Signing Up...' : 'Sign Up'}
                        </button>
                        <div className="logUser">
                            <p>
                                Already have an account? <i onClick={handleLoginClick}>Log In</i>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUpModal;
