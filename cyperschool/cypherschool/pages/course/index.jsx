import React, { useState } from 'react';
import CourseCard from '../../components/AllCourses/courseCard/courseCard';
import CourseModal from '../../components/AllCourses/courseModal/courseModal';
import Link from "next/link";

const AllCourses = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState('');

    const openModal = (courseName) => {
        setSelectedCourse(courseName);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const courses = [
        {
            name: 'Blockchain Fundamentals',
            description: 'Learn the basics of blockchain technology and its applications.',
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
            name: 'Decentralized Identity',
            description: 'Explore decentralized identity solutions and self-sovereign identity.',
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
            name: 'Hyperledger Fabric Development',
            description: 'Develop enterprise-grade blockchain applications with Hyperledger Fabric.',
        },
        {
            name: 'Blockchain Integration with IoT',
            description: 'Integrate blockchain technology with Internet of Things (IoT) devices.',
        },
        {
            name: 'Web3.js Advanced Techniques',
            description: 'Master advanced techniques for building applications with Web3.js.',
        },
    ];

    return (
        <div className="container" style={{height:'2200px'}}>
            <div style={{padding:'20px', color:' rgb(47, 47, 209)', cursor:'pointer'}}><Link href='/' style={{textDecoration:'none'}}><p> <b>&lt;&nbsp;&nbsp;</b>  Go to HomePage</p></Link></div>
            <h1 style={{padding:'20px ', color:'#333333',textAlign:'center'}}>List Of Courses We Offer</h1>
            <div className="courses" style={{display:"grid" ,gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
                {courses.map((course, index) => (
                    <CourseCard key={index} course={course} openModal={openModal} />
                ))}
            </div>
            <CourseModal isOpen={modalOpen} closeModal={closeModal} courseName={selectedCourse} />
        </div>
    );
};

export default AllCourses;
