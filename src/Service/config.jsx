import axios from "axios";

const BASE_URL = "http://localhost:3002"; // clb

 const BASE_URL_PT = "http://localhost:8080"; // PT

 export const https = axios.create({
  baseURL: BASE_URL,
});

 export const https_pt = axios.create({
  baseURL_pt:BASE_URL_PT,
});

// export default https;
