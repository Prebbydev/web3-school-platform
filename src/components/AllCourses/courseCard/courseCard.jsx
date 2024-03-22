import React from 'react';
import './courseCard.css';
import img1 from '../courseImages/blockchain_fundamentals.jpg';
import img2 from '../courseImages/ethereum_development.jpg';
import img3 from '../courseImages/web3js_essentials.jpg';
import img4 from '../courseImages/defi_fundamentals.jpg';
import img5 from '../courseImages/solidity_programming.jpg';
import img6 from '../courseImages/blockchain_security.jpg';
import img7 from '../courseImages/nft_creation.jpg';
import img8 from '../courseImages/decentralized_identity.jpg';
import img9 from '../courseImages/supply_chain_blockchain.jpg';
import img10 from '../courseImages/crypto_economics.jpg';
import img11 from '../courseImages/smart_contract_auditing.jpg';
import img12 from '../courseImages/blockchain_governance.jpg';
import img13 from '../courseImages/hyperledger_fabric.jpg';
import img14 from '../courseImages/blockchain_iot.jpg';
import img15 from '../courseImages/web3js_advanced.jpg';

const CourseCard = ({ course, openModal }) => {
    const imageUrls = {
        'Blockchain Fundamentals': img1,
        'Ethereum Development': img2,
        'Web3.js Essentials': img3,
        'DeFi Fundamentals': img4,
        'Solidity Programming': img5,
        'Blockchain Security': img6,
        'NFT Creation and Trading': img7,
        'Decentralized Identity': img8,
        'Blockchain for Supply Chain': img9,
        'Crypto Economics': img10,
        'Smart Contract Auditing': img11,
        'Blockchain Governance': img12,
        'Hyperledger Fabric Development': img13,
        'Blockchain Integration with IoT': img14,
        'Web3.js Advanced Techniques': img15
    };
    return (
        <div className="course-card" onClick={() => openModal(course.name)}>
             <img src={imageUrls[course.name]} alt={course.name} />
            <h2>{course.name}</h2>
            <p>{course.description}</p>
        </div>
    );
};

export default CourseCard;


