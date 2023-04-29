import api from "./clients/axios";

const resource = "/login";

export default {
  async login(payload) {
    const response = await api.post(`${resource}`, payload);
    return response.data;
  }
}