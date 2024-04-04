import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:1337/api',
    timeout: 5000, 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
    }
  });

  export default axiosInstance;