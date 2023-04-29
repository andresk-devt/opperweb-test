import api from "./clients/axios";

const resource = "/v1/me";

export default {
  async getMeInfo(payload) {
    const response = await api.get(`${resource}`, {
      params: payload,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      },
    });
    return response.data;
  }
}