import React, { useState, useEffect, useCallback } from "react";
import {
  useWriteContract,
  useSimulateContract,
  useAccount,
  useReadContract,
  useCall,
} from "wagmi";
import EducationAbi from "../../../contract/EducationAbi.json";
import axios from "axios";
import LoadingIcon from "../../LoadingIcon"
import useLoading from "../../../hooks/useLoading"
import useNotification from "../../../hooks/useNotification"
import { toast } from "react-toastify"

const UserCourseCard = ({  courseData }) => {

  const { writeContractAsync } = useWriteContract()
  const { data: simulateEnroll, error: enrollerror } = useSimulateContract({
    abi: EducationAbi.abi,
    address: EducationAbi.address,
    functionName: "enrollCourse",
    args: [courseData?.courseId],
  });
  const imageUrls = {
    "Blockchain Fundamentals": "blockchain_fundamentals.jpg",
    "Ethereum Development": "ethereum_development.jpg",
    "Web3.js Essentials": "web3js_essentials.jpg",
    "DeFi Fundamentals": "defi_fundamentals.jpg",
    "Solidity Programming": "solidity_programming.jpg",
    "Blockchain Security": "blockchain_security.jpg",
    "NFT Creation and Trading": "nft_creation.jpg",
    "Decentralized Identity": "decentralized_identity.jpg",
    "Blockchain for Supply Chain": "supply_chain_blockchain.jpg",
    "Crypto Economics": "crypto_economics.jpg",
    "Smart Contract Auditing": "smart_contract_auditing.jpg",
    "Blockchain Governance": "blockchain_governance.jpg",
    "Hyperledger Fabric Dev": "hyperledger_fabric.jpg",
    "Blockchain Integration with IoT": "blockchain_iot.jpg",
    "Web3.js Advanced Techniques": "web3js_advanced.jpg",
  };
  
  const { isLoading, startLoading, stopLoading } = useLoading();

console.log(enrollerror);

  const [enrolled, setEnrolled] = useState(false);
  // const [courseData, setCourseData] = useState(null);
  const [data, setData] = useState(null);
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false);
  const { address } = useAccount();

  // const { data: fetchResult } = useReadContract({
  //   abi: EducationAbi.abi,
  //   address: EducationAbi.address,
  //   functionName: "getCoursesDetails",
  //   args: [id],
  // });
  // title
  //     courseURL
  //     SubmitLink,
  //     rewards,
  //     credits,
  //     isCompleted,
  //     eroll_Course

  // const getCoursesDetails = useCallback(() => {
  //   if (!fetchResult) return null;
  //   setCourseData({
  //     title: fetchResult[0],
  //     courseURL: fetchResult[1],
  //     SubmitLink: fetchResult[2],
  //     rewards: fetchResult[3],
  //     credits: Number(fetchResult[4]),
  //     isCompleted: Number(fetchResult[5]),
  //     eroll_Course: fetchResult[6],
  //   });
  //   setLoading(false);
  // }, [fetchResult]);
  
    // setData(courseData?.courseURL);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(courseData?.courseURL);
        // console.log(response);
        setResponse(response?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [data]);

  // console.log(data);
  // console.log(response);
  // console.log(fetchResult);
 

  // useEffect(() => {
  //   getCoursesDetails();
  // }, [getCoursesDetails]);

  // if (!courseData) return null;
  // console.log(loading);

  


  const ipfsImageUrl = `https://ipfs.io/ipfs/${response?.image.replace('ipfs://', '')}`
  console.log(ipfsImageUrl);

  const handleEnrollCourse = async() =>{
    startLoading()

    try {
      
      const result = await writeContractAsync(simulateEnroll?.request)
      console.log(result);
      toast.success("Successfully enroll the course")
      stopLoading()
    } catch (error) {
      console.log(error);
      toast.error("Failed to enroll the course, User already enroll")
    }
  }

 

  return (
    <div className="user-course-card">
      {/* <img
        src={imageUrls}
        alt={courseData.title}
        // onClick={() => onClick(course)}
      /> */}

      
      <div className="video-wrapper" style={{marginLeft:'0%', marginTop: '10px'}}>
            <iframe
              width="300"
              height="200"
              src={response?.name}
              
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
      <h2 
      // onClick={() => onClick(course)}
      >{courseData.title}</h2>
      <p>{response?.description}</p>
      {/* <p>{courseData?.rewards}</p> */}

      
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#333333",
            marginLeft: "20px",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }} 
          onClick={handleEnrollCourse} className=""
        >
          { isLoading ? "Enrolling" : "Enroll"} Enroll
        </button>
      
        <button
          
          style={{
            padding: "10px 20px",
            backgroundColor: "#3A306C",
            marginLeft: "20px",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          <a href={`/course/${courseData?.courseId}`} target="_blank">
          View course
          </a>
        </button>
          </div>
  );
};

export default UserCourseCard;
