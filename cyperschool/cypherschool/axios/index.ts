import axios from "axios";
import dotenv from "dotenv"
import { BASE_URL } from "../helpers/constaant";


dotenv.config();

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
