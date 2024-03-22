import React from 'react'
import {
    useWriteContract,
    useSimulateContract,
    useAccount,
    useReadContract,
  } from "wagmi";
  import EducationAbi from "../../../contract/EducationAbi.json"

  import {useRouter} from "next/router";

const Submission = ({ id }) => {
    const { data: fetchResult } = useReadContract({
        abi: EducationAbi.abi,
        address: EducationAbi.address,
        functionName: "getCoursesDetails",
        args: [id],
      });
  return (
    <div>

    </div>
  )
}

export default Submission