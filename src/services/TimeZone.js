import api from "./clients/axios";

const resource = "/timezone";

export default {
  async getTimeZone() {
    const response = await api.get(`${resource}`);
    return response.data;
  }
}