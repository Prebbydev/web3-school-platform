import React, { useState, useEffect } from 'react';
// import './userCourseCard.css';
// import img1 from '../../../components/AllCourses/courseImages/blockchain_fundamentals.jpg';
// import img2 from '../../../components/AllCourses/courseImages/ethereum_development.jpg';
// import img3 from '../../../components/AllCourses/courseImages/web3js_essentials.jpg';
// import img4 from '../../../components/AllCourses/courseImages/defi_fundamentals.jpg';
// import img5 from '../../../components/AllCourses/courseImages/solidity_programming.jpg';
// import img6 from '../../../components/AllCourses/courseImages/blockchain_security.jpg';
// import img7 from '../../../components/AllCourses/courseImages/nft_creation.jpg';
// import img8 from '../../../components/AllCourses/courseImages/decentralized_identity.jpg';
// import img9 from '../../../components/AllCourses/courseImages/supply_chain_blockchain.jpg';
// import img10 from '../../../components/AllCourses/courseImages/crypto_economics.jpg';
// import img11 from '../../../components/AllCourses/courseImages/smart_contract_auditing.jpg';
// import img12 from '../../../components/AllCourses/courseImages/blockchain_governance.jpg';
// import img13 from '../../../components/AllCourses/courseImages/hyperledger_fabric.jpg';
// import img14 from '../../../components/AllCourses/courseImages/blockchain_iot.jpg';
// import img15 from '../../../components/AllCourses/courseImages/web3js_advanced.jpg';

const UserCourseCard = ({ course, onClick }) => {
    const imageUrls = {
        'Blockchain Fundamentals': 'blockchain_fundamentals.jpg',
        'Ethereum Development': 'ethereum_development.jpg',
        'Web3.js Essentials': 'web3js_essentials.jpg',
        'DeFi Fundamentals': 'defi_fundamentals.jpg',
        'Solidity Programming': 'solidity_programming.jpg',
        'Blockchain Security': 'blockchain_security.jpg',
        'NFT Creation and Trading': 'nft_creation.jpg',
        'Decentralized Identity': 'decentralized_identity.jpg',
        'Blockchain for Supply Chain': 'supply_chain_blockchain.jpg',
        'Crypto Economics': 'crypto_economics.jpg',
        'Smart Contract Auditing': 'smart_contract_auditing.jpg',
        'Blockchain Governance': 'blockchain_governance.jpg',
        'Hyperledger Fabric Dev': 'hyperledger_fabric.jpg',
        'Blockchain Integration with IoT': 'blockchain_iot.jpg',
        'Web3.js Advanced Techniques': 'web3js_advanced.jpg'
    };

    const [enrolled, setEnrolled] = useState(false);

    useEffect(() => {
        const storedEnrollmentStatus = localStorage.getItem(course.name);
        if (storedEnrollmentStatus) {
            setEnrolled(storedEnrollmentStatus === 'enrolled');
        }
    }, [course.name]);

    const handleEnroll = () => {
        setEnrolled(true);
        localStorage.setItem(course.name, 'enrolled');
    };

    return (
        <div className="user-course-card" >
            <img src={imageUrls[course.name]} alt={course.name} onClick={() => onClick(course)}/>
            <h2 onClick={() => onClick(course)}>{course.name}</h2>
            <p>{course.description}</p>

            {enrolled ? 
                <button disabled style={{ padding: '10px 20px', backgroundColor: '#333333',marginLeft:'20px', color: '#fff',border: 'none',
                borderRadius: '4px', cursor: 'pointer' }} >Enrolled</button>
                :
                <button onClick={handleEnroll} style={{ padding: '10px 20px', backgroundColor: '#3A306C',marginLeft:'20px', color: '#fff',border: 'none',
                borderRadius: '4px', cursor: 'pointer' }} >Enroll</button>
            }
        </div>
    );
};

export default UserCourseCard;
