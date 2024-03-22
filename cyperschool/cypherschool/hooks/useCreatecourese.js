import { useWriteContract, useSimulateContract, useAccount } from "wagmi";
import EducationAbi from "../contract/EducationAbi.json";

const userCreateCourse = async ({
  courseVideoLink,
  courseNFTUrl,
  credit,
  reward,
}) => {
  const { address } = useAccount();
  const { writeContractAsync } = useWriteContract();

  // try {
    const { data: simulateMint } = await useSimulateContract({
      abi: EducationAbi.abi,
      address: EducationAbi.address,
      functionName: "createCourse",
      args: [courseVideoLink, courseNFTUrl, credit, reward],
    });

    const result = writeContractAsync(simulateMint?.request);
    console.log(result);
    return {result};
  // } catch (error) {
  //   console.log(error);
  // }
};


export default userCreateCourse