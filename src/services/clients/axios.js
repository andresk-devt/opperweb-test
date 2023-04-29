import axios from "axios";

const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    'Accept': 'application/json',
    // 'Authorization': `Bearer ${localStorage.getItem('access_token')}`
  }
});

export {
  api as default
}