import axios from "axios";

const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    'Accept': 'application/json'
    // 'Authorization': `Bearer ${localStorage.getItem('jwt')}`
  }
});

export {
  api as default
}