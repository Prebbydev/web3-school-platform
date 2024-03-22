import { useCallback, useState } from 'react'
import { NFTStorage } from 'nft.storage'
import { useWriteContract, useSimulateContract, useAccount } from "wagmi"
import EducationAbi from "../contract/EducationAbi.json"
import useLoading from "./useLoading"
import useNotification from './useNotification'
// import { toast } from "react-toastify"


const client = new NFTStorage({ token: process.env.NEXT_PUBLIC_NFT_KEY ?? ""})
const useCreateCourse = ({ name,
    description,
courseImageVideo }) => {
    const { isLoading, startLoading, stopLoading } = useLoading();

  const {
    notification,
    setErrorNotification,
    setSuccessNotification,
    clearNotification,
  } = useNotification();

//   const videoData = new Blob([/* video data here */], { type: 'video/mp4' });
// uploadVideo(videoData, 'My Video NFT', 'This is a description of my video NFT.');

  const uploadNFTStoarge = useCallback(async () => {
    // startLoading();
    // clearNotification();
    try {
        const videoFile = new File([courseImageVideo], 'metadata-image', { type: 'image/png' });
      const response = await client.store({
        name: name,
        description: description,
        image: videoFile,
        
      });
      toast.success("Uploading Course waiting for metamask to pop up")
      setSuccessNotification("Succefully upload to nft storage")
      console.log(response);
      // stopLoading()
      return response
  }catch( error) {
    console.log(error);
    if (error.response) {
        setErrorNotification(error?.response);
      } else if (error.request) {
        setErrorNotification("no response from server");
      } else {
        setErrorNotification("unexpected error");
      }
  }
},[])

return { isLoading, notification, uploadNFTStoarge}
}

export default useCreateCourse