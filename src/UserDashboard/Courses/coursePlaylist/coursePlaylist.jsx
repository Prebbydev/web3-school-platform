import React,{useState} from 'react';
import './coursePlaylist.css';

const CoursePlaylist = ({ course }) => {

  const [assignments, setAssignments] = useState(new Array(5).fill(''));
  const [quizAnswers] = useState(new Array(10).fill(''));
  const [selectedOptions, setSelectedOptions] = useState(new Array(10).fill(null));

  const handleChangeAssignment = (index, event) => {
    const newAssignments = [...assignments];
    newAssignments[index] = event.target.value;
    setAssignments(newAssignments);
  };

  const handleChangeQuizAnswer = (index, option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = option;
    setSelectedOptions(newSelectedOptions);
  };

  const handleSubmitAssignment = (assignments) => {
    /*return fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ assignments: assignments }),
    })
      .then((response) => response.json())
      .then((data) => {*/
        console.log('Assignments submitted:', assignments);
      //  console.log('Server response:', data);
     // })
     // .catch((error) => {
     //   console.error('Error submitting assignments:', error.message);
     // });
  };
  
  const handleSubmitQuiz = () => {
    /*return fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quizAnswers: quizAnswers }),
    })*/
     // .then((response) => response.json())
     // .then((data) => {
        console.log('Quiz answers submitted successfully:', quizAnswers);
        console.log('Selected options:', selectedOptions);
       // console.log('Server response:', data);
      //})
     // .catch((error) => {
       // console.error('Error submitting quiz answers:', error.message);
     // });
  };
  
  

  
  

  const[confirmatonVisible,setConfirmationVisible]= useState(false);
    const handleSubmit=(event)=>{
        event.preventDefault();
        setConfirmationVisible(true);
        setTimeout(()=>{
            setConfirmationVisible(false);
            event.target.reset();
        },3000);
    }

  const videoUrls = {
    'Blockchain Fundamentals': [
      'https://www.youtube.com/embed/ssHeOBLCD9c',
      'https://www.youtube.com/embed/EtJvGQpYzzg',
      'https://www.youtube.com/embed/QzxH-Q2WmOI',
      'https://www.youtube.com/embed/-BZo7YQyvy4',
      'https://www.youtube.com/embed/-pHypxT17Cg',
      'https://www.youtube.com/embed/mzl9MNCUS28',
      'https://www.youtube.com/embed/LINq3OFL2bg',
      'https://www.youtube.com/embed/pflJKbtRELc',
      'https://www.youtube.com/embed/ZXsI8Ge_sKs',
      'https://www.youtube.com/embed/njUxhaq2eio',
      'https://www.youtube.com/embed/xhSOpoQTOZ4',
      'https://www.youtube.com/embed/KEIRNPwV_g0',
      'https://www.youtube.com/embed/efAJe7EAk1U',
    ],
    
    'Ethereum Development': [
      'https://www.youtube.com/embed/JD120_jN4ZU',
      'https://www.youtube.com/embed/58yeu6HtzpM',
      'https://www.youtube.com/embed/hDcdUJHUfQU',
      'https://www.youtube.com/embed/fdWoNBt6CcY',
      'https://www.youtube.com/embed/_2_vsl82zAk',
      'https://www.youtube.com/embed/Ysgv2wTSCd0',
      'https://www.youtube.com/embed/t5lxGOAZfVM',
      'https://www.youtube.com/embed/HCY5lzrHr1c',
      'https://www.youtube.com/embed/iRD07URfVdM',
      'https://www.youtube.com/embed/nGhQ7dGpFBk',
      'https://www.youtube.com/embed/XdrScruyYtk',
      'https://www.youtube.com/embed/nalMdCI_pv8',
    ],
    
    'Web3.js Essentials': [
      'https://www.youtube.com/embed/2TV0r94p8OY',
      'https://www.youtube.com/embed/alQlKsoO_aQ',
      'https://www.youtube.com/embed/FNfcdkPb4rg',
      'https://www.youtube.com/embed/nvBAalvRHOI',
      'https://www.youtube.com/embed/4cPEGO4NAao',
      'https://www.youtube.com/embed/xChKky8kb6A',
      'https://www.youtube.com/embed/xFOb8sGNrEQ',
      'https://www.youtube.com/embed/oQ5yPKdjxFQ',
      'https://www.youtube.com/embed/hpyWNudPDjk',
      'https://www.youtube.com/embed/LzdMosLzj80',
      'https://www.youtube.com/embed/rXZSnUOhnwc',
    ],
    'DeFi Fundamentals': [
      'https://www.youtube.com/embed/k9HYC0EJU6E',
      'https://www.youtube.com/embed/JCYIFtb8DwM',
      'https://www.youtube.com/embed/pWGLtjG-F5c',
      'https://www.youtube.com/embed/ClnnLI1SClA',
      'https://www.youtube.com/embed/aTp9er6S73M',
      'https://www.youtube.com/embed/LpjMgS4OVzs',
      'https://www.youtube.com/embed/QxoqPZRw9y4',
      'https://www.youtube.com/embed/cizLhxSKrAc',
      'https://www.youtube.com/embed/8XJ1MSTEuU0',
      'https://www.youtube.com/embed/mCJUhnXQ76s',
      'https://www.youtube.com/embed/Xdkkux6OxfM',
      'https://www.youtube.com/embed/BgCgauWVTs0',
    ],
    'Solidity Programming': [
      'https://www.youtube.com/embed/sngKPYfUgkc',
      'https://www.youtube.com/embed/C70XrG5yGQo',
      'https://www.youtube.com/embed/AFma5JYgIIE',
      'https://www.youtube.com/embed/KlO23rhqEnw',
      'https://www.youtube.com/embed/64SiCO_GzDo',
      'https://www.youtube.com/embed/t9Ar0i_IwZ0',
      'https://www.youtube.com/embed/MpWZStxeabk',
      'https://www.youtube.com/embed/P1J0HeQINcM',
      'https://www.youtube.com/embed/zzLhhza5Cho',
      'https://www.youtube.com/embed/KQ8bTt6Jhjk',
      'https://www.youtube.com/embed/SPeKei4K-1',
    ],
    'Blockchain Security': [
      'https://www.youtube.com/embed/k8dy0HvbTic',
      'https://www.youtube.com/embed/A0pXrwPIDwM',
      'https://www.youtube.com/embed/FbrNou3fxwU',
      'https://www.youtube.com/embed/lZ2ZVEyvj4c',
      'https://www.youtube.com/embed/DG3DN_Q3_nQ',
      'https://www.youtube.com/embed/z5y-WVZmjig',
      'https://www.youtube.com/embed/Fbv_dv4i8lg',
      'https://www.youtube.com/embed/VQ7DriFE-l4',
      'https://www.youtube.com/embed/yzbDGVva2Dc',
      'https://www.youtube.com/embed/mlmOcGi6hsc',
      'https://www.youtube.com/embed/lSzqM3i3kw4',
      'https://www.youtube.com/embed/QVINWzg9qC4',
      'https://www.youtube.com/embed/O3Hc1_Io3b0',
      'https://www.youtube.com/embed/9jZ95re5GuQ',
      'https://www.youtube.com/embed/OKA7WIelhIw',
    ],
    
    'NFT Creation and Trading': [
      'https://www.youtube.com/embed/OIS5aLtPbUE',
      'https://www.youtube.com/embed/OpfMGN5x-4Q',
      'https://www.youtube.com/embed/OtgrZ2uYPNA',
      'https://www.youtube.com/embed/GHmyug2P56A',
      'https://www.youtube.com/embed/VdyZb6kM-_k',
      'https://www.youtube.com/embed/_Jxc6I4BH24',
      'https://www.youtube.com/embed/Rh_S3RTcdSc',
      'https://www.youtube.com/embed/nnDKJweNTOo',
      'https://www.youtube.com/embed/nbYzeq8HcFU',
      'https://www.youtube.com/embed/g9yn0yO_daw',
    ],
    'Decentralized Identity': [
      'https://www.youtube.com/embed/r28GeXkxn0w',
      'https://www.youtube.com/embed/Jcfy9wd5bZI',
      'https://www.youtube.com/embed/wEj8NsuhUb0',
      'https://www.youtube.com/embed/VXAZdBtN3N0',
      'https://www.youtube.com/embed/6O_iJnhih50',
      'https://www.youtube.com/embed/SHuRRaOBMz4',
      'https://www.youtube.com/embed/agPVWVe0p3Q',
      'https://www.youtube.com/embed/mXiiL5Rui8M',
    ],
    'Blockchain for Supply Chain': [
      'https://www.youtube.com/embed/Z6HS1bSZzHk',
      'https://www.youtube.com/embed/55aTGNx5vug',
      'https://www.youtube.com/embed/H-Z5ZYq6zio',
      'https://www.youtube.com/embed/jMihd-gqb6l',
      'https://www.youtube.com/embed/Z6HS1bSZzHk',
      'https://www.youtube.com/embed/RscsA7uX6WY',
    ],
    'Crypto Economics': [
      'https://www.youtube.com/embed/GHPFWMQOwCk',
      'https://www.youtube.com/embed/B-aRINHS__g',
      'https://www.youtube.com/embed/55gOFXmCc1s',
      'https://www.youtube.com/embed/SYgSO3Gcxf4',
      'https://www.youtube.com/embed/4PIDTtgCfNs',
      'https://www.youtube.com/embed/dd-YSAqrlew',
      'https://www.youtube.com/embed/lrJz4GZW-VM',
      'https://www.youtube.com/embed/T4WAWDok_tg',
      'https://www.youtube.com/embed/7xCqa_Ufv0A',
      'https://www.youtube.com/embed/2I7B-O721uY',
    ],
    'Smart Contract Auditing': [
      'https://www.youtube.com/embed/AtTb_BpFZkM',
      'https://www.youtube.com/embed/1xnMxdfYOG0',
      'https://www.youtube.com/embed/OFyB6BdTC8g',
      'https://www.youtube.com/embed/gtF6HAKmh8I',
      'https://www.youtube.com/embed/95Jj3yxVxNI',
      'https://www.youtube.com/embed/4wllcR3M5Lg',
      'https://www.youtube.com/embed/fEYTSMbDEqg',
      'https://www.youtube.com/embed/2gQPB0pRztk',
      'https://www.youtube.com/embed/2TCn0uf07B0',
      'https://www.youtube.com/embed/hnlVg0uI9fU',
    ],
    'Blockchain Governance': [
      'https://www.youtube.com/embed/LNTsQsm6B4',
      'https://www.youtube.com/embed/unDkWECKupY',
      'https://www.youtube.com/embed/2Se97PBrMj4',
      'https://www.youtube.com/embed/kqfd_pSblYE',
      'https://www.youtube.com/embed/o8sAhDY6IyY',
      'https://www.youtube.com/embed/kX_woDgymuc',
      'https://www.youtube.com/embed/bk3shfEYWN4',
      'https://www.youtube.com/embed/xAYoySS9rAc',
    ],
    'Hyperledger Fabric Dev': [
      'https://www.youtube.com/embed/SI4AcVXBh0w',
      'https://www.youtube.com/embed/Mlbego-Rc3A',
      'https://www.youtube.com/embed/o7j2m4xwxZY',
      'https://www.youtube.com/embed/nvmPnb_S0s4',
      'https://www.youtube.com/embed/KmUidKOFqCc',
      'https://www.youtube.com/embed/5PgIIofZ-nU',
      'https://www.youtube.com/embed/tQs4xWZv6Z8',
      'https://www.youtube.com/embed/DtsUVTIbeCY',
      'https://www.youtube.com/embed/lp3oVDG9OwU',
      'https://www.youtube.com/embed/9TPH_iNn8Po',
      'https://www.youtube.com/embed/VvSuHCSJQvA',
    ],
    'Blockchain Integration with IoT': [
      'https://www.youtube.com/embed/c_kGPdPivPA',
      'https://www.youtube.com/embed/dwbh0PBwhUY',
      'https://www.youtube.com/embed/BudJeOWWo20',
      'https://www.youtube.com/embed/zxsrRR1utBg',
      'https://www.youtube.com/embed/HLKIyyxVNBo',
      'https://www.youtube.com/embed/AM0xYFJn0jw',
      'https://www.youtube.com/embed/0IjEqP6ZqVQ',
      'https://www.youtube.com/embed/xsQv-Pt0IgE',
      'https://www.youtube.com/embed/XsEYd1Rp3pI',
      'https://www.youtube.com/embed/QkXqE4zGbcQ',
      'https://www.youtube.com/embed/FuegLTKd8wI',
    ],
    'Web3.js Advanced Techniques': [
      'https://www.youtube.com/embed/t3wM5903ty0',
      'https://www.youtube.com/embed/tu92jcqdn6s',
      'https://www.youtube.com/embed/uFdjZ-B3GCM',
      'https://www.youtube.com/embed/msT3tpwnyv8',
      'https://www.youtube.com/embed/6HlHwCaAZKQ',
      'https://www.youtube.com/embed/CX2QOE0FcEo',
      'https://www.youtube.com/embed/DFCCcgr9dAQ',
      'https://www.youtube.com/embed/xexCCBbnLQc',
    ]
  };


  const courseContent = {
    'Blockchain Fundamentals': {
      assignments: [
        'Assignment 1: Write a summary of the video lecture.',
        'Assignment 2: Discuss the advantages and disadvantages of blockchain technology.',
        'Assignment 3: Research and describe a real-world use case of blockchain.',
        'Assignment 4: Analyze a blockchain network architecture.',
        'Assignment 5: Propose a new application for blockchain technology.',
      ],
      quizQuestions: [
        {
          question: 'What is a blockchain?',
          options: ['A decentralized database', 'A type of cryptocurrency', 'A centralized ledger', 'An encryption algorithm'],
          answer: 'A decentralized database',
        },
        {
          question: 'Which consensus mechanism is used in Bitcoin?',
          options: ['Proof of Work (PoW)', 'Proof of Stake (PoS)', 'Delegated Proof of Stake (DPoS)', 'Proof of Authority (PoA)'],
          answer: 'Proof of Work (PoW)',
        },
        {
        question: 'What is the role of miners in a blockchain network?',
        options: ['To validate transactions and add them to the blockchain', 'To create new cryptocurrencies', 'To secure private keys', 'To audit smart contracts'],
        answer: 'To validate transactions and add them to the blockchain',
      },
      {
        question: 'What is a smart contract?',
        options: ['A self-executing contract with the terms directly written in code', 'A legally binding document', 'A contract signed by multiple parties', 'A contract with a high level of complexity'],
        answer: 'A self-executing contract with the terms directly written in code',
      },
      {
        question: 'What is the purpose of cryptographic hashing in blockchain?',
        options: ['To ensure data integrity', 'To encrypt sensitive information', 'To generate private keys', 'To prevent double spending'],
        answer: 'To ensure data integrity',
      },
      {
        question: 'What is the function of a nonce in proof of work?',
        options: ['A random number used to vary the block hash', 'A cryptographic key', 'A type of consensus algorithm', 'A component of the blockchain protocol'],
        answer: 'A random number used to vary the block hash',
      },
      {
        question: 'What is the genesis block in a blockchain?',
        options: ['The first block in the blockchain', 'A block containing transactions from all users', 'A block created by the founder of the blockchain', 'A block with no transactions'],
        answer: 'The first block in the blockchain',
      },
      {
        question: 'What are the benefits of using a decentralized blockchain?',
        options: ['Increased security and transparency', 'Faster transaction speeds', 'Lower transaction fees', 'Centralized control'],
        answer: 'Increased security and transparency',
      },
      {
        question: 'What is a Merkle Tree in blockchain?',
        options: ['A data structure used to efficiently store and verify the integrity of transactions in a block', 'A type of consensus mechanism', 'A cryptographic hash function', 'A decentralized exchange protocol'],
        answer: 'A data structure used to efficiently store and verify the integrity of transactions in a block',
      },
      {
        question: 'What is the difference between a public blockchain and a private blockchain?',
        options: ['Public blockchains are open to anyone, while private blockchains restrict access to certain participants.', 'Public blockchains are faster than private blockchains.', 'Private blockchains have higher security than public blockchains.', 'Public blockchains are controlled by governments, while private blockchains are controlled by corporations.'],
        answer: 'Public blockchains are open to anyone, while private blockchains restrict access to certain participants.',
      },
      
      ],
    },
    'Ethereum Development': {
    assignments: [
      'Assignment 1: Create a basic Ethereum smart contract for token creation.',
      'Assignment 2: Implement a decentralized voting application on Ethereum blockchain.',
      'Assignment 3: Develop a decentralized finance (DeFi) application using Ethereum smart contracts.',
      'Assignment 4: Build a decentralized application (DApp) for supply chain management on Ethereum.',
      'Assignment 5: Write a research paper on the scalability challenges of Ethereum and proposed solutions.',
    ],
    quizQuestions: [
      {
        question: 'What is Ethereum?',
        options: ['A decentralized platform that runs smart contracts', 'A centralized database', 'A type of cryptocurrency', 'An encryption algorithm'],
        answer: 'A decentralized platform that runs smart contracts',
      },
      {
        question: 'What is the native cryptocurrency of Ethereum?',
        options: ['Ether (ETH)', 'Bitcoin (BTC)', 'Litecoin (LTC)', 'Ripple (XRP)'],
        answer: 'Ether (ETH)',
      },
      {
        question: 'What programming language is primarily used to write Ethereum smart contracts?',
        options: ['Solidity', 'JavaScript', 'Python', 'Java'],
        answer: 'Solidity',
      },
      {
        question: 'What is the purpose of gas in Ethereum?',
        options: ['To pay for computational resources on the network', 'To encrypt transactions', 'To verify transactions', 'To mine new blocks'],
        answer: 'To pay for computational resources on the network',
      },
      {
        question: 'What is a decentralized autonomous organization (DAO) in the context of Ethereum?',
        options: ['An organization governed by smart contracts and controlled by token holders', 'A government agency regulating blockchain technology', 'A type of consensus mechanism', 'A centralized company'],
        answer: 'An organization governed by smart contracts and controlled by token holders',
      },
      {
        question: 'What is a smart contract in Ethereum?',
        options: ['Self-executing contracts with the terms directly written in code', 'Contracts executed by lawyers', 'Contracts stored in centralized databases', 'Contracts signed with physical signatures'],
        answer: 'Self-executing contracts with the terms directly written in code',
      },
      {
        question: 'What is the purpose of an Ethereum Virtual Machine (EVM)?',
        options: ['To execute smart contracts on the Ethereum network', 'To mine new Ethereum tokens', 'To store private keys', 'To act as a centralized server'],
        answer: 'To execute smart contracts on the Ethereum network',
      },
      {
        question: 'What is the role of miners in the Ethereum network?',
        options: ['To validate transactions and add them to the blockchain', 'To create new Ethereum tokens', 'To secure private keys', 'To execute smart contracts'],
        answer: 'To validate transactions and add them to the blockchain',
      },
      {
        question: 'What is a token standard commonly used for creating fungible tokens on Ethereum?',
        options: ['ERC-20', 'ERC-721', 'ERC-1155', 'ERC-223'],
        answer: 'ERC-20',
      },
      {
        question: 'What is a decentralized finance (DeFi) application?',
        options: ['An application that offers financial services using blockchain technology', 'An application controlled by a central authority', 'An application for social networking', 'An application for online shopping'],
        answer: 'An application that offers financial services using blockchain technology',
      },
    ],
  },
  'Web3.js Essentials': {
    assignments: [
      'Assignment 1: Set up a basic Web3.js environment and connect to an Ethereum node.',
      'Assignment 2: Develop a decentralized application (DApp) frontend using Web3.js to interact with smart contracts.',
      'Assignment 3: Implement a transaction monitoring system using Web3.js.',
      'Assignment 4: Create a wallet application with Web3.js for managing Ethereum accounts.',
      'Assignment 5: Build an authentication system using Web3.js and Ethereum smart contracts.',
    ],
    quizQuestions: [
      {
        question: 'What is Web3.js?',
        options: ['A JavaScript library for interacting with Ethereum blockchain', 'A backend framework', 'A CSS framework', 'A database management system'],
        answer: 'A JavaScript library for interacting with Ethereum blockchain',
      },
      {
        question: 'What is the role of Web3.js in blockchain development?',
        options: ['To interact with Ethereum smart contracts and blockchain data', 'To design user interfaces', 'To secure private keys', 'To mine new blocks'],
        answer: 'To interact with Ethereum smart contracts and blockchain data',
      },
      {
        question: 'What is an Ethereum node?',
        options: ['A computer running Ethereum software that participates in the blockchain network', 'A type of cryptocurrency wallet', 'A decentralized exchange', 'A token standard'],
        answer: 'A computer running Ethereum software that participates in the blockchain network',
      },
      {
        question: 'What is the purpose of MetaMask in Web3.js development?',
        options: ['To provide a user-friendly interface for interacting with Ethereum DApps', 'To secure private keys', 'To execute smart contracts', 'To mine new blocks'],
        answer: 'To provide a user-friendly interface for interacting with Ethereum DApps',
      },
      {
        question: 'What is a smart contract interaction in Web3.js?',
        options: ['Sending transactions to smart contracts and retrieving data from them', 'Exchanging cryptocurrencies', 'Storing data on the blockchain', 'Executing JavaScript code'],
        answer: 'Sending transactions to smart contracts and retrieving data from them',
      },
      {
        question: 'What is the ABI (Application Binary Interface) in Web3.js?',
        options: ['A JSON representation of smart contract methods', 'A programming language', 'A database management system', 'A CSS framework'],
        answer: 'A JSON representation of smart contract methods',
      },
      {
        question: 'What is an event listener in Web3.js?',
        options: ['A function that listens for events emitted by smart contracts', 'A type of cryptocurrency wallet', 'A component of the blockchain protocol', 'A decentralized exchange'],
        answer: 'A function that listens for events emitted by smart contracts',
      },
      {
        question: 'What is the purpose of asynchronous programming in Web3.js?',
        options: ['To handle operations that may take time to complete, such as fetching data from the blockchain', 'To execute JavaScript code', 'To secure private keys', 'To interact with CSS styles'],
        answer: 'To handle operations that may take time to complete, such as fetching data from the blockchain',
      },
      {
        question: 'What is the role of Infura in Web3.js development?',
        options: ['To provide access to the Ethereum network without running a local node', 'To secure private keys', 'To execute smart contracts', 'To mine new blocks'],
        answer: 'To provide access to the Ethereum network without running a local node',
      },
      {
        question: 'What is the purpose of gas in Ethereum transactions?',
        options: ['To pay for computational resources on the network', 'To encrypt transactions', 'To verify transactions', 'To store private keys'],
        answer: 'To pay for computational resources on the network',
      },
    ],
  },
  'DeFi Fundamentals': {
    assignments: [
      'Assignment 1: Research and analyze decentralized finance (DeFi) protocols such as Uniswap and Aave.',
      'Assignment 2: Develop a decentralized exchange (DEX) frontend interface using Web3.js and interact with existing DeFi protocols.',
      'Assignment 3: Design and implement a yield farming strategy on Ethereum blockchain.',
      'Assignment 4: Explore the concept of decentralized autonomous organizations (DAOs) in the context of DeFi.',
      'Assignment 5: Write a research paper on the future potential and challenges of DeFi.',
    ],
    quizQuestions: [
      {
        question: 'What is decentralized finance (DeFi)?',
        options: ['A financial system built on blockchain technology that aims to provide open, permissionless access to financial services', 'A centralized banking system', 'A type of cryptocurrency', 'A blockchain consensus mechanism'],
        answer: 'A financial system built on blockchain technology that aims to provide open, permissionless access to financial services',
      },
      {
        question: 'What are some examples of DeFi applications?',
        options: ['Decentralized exchanges (DEXs), lending platforms, and liquidity protocols', 'Centralized banks', 'Social media platforms', 'E-commerce websites'],
        answer: 'Decentralized exchanges (DEXs), lending platforms, and liquidity protocols',
      },
      {
        question: 'What is liquidity mining in DeFi?',
        options: ['A process of earning rewards by providing liquidity to DeFi protocols', 'A method of securing private keys', 'A type of cryptocurrency mining', 'A decentralized governance mechanism'],
        answer: 'A process of earning rewards by providing liquidity to DeFi protocols',
      },
      {
        question: 'What is the role of decentralized exchanges (DEXs) in DeFi?',
        options: ['To facilitate peer-to-peer trading of digital assets without intermediaries', 'To store private keys', 'To execute smart contracts', 'To mine new blocks'],
        answer: 'To facilitate peer-to-peer trading of digital assets without intermediaries',
      },
      {
        question: 'What is a smart contract in the context of DeFi?',
        options: ['Self-executing contracts with the terms directly written in code', 'Contracts executed by lawyers', 'Contracts stored in centralized databases', 'Contracts signed with physical signatures'],
        answer: 'Self-executing contracts with the terms directly written in code',
      },
      {
        question: 'What is the purpose of decentralized lending protocols in DeFi?',
        options: ['To allow users to borrow and lend digital assets without intermediaries', 'To secure private keys', 'To execute smart contracts', 'To mine new blocks'],
        answer: 'To allow users to borrow and lend digital assets without intermediaries',
      },
      {
        question: 'What is impermanent loss in DeFi?',
        options: ['A loss that occurs when providing liquidity to automated market makers (AMMs)', 'A loss caused by a security breach', 'A type of cryptocurrency theft', 'A loss due to market volatility'],
        answer: 'A loss that occurs when providing liquidity to automated market makers (AMMs)',
      },
      {
        question: 'What is the concept of yield farming in DeFi?',
        options: ['A strategy of earning rewards by staking or providing liquidity to DeFi protocols', 'A method of securing private keys', 'A type of cryptocurrency mining', 'A decentralized governance mechanism'],
        answer: 'A strategy of earning rewards by staking or providing liquidity to DeFi protocols',
      },
      {
        question: 'What are decentralized autonomous organizations (DAOs) in the context of DeFi?',
        options: ['Organizations governed by smart contracts and controlled by token holders', 'Centralized banks', 'Social media platforms', 'E-commerce websites'],
        answer: 'Organizations governed by smart contracts and controlled by token holders',
      },
      {
        question: 'What are some challenges of DeFi?',
        options: ['Regulatory uncertainty, security vulnerabilities, and scalability issues', 'High transaction fees, slow transaction speeds, and lack of privacy', 'Lack of user adoption and centralization', 'Lack of financial services'],
        answer: 'Regulatory uncertainty, security vulnerabilities, and scalability issues',
      },
    ],
  },
  'Solidity Programming': {
    assignments: [
      'Assignment 1: Write a basic smart contract in Solidity for token creation.',
      'Assignment 2: Implement a voting system using smart contracts in Solidity.',
      'Assignment 3: Develop a decentralized finance (DeFi) application with Solidity smart contracts.',
      'Assignment 4: Create a non-fungible token (NFT) contract using Solidity.',
      'Assignment 5: Build a decentralized application (DApp) frontend and integrate it with Solidity contracts.',
    ],
    quizQuestions: [
      {
        question: 'What is Solidity?',
        options: ['A programming language for writing smart contracts on Ethereum', 'A JavaScript library', 'A type of cryptocurrency', 'A database management system'],
        answer: 'A programming language for writing smart contracts on Ethereum',
      },
      {
        question: 'What is a smart contract?',
        options: ['Self-executing contracts with the terms directly written in code', 'Contracts executed by lawyers', 'Contracts stored in centralized databases', 'Contracts signed with physical signatures'],
        answer: 'Self-executing contracts with the terms directly written in code',
      },
      {
        question: 'What is the purpose of a constructor function in a Solidity smart contract?',
        options: ['To initialize contract state variables when the contract is deployed', 'To execute code when a contract receives ether', 'To handle arithmetic operations', 'To interact with external contracts'],
        answer: 'To initialize contract state variables when the contract is deployed',
      },
      {
        question: 'What is the role of modifiers in Solidity?',
        options: ['To add conditions to function definitions', 'To execute smart contracts', 'To store private keys', 'To mine new blocks'],
        answer: 'To add conditions to function definitions',
      },
      {
        question: 'What is the Ethereum Virtual Machine (EVM) and how does it relate to Solidity?',
        options: ['A runtime environment for executing smart contracts, and Solidity code is compiled to EVM bytecode', 'A type of cryptocurrency wallet', 'A decentralized exchange', 'A token standard'],
        answer: 'A runtime environment for executing smart contracts, and Solidity code is compiled to EVM bytecode',
      },
      {
        question: 'What is the difference between public and external visibility in Solidity?',
        options: ['Public functions can be called internally and externally, while external functions can only be called externally', 'Public functions can only be called internally, while external functions can be called externally', 'Public functions are visible to other contracts, while external functions are not', 'Public functions are payable, while external functions are not'],
        answer: 'Public functions can be called internally and externally, while external functions can only be called externally',
      },
      {
        question: 'What is the purpose of events in Solidity?',
        options: ['To log important information for off-chain applications to listen to', 'To secure private keys', 'To execute smart contracts', 'To mine new blocks'],
        answer: 'To log important information for off-chain applications to listen to',
      },
      {
        question: 'What is the role of gas in Ethereum transactions and smart contract execution?',
        options: ['To pay for computational resources on the network', 'To encrypt transactions', 'To verify transactions', 'To store private keys'],
        answer: 'To pay for computational resources on the network',
      },
      {
        question: 'What are some best practices for writing secure Solidity smart contracts?',
        options: ['Use the latest version of Solidity, perform extensive testing, and follow the principle of least privilege', 'Use deprecated features, ignore testing, and make contracts overly complex', 'Use arbitrary versions of Solidity, skip testing, and ignore security considerations', 'Make contracts open to everyone, use insecure libraries, and ignore gas costs'],
        answer: 'Use the latest version of Solidity, perform extensive testing, and follow the principle of least privilege',
      },
      {
        question: 'What is the difference between a library and a contract in Solidity?',
        options: ['A library is a collection of reusable functions that can be called by other contracts, while a contract is a piece of code that can hold ether and execute functions', 'A library is a type of cryptocurrency wallet, while a contract is a type of blockchain consensus mechanism', 'A library is a decentralized exchange protocol, while a contract is a type of consensus mechanism', 'A library is used for storing private keys, while a contract is used for executing smart contracts'],
        answer: 'A library is a collection of reusable functions that can be called by other contracts, while a contract is a piece of code that can hold ether and execute functions',
      },
    ],
  },
  'Blockchain Security':{
    assignments: [
    'Perform a security audit on a smart contract to identify vulnerabilities.',
    'Design and implement a secure multisignature wallet using blockchain technology.',
    'Analyze common attack vectors in blockchain systems such as 51% attacks and double spending.',
    'Implement security best practices for securing private keys and managing digital assets.',
    'Write a research paper on the importance of blockchain security and potential threats.',
  ],
  quizQuestions: [
    {
      question: 'What are some common security vulnerabilities in smart contracts?',
      options: [
        'Reentrancy, integer overflow/underflow, and unauthorized access.',
        'Cross-site scripting (XSS) and SQL injection.',
        'Denial-of-Service (DoS) attacks and phishing.',
        'Man-in-the-middle (MitM) attacks and ransomware.',
      ],
      answer: 'Reentrancy, integer overflow/underflow, and unauthorized access.',
    },
    {
      question: 'What is the 51% attack in blockchain?',
      options: [
        'An attack where a single entity controls the majority of the network hash rate.',
        'An attack where 51% of the nodes are compromised.',
        'An attack where 51% of the transactions are fraudulent.',
        'An attack where 51% of the network nodes go offline.',
      ],
      answer: 'An attack where a single entity controls the majority of the network hash rate.',
    },
    {
      question: 'How can blockchain transactions be susceptible to double-spending attacks?',
      options: [
        'By broadcasting multiple conflicting transactions to the network.',
        'By encrypting transaction data.',
        'By using decentralized exchanges.',
        'By enforcing strict identity verification.',
      ],
      answer: 'By broadcasting multiple conflicting transactions to the network.',
    },
    {
      question: 'What is the role of cryptographic hash functions in blockchain security?',
      options: [
        'They provide immutability and integrity to blockchain data.',
        'They ensure the privacy of transactions.',
        'They prevent unauthorized access to smart contracts.',
        'They facilitate consensus among network participants.',
      ],
      answer: 'They provide immutability and integrity to blockchain data.',
    },
    {
      question: 'How can blockchain networks mitigate the risk of 51% attacks?',
      options: [
        'By increasing the number of network nodes.',
        'By implementing proof-of-authority (PoA) consensus mechanism.',
        'By deploying robust encryption algorithms.',
        'By restricting access to the blockchain.',
      ],
      answer: 'By increasing the number of network nodes.',
    },
    {
      question: 'What is the purpose of multisignature wallets in blockchain security?',
      options: [
        'They provide additional layers of security by requiring multiple signatures to authorize transactions.',
        'They increase transaction throughput.',
        'They enable faster confirmation of transactions.',
        'They facilitate token swaps.',
      ],
      answer: 'They provide additional layers of security by requiring multiple signatures to authorize transactions.',
    },
    {
      question: 'What is a replay attack in the context of blockchain?',
      options: [
        'An attack where fraudulent transactions are repeatedly broadcasted to the network.',
        'An attack where private keys are compromised and used to steal funds.',
        'An attack where transaction data is intercepted and manipulated.',
        'An attack where smart contracts are exploited to drain funds.',
      ],
      answer: 'An attack where fraudulent transactions are repeatedly broadcasted to the network.',
    },
    {
      question: 'How can users protect their private keys in blockchain systems?',
      options: [
        'By using hardware wallets or secure offline storage solutions.',
        'By storing them in plaintext on their devices.',
        'By sharing them with trusted third parties.',
        'By publishing them on public forums for backup.',
      ],
      answer: 'By using hardware wallets or secure offline storage solutions.',
    },
    {
      question: 'What are the risks associated with storing private keys online?',
      options: [
        'They are susceptible to hacking and theft.',
        'They are more easily accessible for transaction processing.',
        'They provide faster transaction confirmation times.',
        'They enhance the overall security of the blockchain network.',
      ],
      answer: 'They are susceptible to hacking and theft.',
    },
    {
      question: 'How can blockchain networks enhance security through consensus mechanisms?',
      options: [
        'By allowing only authorized nodes to participate in consensus.',
        'By requiring proof-of-stake (PoS) for all transactions.',
        'By implementing multi-factor authentication for network access.',
        'By encrypting all transaction data on the blockchain.',
      ],
      answer: 'By allowing only authorized nodes to participate in consensus.',
    },
  ],

  },
  'NFT Creation and Trading':{
    assignments: [
    'Create an ERC-721 compliant smart contract for NFT creation.',
    'Develop a decentralized marketplace for buying and selling NFTs.',
    'Implement royalties and secondary sales functionality in an NFT smart contract.',
    'Explore different token standards for representing unique digital assets on the blockchain.',
    'Write a guide on best practices for creating and trading NFTs in the blockchain ecosystem.',
  ],
  quizQuestions: [
    {
      question: 'What does ERC-721 stand for in the context of NFTs?',
      options: [
        'Ethereum Reversible Cryptography-721',
        'Ethereum Request for Comments-721',
        'Ethereum Resilient Contract-721',
        'Ethereum Reusable Cryptocurrency-721',
      ],
      answer: 'Ethereum Request for Comments-721',
    },
    {
      question: 'What is the primary purpose of NFTs?',
      options: [
        'To represent fungible assets like cryptocurrencies.',
        'To create unique digital assets that cannot be replicated or replaced.',
        'To facilitate fast and cheap transactions on the blockchain.',
        'To provide anonymity and privacy to blockchain users.',
      ],
      answer: 'To create unique digital assets that cannot be replicated or replaced.',
    },
    {
      question: 'What is the significance of royalties in NFT smart contracts?',
      options: [
        'They allow creators to earn a percentage of future sales of their digital assets.',
        'They ensure that all NFTs are identical and indistinguishable from each other.',
        'They provide enhanced security and encryption for NFT transactions.',
        'They enable users to purchase NFTs with fiat currency.',
      ],
      answer: 'They allow creators to earn a percentage of future sales of their digital assets.',
    },
    {
      question: 'What are some benefits of decentralized NFT marketplaces?',
      options: [
        'Elimination of intermediary fees and censorship.',
        'Increased control over digital assets for creators and collectors.',
        'Enhanced liquidity and accessibility of NFTs.',
        'All of the above.',
      ],
      answer: 'All of the above.',
    },
    {
      question: 'What is the role of metadata in NFTs?',
      options: [
        'It contains the cryptographic signature of the NFT owner.',
        'It specifies the royalty percentage for the NFT creator.',
        'It stores additional information about the digital asset represented by the NFT.',
        'It determines the token supply and distribution of the NFT.',
      ],
      answer: 'It stores additional information about the digital asset represented by the NFT.',
    },
    {
      question: 'What is the concept of fractionalized ownership in NFTs?',
      options: [
        'The division of an NFT into multiple fungible tokens, allowing multiple owners to share ownership of the NFT.',
        'The process of converting NFTs into traditional securities for investment purposes.',
        'The practice of creating duplicate copies of NFTs for resale on secondary markets.',
        'The use of NFTs as collateral for decentralized finance (DeFi) loans.',
      ],
      answer: 'The division of an NFT into multiple fungible tokens, allowing multiple owners to share ownership of the NFT.',
    },
    {
      question: 'What are some potential applications of NFTs beyond digital art?',
      options: [
        'Gaming assets and virtual real estate.',
        'Music royalties and concert tickets.',
        'Real-world asset tokenization, such as real estate and luxury goods.',
        'All of the above.',
      ],
      answer: 'All of the above.',
    },
    {
      question: 'How do NFTs differ from traditional cryptocurrencies like Bitcoin or Ethereum?',
      options: [
        'NFTs are indivisible and represent unique digital assets, while cryptocurrencies are divisible and fungible.',
        'NFTs have lower transaction fees and faster confirmation times than traditional cryptocurrencies.',
        'NFT transactions are reversible, while cryptocurrency transactions are irreversible.',
        'NFTs are regulated by governments, while cryptocurrencies operate independently of government control.',
      ],
      answer: 'NFTs are indivisible and represent unique digital assets, while cryptocurrencies are divisible and fungible.',
    },
    {
      question: 'What are some potential challenges facing the NFT market?',
      options: [
        'Copyright infringement and intellectual property disputes.',
        'Scalability issues and high gas fees on Ethereum.',
        'Market volatility and speculative bubbles.',
        'All of the above.',
      ],
      answer: 'All of the above.',
    },
  ],
    

  },
  'Decentralized Identity':{
     assignments: [
    'Design and implement a decentralized identity management system using blockchain technology.',
    'Explore different identity standards such as DID (Decentralized Identifier) and Verifiable Credentials.',
    'Create a proof-of-concept application for self-sovereign identity verification on the blockchain.',
    'Analyze the benefits and challenges of decentralized identity solutions compared to traditional centralized systems.',
    'Propose improvements and future directions for decentralized identity technologies.',
  ],
  quizQuestions: [
    {
      question: 'What is the primary goal of decentralized identity?',
      options: [
        'To give governments more control over citizens\' personal information.',
        'To provide users with full control over their own identity and personal data.',
        'To centralize identity management for improved efficiency.',
        'To monetize user data for profit.',
      ],
      answer: 'To provide users with full control over their own identity and personal data.',
    },
    {
      question: 'What is a DID (Decentralized Identifier) in the context of blockchain?',
      options: [
        'A unique identifier issued by centralized authorities.',
        'A cryptographic key pair used for signing transactions on the blockchain.',
        'A decentralized protocol for verifying digital signatures.',
        'A globally unique identifier that enables self-sovereign identity on the blockchain.',
      ],
      answer: 'A globally unique identifier that enables self-sovereign identity on the blockchain.',
    },
    {
      question: 'What are Verifiable Credentials?',
      options: [
        'Credentials issued by centralized institutions.',
        'Digital certificates used for encrypting blockchain transactions.',
        'Cryptographic proofs generated by decentralized identity systems.',
        'Proofs of identity or attributes that are cryptographically verifiable by third parties.',
      ],
      answer: 'Proofs of identity or attributes that are cryptographically verifiable by third parties.',
    },
    {
      question: 'What are some benefits of decentralized identity solutions?',
      options: [
        'Increased control over personal data and privacy.',
        'Improved security and resilience against data breaches.',
        'Elimination of reliance on centralized authorities for identity verification.',
        'All of the above.',
      ],
      answer: 'All of the above.',
    },
    {
      question: 'What are some challenges of decentralized identity?',
      options: [
        'Interoperability between different identity systems.',
        'Scalability issues with large-scale adoption.',
        'User adoption and usability concerns.',
        'All of the above.',
      ],
      answer: 'All of the above.',
    },
    {
      question: 'What is the role of zero-knowledge proofs in decentralized identity?',
      options: [
        'They enable users to prove possession of certain information without revealing the information itself.',
        'They provide secure encryption for all blockchain transactions.',
        'They ensure consensus among network participants.',
        'They facilitate peer-to-peer communication on the blockchain.',
      ],
      answer: 'They enable users to prove possession of certain information without revealing the information itself.',
    },
    {
      question: 'What is the concept of self-sovereign identity?',
      options: [
        'The idea that governments should control all aspects of individuals\' identities.',
        'The belief that individuals should have ultimate control over their own identities and personal data.',
        'The concept of identity being managed by centralized corporations.',
        'The process of sharing personal data with third-party companies for profit.',
      ],
      answer: 'The belief that individuals should have ultimate control over their own identities and personal data.',
    },
    {
      question: 'What role does blockchain technology play in decentralized identity?',
      options: [
        'It provides a decentralized and tamper-proof ledger for storing identity-related information.',
        'It enables centralized control over identity verification processes.',
        'It encrypts personal data to ensure privacy.',
        'It facilitates identity management through centralized databases.',
      ],
      answer: 'It provides a decentralized and tamper-proof ledger for storing identity-related information.',
    },
    {
      question: 'What are some potential applications of decentralized identity beyond personal identification?',
      options: [
        'Supply chain management and product authentication.',
        'Healthcare records management and patient consent verification.',
        'Voting systems and election verification.',
        'All of the above.',
      ],
      answer: 'All of the above.',
    },
    {
      question: 'What is the significance of privacy-preserving identity solutions in decentralized identity?',
      options: [
        'They ensure that all personal data is publicly accessible on the blockchain.',
        'They protect individuals\' privacy by allowing them to control the disclosure of their identity information.',
        'They enable governments to monitor and track individuals\' online activities.',
        'They centralize control over identity verification processes.',
      ],
      answer: 'They protect individuals\' privacy by allowing them to control the disclosure of their identity information.',
    },
  ],

  },
  'Blockchain for supply chain':{
    assignments: [
      'Design a prototype for tracking products through the supply chain using blockchain technology.',
      'Explore the use of smart contracts for automating payment and delivery processes in supply chain management.',
      'Analyze the benefits and challenges of implementing blockchain in supply chain transparency and traceability.',
      'Propose strategies for integrating blockchain solutions with existing supply chain management systems.',
      'Investigate real-world use cases of blockchain in supply chain industries such as food, pharmaceuticals, and logistics.',
    ],
    quizQuestions: [
      {
        question: 'What are the primary benefits of using blockchain in supply chain management?',
        options: [
          'Enhanced transparency, traceability, and immutability of transaction records.',
          'Reduced costs and increased efficiency through automation and digitization.',
          'Improved security and data integrity across the supply chain network.',
          'All of the above.',
        ],
        answer: 'All of the above.',
      },
      {
        question: 'How can smart contracts benefit supply chain processes?',
        options: [
          'By automating payment and delivery processes based on predefined conditions.',
          'By encrypting sensitive data to prevent unauthorized access.',
          'By facilitating communication between different stakeholders in the supply chain.',
          'By providing real-time tracking of products using IoT sensors.',
        ],
        answer: 'By automating payment and delivery processes based on predefined conditions.',
      },
      {
        question: 'What role does decentralization play in supply chain blockchain networks?',
        options: [
          'It eliminates the need for intermediaries and reduces dependency on central authorities.',
          'It ensures that all supply chain participants have equal access to information and resources.',
          'It enables faster decision-making and coordination among stakeholders.',
          'It allows for seamless integration with legacy supply chain systems.',
        ],
        answer: 'It eliminates the need for intermediaries and reduces dependency on central authorities.',
      },
      {
        question: 'What are some challenges of implementing blockchain in supply chain?',
        options: [
          'Interoperability issues between different blockchain platforms and legacy systems.',
          'Scalability limitations due to the high volume of transactions in supply chain networks.',
          'Privacy concerns related to sharing sensitive business data on a public blockchain.',
          'All of the above.',
        ],
        answer: 'All of the above.',
      },
      {
        question: 'What are some potential use cases of blockchain in supply chain industries?',
        options: [
          'Tracking the origin and authenticity of products to prevent counterfeiting.',
          'Streamlining customs clearance and international trade processes.',
          'Ensuring fair labor practices and ethical sourcing in global supply chains.',
          'All of the above.',
        ],
        answer: 'All of the above.',
      },
      {
        question: 'What impact can blockchain have on reducing fraud in supply chains?',
        options: [
          'It can provide a transparent and tamper-proof record of product movement from manufacturer to consumer.',
          'It can eliminate the need for traditional auditing and verification processes.',
          'It can guarantee the authenticity and quality of products through cryptographic signatures.',
          'It can automate compliance checks and regulatory reporting requirements.',
        ],
        answer: 'It can provide a transparent and tamper-proof record of product movement from manufacturer to consumer.',
      },
      {
        question: 'How does blockchain enhance supply chain traceability?',
        options: [
          'By recording each transaction on a distributed ledger that cannot be altered retroactively.',
          'By encrypting sensitive data to prevent unauthorized access by third parties.',
          'By using artificial intelligence and machine learning algorithms to analyze supply chain data.',
          'By relying on centralized databases managed by trusted third-party intermediaries.',
        ],
        answer: 'By recording each transaction on a distributed ledger that cannot be altered retroactively.',
      },
      {
        question: 'What role do consensus mechanisms play in maintaining the integrity of supply chain data on a blockchain?',
        options: [
          'They ensure that all network participants agree on the validity of transactions.',
          'They prevent unauthorized access to sensitive information stored on the blockchain.',
          'They facilitate real-time monitoring and tracking of products in transit.',
          'They enforce compliance with industry standards and regulations.',
        ],
        answer: 'They ensure that all network participants agree on the validity of transactions.',
      },
      {
        question: 'How can blockchain improve sustainability and ethical practices in supply chains?',
        options: [
          'By providing transparent and verifiable information about product origins and production processes.',
          'By automating supply chain management tasks to reduce human error and inefficiency.',
          'By enabling real-time monitoring of environmental impact and resource consumption.',
          'By optimizing logistics and transportation routes to minimize carbon emissions.',
        ],
        answer: 'By providing transparent and verifiable information about product origins and production processes.',
      },
      {
        question: 'What are some potential drawbacks or limitations of implementing blockchain in supply chain management?',
        options: [
          'High implementation costs and complexity, especially for small and medium-sized enterprises (SMEs).',
          'Scalability issues and transaction throughput limitations on public blockchain networks.',
          'Concerns about data privacy and security, particularly regarding sensitive business information.',
          'Resistance to change and adoption from traditional industry players and stakeholders.',
        ],
        answer: 'All of the above.',
      },
    ],
  },

  'crypto Economics':{
    assignments: [
      'Explore the role of cryptocurrencies as a medium of exchange, store of value, and unit of account.',
      'Analyze the economic incentives and game theory behind blockchain consensus mechanisms such as Proof of Work and Proof of Stake.',
      'Investigate the impact of monetary policy on the value and scarcity of cryptocurrencies like Bitcoin.',
      'Propose strategies for managing risk and volatility in cryptocurrency investment portfolios.',
      'Examine the potential of decentralized finance (DeFi) protocols to disrupt traditional financial systems.',
    ],
    quizQuestions: [
      {
        question: 'What is the primary function of cryptocurrencies?',
        options: [
          'To facilitate peer-to-peer transactions without the need for intermediaries.',
          'To provide a secure and tamper-proof ledger for recording financial transactions.',
          'To store and preserve value over time, independent of central banks or governments.',
          'All of the above.',
        ],
        answer: 'All of the above.',
      },
      {
        question: 'What is the difference between inflationary and deflationary monetary policies?',
        options: [
          'Inflationary policies increase the money supply, while deflationary policies decrease it.',
          'Inflationary policies decrease the money supply, while deflationary policies increase it.',
          'Inflationary policies stabilize the value of a currency, while deflationary policies cause its value to fluctuate.',
          'Inflationary policies are based on fixed supply, while deflationary policies are based on unlimited supply.',
        ],
        answer: 'Inflationary policies increase the money supply, while deflationary policies decrease it.',
      },
      {
        question: 'What role does scarcity play in determining the value of cryptocurrencies?',
        options: [
          'Scarcity increases demand for cryptocurrencies, driving up their value over time.',
          'Scarcity decreases demand for cryptocurrencies, causing their value to depreciate.',
          'Scarcity has no effect on the value of cryptocurrencies.',
          'Scarcity determines the fixed exchange rate of cryptocurrencies with fiat currencies.',
        ],
        answer: 'Scarcity increases demand for cryptocurrencies, driving up their value over time.',
      },
      {
        question: 'How do decentralized finance (DeFi) protocols differ from traditional financial systems?',
        options: [
          'DeFi protocols operate without intermediaries or central authorities, providing open access to financial services.',
          'Traditional financial systems are more secure and efficient than DeFi protocols.',
          'DeFi protocols require government regulation and oversight to function effectively.',
          'Traditional financial systems are based on blockchain technology, while DeFi protocols are not.',
        ],
        answer: 'DeFi protocols operate without intermediaries or central authorities, providing open access to financial services.',
      },
      {
        question: 'What are some risks associated with investing in cryptocurrencies?',
        options: [
          'Volatility and price fluctuations in cryptocurrency markets.',
          'Regulatory uncertainty and government intervention.',
          'Security vulnerabilities and risks of hacking or theft.',
          'All of the above.',
        ],
        answer: 'All of the above.',
      },
      {
        question: 'How does the concept of "digital scarcity" contribute to the value proposition of cryptocurrencies?',
        options: [
          'By limiting the supply of digital assets, ensuring their rarity and exclusivity.',
          'By enabling seamless and instant transactions across global borders.',
          'By providing anonymity and privacy for users conducting financial transactions.',
          'By guaranteeing government-backed insurance for cryptocurrency holdings.',
        ],
        answer: 'By limiting the supply of digital assets, ensuring their rarity and exclusivity.',
      },
      {
        question: 'What role do network effects play in the adoption and growth of cryptocurrencies?',
        options: [
          'They create positive feedback loops where increased adoption leads to greater utility and value for the network.',
          'They minimize the risk of double-spending and fraudulent transactions in decentralized systems.',
          'They enable cross-border remittances and international money transfers at low cost.',
          'They prevent censorship and government control over financial transactions.',
        ],
        answer: 'They create positive feedback loops where increased adoption leads to greater utility and value for the network.',
      },
      {
        question: 'How do halving events impact the supply and demand dynamics of cryptocurrencies like Bitcoin?',
        options: [
          'They reduce the rate at which new bitcoins are generated, increasing scarcity and potentially driving up prices.',
          'They increase the transaction throughput and processing speed of blockchain networks.',
          'They introduce new security features and encryption algorithms to prevent hacking attacks.',
          'They facilitate cross-chain interoperability and communication between different blockchain platforms.',
        ],
        answer: 'They reduce the rate at which new bitcoins are generated, increasing scarcity and potentially driving up prices.',
      },
      {
        question: 'What are some potential benefits of using stablecoins for everyday transactions?',
        options: [
          'They offer price stability compared to volatile cryptocurrencies like Bitcoin and Ethereum.',
          'They provide a censorship-resistant and permissionless means of transferring value globally.',
          'They enable programmable financial contracts and automated trading strategies.',
          'They facilitate decentralized lending and borrowing through smart contract platforms.',
        ],
        answer: 'They offer price stability compared to volatile cryptocurrencies like Bitcoin and Ethereum.',
      },
      {
        question: 'How can smart contracts be used to automate financial agreements and transactions in decentralized finance (DeFi)?',
        options: [
          'By executing predefined conditions and actions automatically without the need for intermediaries.',
          'By encrypting sensitive data to prevent unauthorized access by third parties.',
          'By facilitating cross-chain interoperability and communication between different blockchain platforms.',
          'By implementing multi-signature schemes and threshold cryptography for secure transactions.',
        ],
        answer: 'By executing predefined conditions and actions automatically without the need for intermediaries.',
      },
    ],

  },
  'Smart Contract Auditing':{
    assignments: [
      'Conduct a security audit of a sample smart contract to identify potential vulnerabilities and weaknesses.',
      'Explore best practices and tools for analyzing smart contract code to ensure its reliability and security.',
      'Develop a checklist for auditing smart contracts, including considerations for code logic, data validation, and access control.',
      'Investigate real-world examples of smart contract exploits and hacks, and propose preventative measures to mitigate such risks.',
      'Collaborate with a team to perform a comprehensive audit of a decentralized application (DApp) built on Ethereum or another blockchain platform.',
    ],
    quizQuestions: [
      {
        question: 'What is the purpose of smart contract auditing?',
        options: [
          'To identify and mitigate security vulnerabilities in smart contract code.',
          'To optimize gas usage and reduce transaction costs on blockchain networks.',
          'To ensure compliance with legal and regulatory requirements for blockchain applications.',
          'To facilitate interoperability between different blockchain platforms and protocols.',
        ],
        answer: 'To identify and mitigate security vulnerabilities in smart contract code.',
      },
      {
        question: 'What are some common security vulnerabilities found in smart contracts?',
        options: [
          'Reentrancy attacks, integer overflow/underflow, and unchecked external calls.',
          'DNS rebinding attacks, cross-site scripting (XSS), and SQL injection.',
          'Man-in-the-middle attacks, phishing scams, and social engineering tactics.',
          'Denial-of-service (DoS) attacks, buffer overflows, and race conditions.',
        ],
        answer: 'Reentrancy attacks, integer overflow/underflow, and unchecked external calls.',
      },
      {
        question: 'How can developers mitigate the risk of reentrancy attacks in smart contracts?',
        options: [
          'By using the "transfer" or "send" functions for transferring Ether instead of "call".',
          'By implementing circuit breakers and emergency stop mechanisms in their smart contracts.',
          'By encrypting sensitive data to prevent unauthorized access by third parties.',
          'By deploying smart contracts on permissioned blockchains with restricted access controls.',
        ],
        answer: 'By using the "transfer" or "send" functions for transferring Ether instead of "call".',
      },
      {
        question: 'What role do automated tools play in smart contract auditing?',
        options: [
          'They help identify common vulnerabilities and coding errors in smart contract code.',
          'They enforce compliance with legal and regulatory requirements for blockchain applications.',
          'They facilitate communication and collaboration among different stakeholders in the audit process.',
          'They ensure interoperability between different blockchain platforms and protocols.',
        ],
        answer: 'They help identify common vulnerabilities and coding errors in smart contract code.',
      },
      {
        question: 'What are some best practices for writing secure smart contract code?',
        options: [
          'Use standardized libraries and contracts whenever possible to minimize potential vulnerabilities.',
          'Implement access control mechanisms to restrict the privileges of contract functions and data.',
          'Perform extensive testing and code review to identify and fix potential security issues.',
          'All of the above.',
        ],
        answer: 'All of the above.',
      },
      {
        question: 'How can developers ensure that their smart contracts are resistant to denial-of-service (DoS) attacks?',
        options: [
          'By setting appropriate gas limits and using efficient algorithms to prevent resource exhaustion.',
          'By encrypting sensitive data to prevent unauthorized access by third parties.',
          'By implementing multi-signature schemes and threshold cryptography for secure transactions.',
          'By enforcing strict access controls and permissioning mechanisms in their smart contracts.',
        ],
        answer: 'By setting appropriate gas limits and using efficient algorithms to prevent resource exhaustion.',
      },
      {
        question: 'What is the role of formal verification in smart contract auditing?',
        options: [
          'To mathematically prove the correctness and security properties of smart contract code.',
          'To facilitate communication and collaboration among different stakeholders in the audit process.',
          'To enforce compliance with legal and regulatory requirements for blockchain applications.',
          'To ensure interoperability between different blockchain platforms and protocols.',
        ],
        answer: 'To mathematically prove the correctness and security properties of smart contract code.',
      },
      {
        question: 'How do fallback functions in smart contracts pose security risks?',
        options: [
          'They can be vulnerable to reentrancy attacks if not implemented correctly.',
          'They can expose sensitive data to unauthorized access by third parties.',
          'They can lead to buffer overflows and memory corruption vulnerabilities.',
          'They can trigger unexpected behaviors and lead to loss of funds or denial of service.',
        ],
        answer: 'They can be vulnerable to reentrancy attacks if not implemented correctly.',
      },
      {
        question: 'What steps should developers take to secure their smart contracts against known vulnerabilities?',
        options: [
          'Regularly update dependencies and libraries to patch known security flaws.',
          'Monitor blockchain transactions and contract interactions for suspicious activity.',
          'Educate users and stakeholders about potential risks and best practices for safe usage.',
          'All of the above.',
        ],
        answer: 'All of the above.',
      },
      {
        question: 'How can smart contract audits contribute to building trust and confidence in blockchain-based applications?',
        options: [
          'By providing assurance that the code has been thoroughly reviewed and tested for security vulnerabilities.',
          'By guaranteeing government-backed insurance for cryptocurrency holdings.',
          'By facilitating cross-chain interoperability and communication between different blockchain platforms.',
          'By enforcing compliance with legal and regulatory requirements for blockchain applications.',
        ],
        answer: 'By providing assurance that the code has been thoroughly reviewed and tested for security vulnerabilities.',
      },
    ],
  },
  'Blockchain Governance':{
    assignments: [
      'Evaluate different models of blockchain governance, such as on-chain governance, off-chain governance, and delegated governance.',
      'Analyze the role of consensus mechanisms in governing blockchain networks and ensuring network security and decentralization.',
      'Examine the challenges of achieving consensus among diverse stakeholders in blockchain communities and ecosystems.',
      'Propose mechanisms for resolving disputes and conflicts within blockchain networks, including arbitration and voting systems.',
      'Explore the legal and regulatory considerations for blockchain governance, including jurisdictional issues and compliance requirements.',
    ],
    quizQuestions: [
      {
        question: 'What is blockchain governance?',
        options: [
          'The process of managing and making decisions about a blockchain network and its protocols.',
          'The cryptographic encryption used to secure transactions on a blockchain network.',
          'The process of generating new blocks and adding them to the blockchain ledger.',
          'The consensus mechanism used to validate transactions and maintain network integrity.',
        ],
        answer: 'The process of managing and making decisions about a blockchain network and its protocols.',
      },
      {
        question: 'What are some key components of blockchain governance?',
        options: [
          'Governance models, consensus mechanisms, and decision-making processes.',
          'Smart contracts, decentralized applications (DApps), and digital assets.',
          'Public and private keys, cryptographic signatures, and hash functions.',
          'Nodes, miners, and validators participating in the network.',
        ],
        answer: 'Governance models, consensus mechanisms, and decision-making processes.',
      },
      {
        question: 'How does on-chain governance differ from off-chain governance?',
        options: [
          'On-chain governance involves making decisions directly on the blockchain through voting and consensus mechanisms, while off-chain governance occurs outside the blockchain through forums and discussions.',
          'On-chain governance relies on centralized authorities to make decisions, while off-chain governance relies on decentralized communities and consensus mechanisms.',
          'On-chain governance is more efficient and transparent than off-chain governance, which is slower and less secure.',
          'On-chain governance is only applicable to public blockchains, while off-chain governance is used in private blockchain networks.',
        ],
        answer: 'On-chain governance involves making decisions directly on the blockchain through voting and consensus mechanisms, while off-chain governance occurs outside the blockchain through forums and discussions.',
      },
      {
        question: 'What role do consensus mechanisms play in blockchain governance?',
        options: [
          'They determine how decisions are made and implemented within a blockchain network, ensuring agreement and alignment among participants.',
          'They enforce compliance with legal and regulatory requirements for blockchain applications.',
          'They facilitate cross-chain interoperability and communication between different blockchain platforms and protocols.',
          'They provide anonymity and privacy for users conducting financial transactions.',
        ],
        answer: 'They determine how decisions are made and implemented within a blockchain network, ensuring agreement and alignment among participants.',
      },
      {
        question: 'What are some challenges of achieving effective blockchain governance?',
        options: [
          'Balancing decentralization with scalability, security, and regulatory compliance.',
          'Ensuring transparency and accountability in decision-making processes.',
          'Resolving conflicts and disputes among diverse stakeholders in the blockchain community.',
          'All of the above.',
        ],
        answer: 'All of the above.',
      },
      {
        question: 'How can blockchain governance mechanisms evolve over time to adapt to changing circumstances and requirements?',
        options: [
          'By incorporating feedback and insights from stakeholders through transparent and inclusive decision-making processes.',
          'By centralizing decision-making authority in the hands of a few key participants for efficiency and speed.',
          'By implementing strict rules and regulations to enforce compliance and prevent deviations from established protocols.',
          'By restricting access to governance processes and excluding certain stakeholders from participation.',
        ],
        answer: 'By incorporating feedback and insights from stakeholders through transparent and inclusive decision-making processes.',
      },
      {
        question: 'What are the benefits of decentralized governance for blockchain networks?',
        options: [
          'Increased resilience and resistance to censorship and external interference.',
          'Faster transaction processing and higher throughput compared to centralized systems.',
          'Greater control and authority for centralized entities to enforce rules and regulations.',
          'Enhanced privacy and anonymity for users conducting transactions on the blockchain.',
        ],
        answer: 'Increased resilience and resistance to censorship and external interference.',
      },
      {
        question: 'How can blockchain governance contribute to building trust and confidence in blockchain technology?',
        options: [
          'By ensuring transparency, fairness, and inclusivity in decision-making processes.',
          'By restricting access to governance mechanisms and excluding certain stakeholders from participation.',
          'By centralizing decision-making authority in the hands of a few key participants for efficiency and speed.',
          'By implementing strict rules and regulations to enforce compliance and prevent deviations from established protocols.',
        ],
        answer: 'By ensuring transparency, fairness, and inclusivity in decision-making processes.',
      },
      {
        question: 'What role do decentralized autonomous organizations (DAOs) play in blockchain governance?',
        options: [
          'They enable stakeholders to collectively manage and govern blockchain networks through decentralized decision-making processes.',
          'They facilitate cross-chain interoperability and communication between different blockchain platforms and protocols.',
          'They enforce compliance with legal and regulatory requirements for blockchain applications.',
          'They provide anonymity and privacy for users conducting financial transactions.',
        ],
        answer: 'They enable stakeholders to collectively manage and govern blockchain networks through decentralized decision-making processes.',
      },
      {
        question: 'How can blockchain governance mechanisms promote innovation and collaboration within blockchain communities?',
        options: [
          'By fostering an open and inclusive environment for sharing ideas, resources, and expertise.',
          'By imposing strict regulations and controls to prevent deviations from established protocols.',
          'By centralizing decision-making authority in the hands of a few key participants for efficiency and speed.',
          'By restricting access to governance processes and excluding certain stakeholders from participation.',
        ],
        answer: 'By fostering an open and inclusive environment for sharing ideas, resources, and expertise.',
      },
    ],
  },
  'Hyperledger Fabric Dev':{
    assignments: [
      'Set up a development environment for Hyperledger Fabric and deploy a basic network using Docker Compose.',
      'Write and deploy chaincode (smart contracts) for Hyperledger Fabric using the Go programming language.',
      'Implement access control and permissioning mechanisms for Hyperledger Fabric networks using the Fabric SDK.',
      'Explore Hyperledger Fabric support for private channels and confidential transactions to enhance data privacy and confidentiality.',
      'Develop client applications that interact with Hyperledger Fabric networks to submit transactions and query ledger data.',
    ],
    quizQuestions: [
      {
        question: 'What is Hyperledger Fabric?',
        options: [
          'A modular blockchain framework for developing enterprise-grade distributed ledger applications.',
          'An open-source cryptocurrency platform for creating and trading digital assets.',
          'A consensus algorithm used to validate transactions on the Bitcoin blockchain.',
          'A smart contract platform for executing decentralized applications (DApps) on the Ethereum network.',
        ],
        answer: 'A modular blockchain framework for developing enterprise-grade distributed ledger applications.',
      },
      {
        question: 'What programming languages can be used to write chaincode (smart contracts) for Hyperledger Fabric?',
        options: [
          'Go (Golang), JavaScript (Node.js), and Java.',
          'Solidity, Vyper, and Serpent.',
          'Python, Ruby, and C++.',
          'Swift, Kotlin, and Rust.',
        ],
        answer: 'Go (Golang), JavaScript (Node.js), and Java.',
      },
      {
        question: 'What are some key features of Hyperledger Fabric?',
        options: [
          'Permissioned network, modular architecture, and support for private channels.',
          'Proof-of-work consensus mechanism, decentralized governance, and native token support.',
          'Smart contracts, decentralized applications (DApps), and token standards.',
          'On-chain governance, voting mechanisms, and staking rewards.',
        ],
        answer: 'Permissioned network, modular architecture, and support for private channels.',
      },
      {
        question: 'How does Hyperledger Fabric ensure data privacy and confidentiality?',
        options: [
          'Through the use of private channels that restrict access to authorized participants.',
          'By encrypting all transactions and ledger data using advanced cryptographic techniques.',
          'By implementing sharding and partitioning techniques to distribute data across multiple nodes.',
          'By relying on trusted intermediaries to validate and secure transactions on the network.',
        ],
        answer: 'Through the use of private channels that restrict access to authorized participants.',
      },
      {
        question: 'What role do client applications play in interacting with Hyperledger Fabric networks?',
        options: [
          'They submit transactions and query ledger data using the Fabric SDK or REST APIs.',
          'They mine new blocks and validate transactions to secure the network.',
          'They execute smart contracts and deploy decentralized applications (DApps) on the network.',
          'They participate in consensus algorithms to reach agreement on the state of the ledger.',
        ],
        answer: 'They submit transactions and query ledger data using the Fabric SDK or REST APIs.',
      },
      {
        question: 'What are the advantages of using Hyperledger Fabric for enterprise blockchain applications?',
        options: [
          'Scalability, privacy, and permissioned network architecture.',
          'Decentralization, censorship resistance, and tokenomics.',
          'Interoperability, cross-chain communication, and atomic swaps.',
          'Smart contract execution, decentralized finance (DeFi), and token standards.',
        ],
        answer: 'Scalability, privacy, and permissioned network architecture.',
      },
      {
        question: 'How does Hyperledger Fabric differ from public blockchain platforms like Bitcoin and Ethereum?',
        options: [
          'It uses a permissioned network model with known participants, whereas public blockchains are permissionless and open to anyone.',
          'It relies on proof-of-stake (PoS) consensus, whereas public blockchains typically use proof-of-work (PoW) or proof-of-stake (PoS) mechanisms.',
          'It supports native token issuance and smart contracts, whereas public blockchains primarily focus on cryptocurrency transactions.',
          'It offers higher transaction throughput and lower latency compared to public blockchains due to its centralized architecture.',
        ],
        answer: 'It uses a permissioned network model with known participants, whereas public blockchains are permissionless and open to anyone.',
      },
      {
        question: 'What are some use cases for Hyperledger Fabric in enterprise settings?',
        options: [
          'Supply chain management, trade finance, and healthcare data exchange.',
          'Decentralized finance (DeFi), non-fungible tokens (NFTs), and gaming platforms.',
          'Social media networks, content distribution, and peer-to-peer lending.',
          'Digital identity management, voting systems, and intellectual property rights.',
        ],
        answer: 'Supply chain management, trade finance, and healthcare data exchange.',
      },
      {
        question: 'How can organizations benefit from deploying Hyperledger Fabric-based solutions?',
        options: [
          'Increased transparency, efficiency, and security in business processes.',
          'Reduced transaction costs and faster settlement times compared to traditional systems.',
          'Enhanced data privacy and confidentiality through fine-grained access controls.',
          'All of the above.',
        ],
        answer: 'All of the above.',
      },
      {
        question: 'What are some challenges associated with implementing Hyperledger Fabric?',
        options: [
          'Complexity of network setup, integration with existing systems, and governance issues.',
          'Scalability limitations, network congestion, and high transaction fees.',
          'Regulatory uncertainty, legal compliance, and jurisdictional concerns.',
          'Security vulnerabilities, smart contract bugs, and consensus failures.',
        ],
        answer: 'Complexity of network setup, integration with existing systems, and governance issues.',
      },
    ],

  },
  'Blockchain Integration with IOT':{
    assignments: [
      'Explore the potential applications of blockchain technology in the Internet of Things (IoT) ecosystem, such as supply chain tracking, asset management, and data integrity verification.',
      'Design and implement a prototype IoT device that interacts with a blockchain network to record sensor data and trigger smart contract executions.',
      'Investigate interoperability standards and protocols for integrating IoT devices with blockchain networks, such as MQTT, CoAP, and Web3.js.',
      'Analyze the security challenges and considerations associated with deploying blockchain-enabled IoT solutions, including data privacy, identity management, and network resilience.',
      'Develop a proof-of-concept application that demonstrates the integration of IoT devices with a blockchain network to enable secure and transparent data sharing and processing.',
    ],
    quizQuestions: [
      {
        question: 'What is the Internet of Things (IoT)?',
        options: [
          'A network of interconnected devices embedded with sensors and software to collect, exchange, and analyze data.',
          'A decentralized network of computers that store and validate transactions on a blockchain ledger.',
          'A protocol for secure communication and data exchange between devices and cloud servers.',
          'A programming language for developing decentralized applications (DApps) on blockchain platforms.',
        ],
        answer: 'A network of interconnected devices embedded with sensors and software to collect, exchange, and analyze data.',
      },
      {
        question: 'How can blockchain technology enhance the security and trustworthiness of IoT devices and data?',
        options: [
          'By providing tamper-proof data storage and immutable audit trails for sensor readings and transactions.',
          'By encrypting communication channels and enforcing access controls to prevent unauthorized access.',
          'By centralizing control over IoT networks and eliminating single points of failure.',
          'By enabling real-time monitoring and management of IoT devices through smart contracts.',
        ],
        answer: 'By providing tamper-proof data storage and immutable audit trails for sensor readings and transactions.',
      },
      {
        question: 'What are some challenges of integrating blockchain technology with IoT?',
        options: [
          'Scalability limitations, high transaction costs, and interoperability issues between disparate systems.',
          'Data privacy concerns, regulatory compliance, and legal uncertainties regarding ownership and liability.',
          'Security vulnerabilities, including 51% attacks, double spending, and smart contract bugs.',
          'Lack of standardization, fragmentation, and complexity in IoT device management and communication protocols.',
        ],
        answer: 'Scalability limitations, high transaction costs, and interoperability issues between disparate systems.',
      },
      {
        question: 'How do smart contracts facilitate interactions between IoT devices and blockchain networks?',
        options: [
          'They enable automated execution of predefined actions based on predefined conditions, such as sensor readings or external triggers.',
          'They encrypt communication channels and enforce access controls to prevent unauthorized access to IoT data.',
          'They provide real-time monitoring and management of IoT devices through decentralized applications (DApps).',
          'They secure IoT networks by verifying the identity and integrity of devices and users through cryptographic signatures.',
        ],
        answer: 'They enable automated execution of predefined actions based on predefined conditions, such as sensor readings or external triggers.',
      },
      {
        question: 'What role do oracles play in blockchain-enabled IoT systems?',
        options: [
          'They act as trusted intermediaries that provide external data to smart contracts, enabling them to interact with real-world events and conditions.',
          'They are hardware modules embedded in IoT devices to secure communication channels and prevent tampering.',
          'They enforce compliance with regulatory requirements and industry standards for IoT device manufacturers and operators.',
          'They facilitate cross-chain interoperability and communication between different blockchain networks and protocols.',
        ],
        answer: 'They act as trusted intermediaries that provide external data to smart contracts, enabling them to interact with real-world events and conditions.',
      },
      {
        question: 'What are some potential use cases for blockchain-enabled IoT solutions?',
        options: [
          'Supply chain management, asset tracking, and product provenance verification.',
          'Decentralized finance (DeFi), non-fungible tokens (NFTs), and decentralized autonomous organizations (DAOs).',
          'Social media networks, content distribution, and peer-to-peer lending.',
          'Digital identity management, voting systems, and intellectual property rights.',
        ],
        answer: 'Supply chain management, asset tracking, and product provenance verification.',
      },
      {
        question: 'How can blockchain technology improve data integrity and trust in IoT ecosystems?',
        options: [
          'By creating an immutable record of sensor data and device interactions on a distributed ledger.',
          'By encrypting communication channels and securing data transmission between IoT devices and cloud servers.',
          'By centralizing control over IoT networks and eliminating single points of failure.',
          'By enabling real-time monitoring and management of IoT devices through smart contracts.',
        ],
        answer: 'By creating an immutable record of sensor data and device interactions on a distributed ledger.',
      },
      {
        question: 'What are some considerations for selecting a blockchain platform for IoT integration?',
        options: [
          'Scalability, transaction throughput, and consensus mechanisms.',
          'Programming languages, smart contract capabilities, and developer communities.',
          'Regulatory compliance, legal frameworks, and industry partnerships.',
          'All of the above.',
        ],
        answer: 'All of the above.',
      },
      {
        question: 'How can organizations benefit from deploying blockchain-enabled IoT solutions?',
        options: [
          'Increased transparency, efficiency, and security in data sharing and management processes.',
          'Reduced operational costs and improved asset utilization through automation and optimization.',
          'Enhanced customer trust and loyalty by ensuring the integrity and authenticity of IoT data.',
          'All of the above.',
        ],
        answer: 'All of the above.',
      },
      {
        question: 'What are some potential security risks associated with blockchain-enabled IoT deployments?',
        options: [
          '51% attacks, double spending, and smart contract vulnerabilities.',
          'Data breaches, unauthorized access, and tampering of IoT devices and data.',
          'Scalability limitations, network congestion, and high transaction fees.',
          'Regulatory non-compliance, legal disputes, and liability issues.',
        ],
        answer: 'Data breaches, unauthorized access, and tampering of IoT devices and data.',
      },
    ],

  },
  'Web3.js Advanced Tecniques':{
    assignments: [
      'Explore the concept of Web3.js middleware and its role in enhancing the functionality of decentralized applications (DApps).',
      'Implement custom transaction signing and verification mechanisms using Web3.js to enhance security and user experience in DApps.',
      'Integrate advanced features of Ethereum smart contracts, such as events, modifiers, and interfaces, into client-side applications using Web3.js.',
      'Optimize gas usage and transaction throughput in Ethereum-based DApps by employing advanced techniques, such as batched transactions and contract interactions.',
      'Implement decentralized identity solutions using Web3.js libraries and standards, such as ERC-725 and ERC-735, to enable self-sovereign identity management in DApps.',
    ],
    quizQuestions: [
      {
        question: 'What is Web3.js?',
        options: [
          'A JavaScript library that provides an interface for interacting with the Ethereum blockchain and smart contracts.',
          'A programming language for developing decentralized applications (DApps) on the Ethereum network.',
          'A decentralized storage protocol for securely storing and retrieving data on the blockchain.',
          'A consensus algorithm used to validate transactions on the Bitcoin blockchain.',
        ],
        answer: 'A JavaScript library that provides an interface for interacting with the Ethereum blockchain and smart contracts.',
      },
      {
        question: 'What role does Web3.js middleware play in decentralized application development?',
        options: [
          'It extends the functionality of Web3.js by intercepting and processing requests before they reach the Ethereum network.',
          'It encrypts communication channels between DApps and the Ethereum blockchain to ensure data privacy and security.',
          'It enforces access controls and permissioning mechanisms to regulate interactions between users and smart contracts.',
          'It provides a standardized interface for integrating DApps with external services and protocols, such as IPFS and Swarm.',
        ],
        answer: 'It extends the functionality of Web3.js by intercepting and processing requests before they reach the Ethereum network.',
      },
      {
        question: 'What are some examples of Web3.js middleware?',
        options: [
          'Provider engines, filters, and subproviders.',
          'Smart contracts, decentralized applications (DApps), and token standards.',
          'Interplanetary File System (IPFS), Swarm, and Whisper.',
          'Metamask, Mist, and other Ethereum wallet providers.',
        ],
        answer: 'Provider engines, filters, and subproviders.',
      },
      {
        question: 'How can you implement custom transaction signing and verification in a Web3.js application?',
        options: [
          'By using the `web3.eth.sign` method to sign transactions with a private key and the `web3.eth.verify` method to verify signatures.',
          'By embedding cryptographic signatures directly into smart contracts and validating them using Ethereum\'s built-in signature verification mechanism.',
          'By encrypting transaction payloads and securely transmitting them to Ethereum nodes using SSL/TLS encryption.',
          'By relying on Ethereum wallet providers, such as Metamask or MyEtherWallet, to handle transaction signing and verification.',
        ],
        answer: 'By using the `web3.eth.sign` method to sign transactions with a private key and the `web3.eth.verify` method to verify signatures.',
      },
      {
        question: 'What are some benefits of using advanced Ethereum smart contract features in Web3.js applications?',
        options: [
          'Increased functionality, interoperability, and efficiency in decentralized application development.',
          'Enhanced security, reliability, and auditability of smart contract code and execution.',
          'Improved scalability, transaction throughput, and gas optimization in Ethereum-based DApps.',
          'All of the above.',
        ],
        answer: 'All of the above.',
      },
      {
        question: 'How can you optimize gas usage in Ethereum transactions?',
        options: [
          'By using low-level assembly code and optimizing smart contract bytecode size.',
          'By batching multiple transactions into a single Ethereum block to reduce network congestion.',
          'By adjusting transaction gas limits and fees based on network congestion and market conditions.',
          'By implementing off-chain solutions, such as state channels or sidechains, to minimize on-chain interactions.',
        ],
        answer: 'By adjusting transaction gas limits and fees based on network congestion and market conditions.',
      },
      {
        question: 'What are some challenges of decentralized identity management in Web3.js applications?',
        options: [
          'Interoperability issues, regulatory compliance, and user adoption barriers.',
          'Security vulnerabilities, identity theft, and data breaches.',
          'Scalability limitations, network congestion, and high transaction fees.',
          'Legal uncertainties, jurisdictional conflicts, and governance disputes.',
        ],
        answer: 'Interoperability issues, regulatory compliance, and user adoption barriers.',
      },
      {
        question: 'How can decentralized identity solutions improve user privacy and security?',
        options: [
          'By giving users full control over their identity data and enabling them to selectively disclose information to third parties.',
          'By encrypting identity credentials and storing them on centralized servers with strict access controls.',
          'By relying on trusted intermediaries to manage identity verification and authentication processes.',
          'By using biometric authentication and multi-factor authentication (MFA) mechanisms to enhance identity verification.',
        ],
        answer: 'By giving users full control over their identity data and enabling them to selectively disclose information to third parties.',
      },
      {
        question: 'What is the purpose of ERC-725 and ERC-735 standards in decentralized identity?',
        options: [
          'ERC-725 defines a standard interface for managing identity proxies and keys, while ERC-735 specifies a standard format for claiming and verifying identity attributes.',
          'ERC-725 specifies a standard format for claiming and verifying identity attributes, while ERC-735 defines a standard interface for managing identity proxies and keys.',
          'ERC-725 and ERC-735 are Ethereum Improvement Proposals (EIPs) that propose enhancements to the Ethereum Virtual Machine (EVM) and smart contract execution environment.',
          'ERC-725 and ERC-735 are token standards for creating and managing non-fungible tokens (NFTs) on the Ethereum blockchain.',
        ],
        answer: 'ERC-725 defines a standard interface for managing identity proxies and keys, while ERC-735 specifies a standard format for claiming and verifying identity attributes.',
      },
      {
        question: 'What are some use cases for Web3.js advanced techniques in decentralized application development?',
        options: [
          'Decentralized finance (DeFi), non-fungible tokens (NFTs), and decentralized exchanges (DEXs).',
          'Social media networks, content distribution platforms, and online marketplaces.',
          'Supply chain management, logistics tracking, and product authentication.',
          'Digital identity management, authentication services, and access control systems.',
        ],
        answer: 'Digital identity management, authentication services, and access control systems.',
      },
    ],

  },
  };

  return (
    <div className="video-playlist" id='goTop'>
    <h3 style={{marginTop:'60px'}}>Video Playlist for {course.name}.</h3>

      <div style={{display:'flex', gap:'20px'}}>
        <div ><a href='#assignments' style={{textDecoration:'none', color:'#000080',fontWeight:'700'}}>Go to Assignments</a></div>
        <div><a href='#quiz' style={{textDecoration:'none', color:'#000080',fontWeight:'700'}}>Take Quiz</a></div>
      </div>
      
        {videoUrls[course.name].map((videoUrl, index) => (
        
      
          <div key={index} className="video-wrapper" style={{marginLeft:'0%',marginTop:'40px'}}>
            <iframe
              width="600"
              height="400"
              src={videoUrl}
              title={`Video ${index + 1}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
              
            

          
         
        ))}

      <div className="assignment" id='assignments' >
        <h2 style={{color:'#007bff'}}>Assignments</h2>
        <ul style={{marginLeft:'-2%'}}>
          {courseContent[course.name].assignments.map((assignment, index) => (
            <li key={index}>{assignment}</li>
          ))}
        </ul>
        {assignments.map((assignment, i) => (
          <div key={i}>
            <input
            style={{width:'300px',height:'40px', borderRadius:'10px',marginTop:'20px',borderColor:'#00'}}
              type="text"
              placeholder={ `Assignment ${i + 1}`}
              value={assignments[i]}
              onChange={(event) => handleChangeAssignment(i, event)}
              required
            />
          </div>
        ))}
        <button onClick={handleSubmitAssignment} onSubmit={handleSubmit}>Submit Assignments</button>
      </div>
      {confirmatonVisible&&(
        <div className='message'>Assignments Submitted!</div>
      )}


      <div className="quiz" id='quiz' onSubmit={handleSubmit}>
        <h2 style={{color:'#007bff'}}>Quiz</h2>
        <ol> {courseContent[course.name].quizQuestions.map((questionObj, i) => (
         <div key={i}>
            
            <li><p>{questionObj.question}</p></li>
            {questionObj.options.map((option, j) => (
              <div key={j}>
                <input
                  type="radio"
                  id={`option-${j}`}
                  name={`question-${i}`}
                  value={option}
                  checked={selectedOptions[i] === option}
                  onChange={() => handleChangeQuizAnswer(i, option)}
                  required
                />
                <label htmlFor={`option-${j}`}>{option}</label>
              </div>
            ))}
          </div>
        ))}</ol>
        <button onClick={handleSubmitQuiz}>Submit Quiz</button>
      </div>
      {confirmatonVisible&&(
        <div className='message'>Quiz Completed! Check portal for score.</div>
      )}

        <div className='back' style={{padding:'30px 30px 40px 0px'}}><a href='#goTop'style={{textDecoration:'none', color:'#000080',fontWeight:'700'}}>Back to Top</a></div>

        
      
    </div>

    
  );
};

export default CoursePlaylist;
