import { useCallback } from "react";
import axios from "../axios";
// import axios from "axios";
import useNotification from "./useNotification";
import useLoading from "./useLoading";
import type { Credentials } from "../types";


const useLogin = ({ email, password }: Credentials) => {
    const { isLoading, startLoading, stopLoading } = useLoading();
  
    const {
      notification,
      setErrorNotification,
      setSuccessNotification,
      clearNotification,
    } = useNotification();
  
    const login = useCallback(async (): Promise<boolean> => {
      startLoading();
      clearNotification();
  
      const data = {
        email,
        password,
      };
  
      try {
        const response = await axios.post("/login", data);
        setSuccessNotification("user login successfully");
        stopLoading();
        console.log(response)
        localStorage.setItem("token", response.data.accessToken);
        return true;
      } catch (error: any) {
        console.log(error);
        
        if (error.response) {
          setErrorNotification(error?.response?.data?.error?.message);
        } else if (error.request) {
          setErrorNotification("no response from server");
        } else {
          setErrorNotification("unexpected output");
        }
      }
      stopLoading();
      return false;
    }, [email, password]);
  
    return { login, isLoading, notification };
  };
  
  export default useLogin;