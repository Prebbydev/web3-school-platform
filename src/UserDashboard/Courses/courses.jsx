import React,{useState} from 'react';
import './courses.css';
import UserCourseCard from './userCourseCard/userCourseCard';
import CoursePlaylist from './coursePlaylist/coursePlaylist';

const AllCourses = () => {

    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleCourseClick = (course) => {
        setSelectedCourse(course);
    };

    const handleGoBack = () => {
        setSelectedCourse(null);
    };


    const courses = [
        {
            name: 'Decentralized Identity',
            description: 'Explore decentralized identity solutions and self-sovereign identity.',
        },
        
        {
            name: 'Ethereum Development',
            description: 'Master Ethereum development, smart contracts, and DApps.',
        },
        {
            name: 'Web3.js Essentials',
            description: 'Discover essential skills for working with the Web3.js library.',
        },
        {
            name: 'DeFi Fundamentals',
            description: 'Explore the fundamentals of decentralized finance (DeFi).',
        },
        {
            name: 'Solidity Programming',
            description: 'Learn Solidity programming language for smart contracts.',
        },
        {
            name: 'Blockchain Security',
            description: 'Understand security challenges and best practices in blockchain.',
        },
        {
            name: 'NFT Creation and Trading',
            description: 'Create and trade Non-Fungible Tokens (NFTs) on various platforms.',
        },
        {
            name: 'Blockchain Fundamentals',
            description: 'Learn the basics of blockchain technology and its applications.',
        },
        
        {
            name: 'Blockchain for Supply Chain',
            description: 'Implement blockchain technology in supply chain management.',
        },
        {
            name: 'Crypto Economics',
            description: 'Study the economics behind cryptocurrencies and blockchain networks.',
        },
        {
            name: 'Smart Contract Auditing',
            description: 'Learn how to audit and ensure the security of smart contracts.',
        },
        {
            name: 'Blockchain Governance',
            description: 'Understand governance models and mechanisms in blockchain networks.',
        },
        {
            name: 'Hyperledger Fabric Dev',
            description: 'Develop enterprise-grade blockchain applications with Hyperledger Fabric.',
        },
        {
            name: 'Blockchain IoT Integration',
            description: 'Integrate blockchain technology with Internet of Things (IoT) devices.',
        },
        {
            name: 'Web3.js Advanced Techniques',
            description: 'Master advanced techniques for building applications with Web3.js.',
        },
    ];

    return (
        <div>
        {selectedCourse ? (
            <div className='courses-container' >
                <span className='courses-span'  onClick={handleGoBack}>Home &nbsp; / &nbsp; Student's Courses  </span>
          
                <CoursePlaylist course={selectedCourse} />
            </div>
        ) : (
            <div>
                <h2 className='courses-h2' >Enroll And Begin Your Learning Journey</h2>
                <div className="courses" >
                    {courses.map((course, index) => (
                        <UserCourseCard key={index} course={course} onClick={handleCourseClick} />
                    ))}
                </div>
            </div>
        )}
    </div>
      
    );
};

export default AllCourses;
