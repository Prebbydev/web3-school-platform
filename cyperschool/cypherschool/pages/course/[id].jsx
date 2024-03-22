import React, { useState, useEffect, useCallback } from 'react'
import {
    useWriteContract,
    useSimulateContract,
    useAccount,
    useReadContract,
  } from "wagmi";
  import EducationAbi from "../../contract/EducationAbi.json"
  import axios from "axios"
  import {useRouter} from "next/router";
import LoadingIcon from "../../components/LoadingIcon"
const getCoursesDetails = ({ params }) => {
  const { query } = useRouter();
  console.log(query);
const [submission, setSubmission] = useState('')
  const { data: simulateContract, error: enrollerror, isLoading: simulateLoading } = useSimulateContract({
    abi: EducationAbi.abi,
    address: EducationAbi.address,
    functionName: "submitAssignments",
    args: [query?.id, submission],
    // account: address
  });

  const [courseData, setCourseData] = useState(null);
  const [data, setData] = useState(null);
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(true);

  const { writeContractAsync } = useWriteContract()
  const { data: fetchResult } = useReadContract({
    abi: EducationAbi.abi,
    address: EducationAbi.address,
    functionName: "getCoursesDetails",
    args: [query?.id],
  });


  const getCoursesDetails = useCallback(() => {
    if (!fetchResult) return null;
    setCourseData({
      title: fetchResult[0],
      courseURL: fetchResult[1],
      SubmitLink: fetchResult[2],
      rewards: fetchResult[3],
      credits: Number(fetchResult[4]),
      isCompleted: Number(fetchResult[5]),
      eroll_Course: fetchResult[6],
    });
    setData(fetchResult[1]);
    setLoading(false);
  }, [fetchResult]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(data);
        console.log(response);
        setResponse(response?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [data]);

  useEffect(() => {
    getCoursesDetails();
  }, [getCoursesDetails]);

  if (!courseData) return null;

  const handleSubmit = async(e) => {
    e.preventDafult();
    try {
      
      const result = await writeContractAsync(simulateContract?.request)
      console.log(result);
    } catch (error) {
      // console.log(error);
    }
  }

  return (
<div className=" flex justify-center flex-col items-center" id='goTop'>
    <h3 style={{marginTop:'60px'}}>Video Playlist for blockchain course.</h3>

      <div style={{display:'flex', gap:'20px'}}>
        <div ><a href='#assignments' style={{textDecoration:'none', color:'#000080',fontWeight:'700'}}>Go to Assignments</a></div>
        {/* <div><a href='#quiz' style={{textDecoration:'none', color:'#000080',fontWeight:'700'}}>Take Quiz</a></div> */}
      </div>
      
        <div>
        <h2 className=' text-bold text-lg text-center' style={{ fontSize: '20px', fontWeight: 'bold'}}>{courseData.title}</h2>
      <p style={{ fontSize: '20px', fontWeight: 'smi-bold'}}>{response?.description}</p>
        </div>
      
          <div className="video-wrapper" style={{marginLeft:'0%',marginTop:'40px'}}>
            <iframe
              width="600"
              height="400"
              src={response?.name}
              
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
              
          <div id='assignment' className=' mt-[50px]'>
            <h3 className=' text-center'>Submit Assignment for reward</h3>
            <form className=' flex  flex-col  justify-center items-center' onSubmit={handleSubmit}>
            <input type="text" value={submission} onChange={(e) => {
                    setSubmission(e.target.value);
                  }} name="submission" id="submission" className='w-[350px]  p-2 mt-2 mb-3 border-2 border-[#7b64f2] rounded-lg' placeholder='Submit Your assignment URl' />
            <button type='submit' className=' bg-blue-950 text-white w-[150px] py-5 rounded-md'>Submit</button>
            </form>

          </div>
    </div>
  )
}

export default getCoursesDetails