import React,{useState} from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import course from '../Images/course.jpg';
import communication from '../Images/community.jpg';
import progress from '../Images/progress.jpg';
import quiz from '../Images/quiz.jpg';
import student from '../Images/student.png';
import studentt from '../Images/student_1.png';
import stud from '../Images/student_2.png';
import {FaChevronLeft,FaChevronRight,FaQuoteLeft,FaQuoteRight,FaPhone} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';
import {GrLocation} from 'react-icons/gr';
import LoginModal from '../components/LoginModal/login';
import SignUpModal from '../components/SignupModal/signup'; 

function HomePage() {
    
    //function for Testimonial change
    const [currentIndex,setCurrentIndex]= useState(0);
    const showNextTestimonial=()=>{
        setCurrentIndex((prevIndex)=> (prevIndex+1)% 3);
    };
    const showPreviousTestimonial=()=>{
        setCurrentIndex((prevIndex)=> (prevIndex-1+3)% 3);
    };

    //function for support submission
    const[confirmatonVisible,setConfirmationVisible]= useState(false);
    const handleSubmit=(event)=>{
        event.preventDefault();
        setConfirmationVisible(true);
        setTimeout(()=>{
            setConfirmationVisible(false);
            event.target.reset();
        },3000);
    }

    //function for showing and hiding login modal and signup modal
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const handleLoginClick = () => {
        setShowLoginModal(true);
    };

    const handleSignUpClick = () => {
        setShowSignUpModal(true);
    };

    const toggleLoginModal = () => {
        setShowLoginModal(!showLoginModal);
    };

    const toggleSignUpModal = () => {
        setShowSignUpModal(!showSignUpModal);
    };

    
    

    
    return(
        <div className='container' id='home'>
            <div className='section-1' >
                <div className='logo'>
                    <img src={logo} alt="" className='logo-pic' />
                </div>
                <div className='nav-bar'>
                    <ul className='menu'>
                    <a href='#home'> <li>Home</li></a>
                        <Link to="/courses"><li>Courses</li></Link>
                        <li><a href='#about-us'>About Us</a></li>
                        <li><a href='#contact'>Contact</a></li>
                        <li><a href='#testimony'>Testimonials</a></li>
                        <li><a href='#support'>Support</a></li>
                        <li onClick={handleSignUpClick}>Sign Up</li>
                        
                        <li onClick={handleLoginClick}>Log In </li>
                        
                    </ul>
                </div>
                {showLoginModal && (
                    <LoginModal toggleModal={toggleLoginModal} /> 
                 )}

                {showSignUpModal && (
                    <SignUpModal toggleModal={toggleSignUpModal} openLoginModal={toggleLoginModal} /> 
                )}

                
               
                
            </div>

            <div className='hero_section'>
                <div className='overlay'></div>
                <div className='hero_content'>
                     <h2>Empower Your Education with <i>Wellsy</i></h2> 
                     <h4>Unlock your potential with online learning</h4>
                     <p>Join thousands of students worldwide in achieving academic success through flexible,interactive 
                        and engaging online courses.
                     </p>
                     <button onClick={handleSignUpClick}>Start Learning Today</button>
                </div>
            </div>
            <div className='intro_section' id='about-us'>
                <div className='intro_text'>
                    <h5>Welcome to Wellsy Academy, your gateway to a world of knowledge and opportunity.</h5>
                    <p>At Wellsy Academy, we believe in empowering learners of all ages to reach their
                    full potential through quality education and innovative learning experiences. 
                    Whether you are a student,professional or lifelong learner,our diverse range of courses and resources
                    are designed to cater to your unigue learning goals and interests.
                    </p>
                </div>
                
                <div className='intro_feature'>
                    <div className='box'>
                       <img src={course} alt="" />
                       <p>Online courses with interactive lessons for better understanding and flexible learning.</p>
                    </div>
                    <div className='box'>
                        <img src={quiz} alt="" />
                        <p>Assignments and quizzes for assessment to test your abilities and your leaarning journey.</p>
                    </div>
                    <div className='box'>
                        <img src={communication} alt="" />
                        <p>Communication tools for both students and teachers.</p>
                    </div>
                    <div className='box'>
                        <img src={progress} alt="" />
                        <p>Progress tracking and performance analytics</p>
                    </div>
                </div>
                
            </div>

            <div className='testimonial' id='testimony'>
                <h2>What Some Of Our Students Say</h2>
                <div className='test'>
                    <div><FaChevronLeft style={{marginTop:'230px'}} onClick={showPreviousTestimonial}/></div>
                    <div className='testimonial_div'>
                    {currentIndex===0 && (
                        <div className={`${currentIndex===0 ? "active": "hidden"}`}>
                            <img src={student} alt=''/>
                            <h3>Pelumi Onasoga,<i><small>cs student</small></i></h3>
                            <FaQuoteLeft style={{fontSize:'10px',marginLeft:'30px'}}/><p><i><blockquote>Wellsy Academy has transformed the way I learn. It is intuitive,engaging,
                                and has helped me achieve my academic goals.</blockquote></i>
                            </p><FaQuoteRight style={{fontSize:'10px',marginLeft:'320px'}}/>
                    
                        </div>
                    )}
                    {currentIndex===1 && (
                        <div className={`${currentIndex===1 ? "active": "hidden"}`}>
                            <img src={studentt} alt=''/>
                            <h3>Precious Ogbolu,<i><small>medical student</small></i></h3>
                            <FaQuoteLeft style={{fontSize:'10px',marginLeft:'30px'}}/><p><i><blockquote> The rigorous and comprehensive program at Wellsy Academy has equipped me with skills and confidence
                                needed for success in the medical field.</blockquote></i>
                            </p><FaQuoteRight style={{fontSize:'10px',marginLeft:'320px'}}/>
                        </div>
                    )}
                    {currentIndex===2 && (
                        <div className={`${currentIndex===2 ? "active": "hidden"}`}>
                            <img src={stud} alt=''/>
                            <h3>Chidinma Nwatu,<i><small>engineering student</small></i></h3>
                            <FaQuoteLeft style={{fontSize:'10px',marginLeft:'30px'}}/><p><i><blockquote> Wellsy's hands-on approach and cutting-edge curriculum have prepared me to tackle
                                 the real-world engineering challenges with confidence and expertise.</blockquote></i>
                            </p><FaQuoteRight style={{fontSize:'10px',marginLeft:'320px'}}/>
                        </div>
                    )}
                        
                    </div>
                    <div><FaChevronRight style={{marginTop:'230px'}} onClick={showNextTestimonial}/></div>
                </div>
                
                
            </div>
            <div className='support' id='support'>
                <div className='helpDesk'>
                    <h2>Send us a message!</h2>
                    <form action="" method='' onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor="name">Full Name:</label>
                        
                            </div>
                            <div className='col-75'>
                                <input type="text" id='name' name='name' required/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor="email">Email Address:</label>
                        
                            </div>
                            <div className='col-75'>
                                <input type="email" id='email' name='email' required />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-25'>
                            <label htmlFor="phone_no">Phone Number:</label>
                        
                            </div>
                            <div className='col-75'>
                             <input type="tel" name='phone' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor="message">Your Message</label>
                        
                            </div>
                            <div className='col-75'>
                                <textarea name="message" id="message"  placeholder='Your message...'></textarea>
                            </div>
                        </div>
                        
                        
                        
                        

                        <button>Submit</button>
                    </form>
                    {confirmatonVisible&&(
                        <div className='message'>Thank you for your message! We will get back to you shortly.</div>
                    )}
                </div>
                <div className='contact' id='contact'>
                    <div className='contact-1'>
                        <GrLocation className='contact_icon'/>
                       <p>Wellsy Academy,Ikoyi,Lagos,Nigeria.</p>
                    </div>
                    <div className='contact-1'>
                        <FaPhone className='contact_icon'/>
                        <p>01-500-1000</p>
                    </div>
                    <div className='contact-1'>
                        <FiMail className='contact_icon'/>
                        <p>support@wellsyacademy.com</p>
                    </div>
                    <div className='contact-1'></div>
                </div>
            </div>


            

            
        </div>

    );

};

export default HomePage;
