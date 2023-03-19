import axios from "axios";

const BASE_URL = "https://63e70c7bb85592e9c949972a.mockapi.io/API-GYM/";


const https = axios.create({
  baseURL: BASE_URL,

});

export default https;
