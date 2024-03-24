import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
// import '../styles/UserDashboard.css'
import Sidebar from "./../components/SideBar/sidebar"
import { useState } from 'react';
import Link from 'next/link'
import {FaChevronLeft,FaChevronRight,FaQuoteLeft,FaQuoteRight,FaPhone} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';
import {GrLocation} from 'react-icons/gr';
import LoginModal from "./../components/LoginModal/login"
import SignUpModal from "./../components/SignupModal/signup"
import useAuthenticated from "../hooks/useAuthentication"

const Home: NextPage = () => {
  //function for Testimonial change
  const [currentIndex,setCurrentIndex]= useState(0);
  const showNextTestimonial=()=>{
      setCurrentIndex((prevIndex)=> (prevIndex+1)% 3);
  };
  const showPreviousTestimonial=()=>{
      setCurrentIndex((prevIndex)=> (prevIndex-1+3)% 3);
  };

  const { isLoading, authenticated: isAuthenticated } = useAuthenticated();
console.log(isAuthenticated);

let token;
if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
}


  //function for support submission
  const[confirmatonVisible,setConfirmationVisible]= useState(false);
  const handleSubmit=(event: any)=>{
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

  const removeToken = () => {
    if (typeof window !== "undefined") {
        localStorage.removeItem('token')
    }
  }
  
  

  
  return(
      <div className='container' id='home'>
          <div className='section-1' >
              <div className='logo'>
                  <img src={'cypherschool.png'} alt="" className='logo-pic' />
              </div>
              <div className='nav-bar'>
                  <ul className='menu'>
                  <a href='#home'> <li>Home</li></a>
                      <Link href="/courses"><li>Courses</li></Link>
                      <li><a href='#about-us'>About Us</a></li>
                      <li><a href='#contact'>Contact</a></li>
                      <li><a href='#testimony'>Testimonials</a></li>
                      <li><a href='#support'>Support</a></li>
                      {isAuthenticated ? 
                      <>
                      <li> <Link href={'/dashboard'}>Dashboard</Link> </li> 
                      <li onClick={removeToken}>Logout</li>
                      </>
                    : (

                       <>
                        <li onClick={handleSignUpClick}>Sign Up</li>
                        <li onClick={handleLoginClick}>Log In </li>
                       </>
                    )}
                      
                     
                      
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
                   <h2>Empower Your Education with <i>Cypherschool</i></h2> 
                   <h4>Unlock your potential with web3 online learning</h4>
                   <p>Join thousands of students worldwide in achieving career success through flexible,interactive 
                      and engaging web3 courses.
                   </p>
                   <button onClick={handleSignUpClick}>Start Learning Today</button>
              </div>
          </div>
          <div className='intro_section' id='about-us'>
              <div className='intro_text'>
                  <h5>Welcome to Cypherschool Academy, your gateway to a world web3 knowledge and opportunity.</h5>
                  <p>At Cypherschool Academy, we believe in empowering learners of all ages to reach their
                  full potential through quality education and innovative web3 learning experiences in blockchain space. 
                  Whether you are a student, professional or lifelong learner,our diverse range of courses and resources
                  are designed to cater to your unigue learning goals and interests.
                  </p>
              </div>
              
              <div className='intro_feature'>
                  <div className='box'>
                     <img src={'course.jpg'} alt="" />
                     <p>Online courses with interactive lessons for better understanding and flexible learning.</p>
                  </div>
                  <div className='box'>
                      <img src={'quiz.jpg'} alt="" />
                      <p>Assignments and quizzes for assessment to test your abilities and your leaarning journey.</p>
                  </div>
                  <div className='box'>
                      <img src={'community.jpg'} alt="" />
                      <p>Communication tools for both students and teachers.</p>
                  </div>
                  <div className='box'>
                      <img src={'progress.jpg'} alt="" />
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
                          <img src={"student.png"} alt=''/>
                          <h3>Pelumi Onasoga,<i><small>Front end Eng.</small></i></h3>
                          <FaQuoteLeft style={{fontSize:'10px',marginLeft:'30px'}}/><p><i><blockquote>Cypher School has transformed the way I learn. It is intuitive,engaging,
                              and has helped me achieve my career goals.</blockquote></i>
                          </p><FaQuoteRight style={{fontSize:'10px',marginLeft:'320px'}}/>
                  
                      </div>
                  )}
                  {currentIndex===1 && (
                      <div className={`${currentIndex===1 ? "active": "hidden"}`}>
                          <img src={'student_1.png'} alt=''/>
                          <h3>Precious Ogbolu,<i><small>Web3 dev</small></i></h3>
                          <FaQuoteLeft style={{fontSize:'10px',marginLeft:'30px'}}/><p><i><blockquote> The rigorous and comprehensive program at Cypher School has equipped me with web3 skills and confidence
                              needed for success in my career.</blockquote></i>
                          </p><FaQuoteRight style={{fontSize:'10px',marginLeft:'320px'}}/>
                      </div>
                  )}
                  {currentIndex===2 && (
                      <div className={`${currentIndex===2 ? "active": "hidden"}`}>
                          <img src={'student_2.png'} alt=''/>
                          <h3>Chidinma Nwatu,<i><small>Nodejs dev</small></i></h3>
                          <FaQuoteLeft style={{fontSize:'10px',marginLeft:'30px'}}/><p><i><blockquote> Cypher's hands-on approach and cutting-edge curriculum have prepared me to tackle
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
                     <p>Cypher School,Ikoyi,Lagos,Nigeria.</p>
                  </div>
                  <div className='contact-1'>
                      <FaPhone className='contact_icon'/>
                      <p>01-500-1000</p>
                  </div>
                  <div className='contact-1'>
                      <FiMail className='contact_icon'/>
                      <p>support@cypherschool.com</p>
                  </div>
                  <div className='contact-1'></div>
              </div>
          </div>


          

          
      </div>

  );
};

export default Home;
