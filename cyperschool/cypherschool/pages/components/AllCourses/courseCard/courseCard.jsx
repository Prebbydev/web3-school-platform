import React from 'react';
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
    return (
        <div className="course-card" onClick={() => openModal(course.name)}>
             <img src={imageUrls[course.name]} alt={course.name} />
            <h2>{course.name}</h2>
            <p>{course.description}</p>
        </div>
    );
};

export default CourseCard;


