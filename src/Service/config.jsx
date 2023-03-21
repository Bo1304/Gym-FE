import axios from "axios";

const BASE_URL = "https://63e70c7bb85592e9c949972a.mockapi.io"; // clb

 const BASE_URL_PT = "http://localhost:8080"; // PT

 export const https = axios.create({
  baseURL: BASE_URL,
});

 export const https_pt = axios.create({
  baseURL_pt:BASE_URL_PT,
});

// export default https;
