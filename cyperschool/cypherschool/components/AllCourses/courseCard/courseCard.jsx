import React from 'react';


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


