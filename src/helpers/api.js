import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://boltz-api-str.onrender.com/api',
    // baseURL: 'http://localhost:1337/api',
    timeout: 5000, 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.REACT_APP_TOKEN_PRODUCTION}`
    }
  });

  export default axiosInstance;