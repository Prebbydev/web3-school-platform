import { useCallback } from "react";
import axios from "../axios";
import useNotification from "./useNotification";
import useLoading from "./useLoading";
import type { Credentials } from "../types";


const useRegister = ({ email, password }: Credentials) => {
    const { isLoading, startLoading, stopLoading } = useLoading();
  
    const {
      notification,
      setErrorNotification,
      setSuccessNotification,
      clearNotification,
    } = useNotification();
  
    const register = useCallback(async (): Promise<boolean> => {
      startLoading();
      clearNotification();
  
      const data = {
        email,
        password,
      };
  
      try {
        await axios.post("/register", data);
        setSuccessNotification("registration successful");
        stopLoading();
        return true;
      } catch (error: any) {
        console.log(error);
        setErrorNotification("try another email address");
        
        if (error.response) {
          setErrorNotification(error?.response?.data?.error?.message);
        } else if (error.request) {
          setErrorNotification("no response from server");
        } else {
          setErrorNotification("unexpected error");
        }
      }
      stopLoading();
      return false;
    }, [email, password]);
  
    return { register, isLoading, notification };
  };
  
  export default useRegister;
  