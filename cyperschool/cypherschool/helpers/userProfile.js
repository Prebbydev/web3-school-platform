import axios from "../axios/authAxios";

const getUserProfileWithToken = async (
    token
  ) => {
    try {
      const response = await axios().get("/user-profile");
      return response.data;
    } catch (err) {}
  };
  
  export default getUserProfileWithToken;
  