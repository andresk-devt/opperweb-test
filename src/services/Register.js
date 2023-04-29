import api from "./clients/axios";

const resource = "/register";

export default {
  async register(payload) {
    const response = await api.post(`${resource}`, payload);
    return response.data;
  }
}