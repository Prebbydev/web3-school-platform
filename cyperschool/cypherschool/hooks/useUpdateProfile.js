import { useCallback } from "react";
import axios from "../axios/authAxios";
import useNotification from "./useNotification";
import useLoading from "./useLoading";
import { toast} from "react-toastify"
const useUpdateProfile = ({
  firstname,
  lastname,
  othername,
  wallet_address,
}) => {
  const { isLoading, startLoading, stopLoading } = useLoading();

  const {
    notification,
    setErrorNotification,
    setSuccessNotification,
    clearNotification,
  } = useNotification();

  const update = useCallback(async () => {
    startLoading();
    clearNotification();

    const data = {
      firstname,
      lastname,
      othername,
      wallet_address,
    };

    try {
      await axios().put("/user-profile", data);
      toast.success("profile update successful")
      setSuccessNotification("profile update successful");
      stopLoading();
      return true;
    } catch (error) {
      console.log(error);
      toast.error("profile update failed")
      setErrorNotification("try again later");

      if (error.response) {
        setErrorNotification(error?.response?.data?.error?.message);
      } else if (error.request) {
        toast.error("no response from server")
        setErrorNotification("no response from server");
      } else {
        setErrorNotification("unexpected error");
        toast.error("unexpected error")
      }
    }
    stopLoading();
    return false;
  }, [firstname, lastname, othername, wallet_address]);

  return { update, isLoading, notification };
};

export default useUpdateProfile;
