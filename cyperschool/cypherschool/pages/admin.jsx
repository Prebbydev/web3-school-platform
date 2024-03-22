import React, { useState, useEffect } from "react";
import EducationAbi from "../contract/EducationAbi.json";
import { NFTStorage } from "nft.storage";
import { useWriteContract, useSimulateContract, useAccount, useReadContract  } from "wagmi";
import useCreateCourse from "../hooks/useCreateCourse";
import  userCreateCourse from "../hooks/useCreatecourese";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import WagmiWrapperLayout from "../layout/Wagmit";

const client = new NFTStorage({ token: process.env.NEXT_PUBLIC_NFT_KEY ?? "" });
const Admin = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    courseImageVideo: null,
    courseURl: "", //TODO: which is uploaded to the nft storage
    course_credits: "",
    courseReward: "",
  });
  const { address } = useAccount();
  const [fetchedData, setFetchedData] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const name = formData.courseURl;
  const description = formData.description;
  const courseImageVideo = formData.courseImageVideo;
  console.log(name);
  const { isLoading, notification, uploadNFTStoarge } = useCreateCourse({
    name,
    description,
    courseImageVideo,
  });

  
  const { data: simulateMint } = useSimulateContract({
    abi: EducationAbi.abi,
    address: EducationAbi.address,
    functionName: "createCourse",
    args: [
      formData.title,
      fetchedData,
      formData.course_credits,
      formData.courseReward,
    ],
    // account: address
  });
  const { writeContractAsync } = useWriteContract();
  

 
  
  
  const handlesubmit = async (e) => {
    e.preventDefault();
    
    try {
      const imageFile = new File([formData.courseImageVideo], 'metadata-image', { type: 'image/png' });
      const response = await client.store({
        name: formData.courseURl,
        description: formData.description,
        image: imageFile,
        
      });
      // const response = await uploadNFTStoarge();
      console.log(response);
      const ipfsurl = await response.ipnft;
      const url = `https://ipfs.io/ipfs/${ipfsurl}/metadata.json`;
      
      // Update fetchedData state
      setFetchedData(url);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  
  const {data: fetchResult} = useReadContract({
    abi: EducationAbi.abi,
    address: EducationAbi.address,
    functionName: 'getCoursesDetails',
    args: [2]
  })
  
  console.log(fetchResult);
  useEffect(() => {
    if (fetchedData && fetchedData !== null) {
       const uploadBlock = async () => {
         try {
           const uploadBlockResult = await writeContractAsync(simulateMint?.request);
           console.log(uploadBlockResult);
         } catch (error) {
           console.error("Error uploading block:", error);
         }
       };
   
       uploadBlock();
    }
   }, [fetchedData, simulateMint]); 
  
  return (
    // <WagmiWrapperLayout>
    <div>
      {/* upload course */}
      <ConnectButton />

      <div className=" mt-5">
        <form
          className=" flex flex-col justify-center gap-2 items-center"
          onSubmit={handlesubmit}
        >
          <input
            type="text"
            name="title"
            placeholder="title"
            value={formData.title}
            className=" w-[200px]  p-2 mt-2 mb-3 border-2 border-[#7b64f2] rounded-lg"
            onChange={handleInputChange}
          />
          <input
            type="file"
            name="courseImageVideo"
            placeholder="courseImageVideo"
            value={formData.courseImageVideo}
            className="p-2 mt-2 mb-3 border-2 border-[#7b64f2] rounded-lg w-[200px]"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            placeholder="description"
            value={formData.description}
            className="w-[200px]  p-2 mt-2 mb-3 border-2 border-[#7b64f2] rounded-lg"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="courseURl"
            placeholder="courseURl"
            value={formData.courseURl}
            className="w-[200px] p-2 mt-2 mb-3 border-2 border-[#7b64f2] rounded-lg"
            onChange={handleInputChange}
          />

          <input
            type="text"
            name="course_credits"
            placeholder="course_credits"
            value={formData.course_credits}
            className="w-[200px]  p-2 mt-2 mb-3 border-2 border-[#7b64f2] rounded-lg"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="courseReward"
            placeholder="courseReward"
            value={formData.courseReward}
            className="w-[200px]  p-2 mt-2 mb-3 border-2 border-[#7b64f2] rounded-lg"
            onChange={handleInputChange}
          />
          <button type="submit">Upload Course</button>
        </form>
      </div>
      {/* <button onClick={result}>get course Course</button> */}
  
    </div>
    // {/* </WagmiWrapperLayout> */}
  );
};

export default Admin;
