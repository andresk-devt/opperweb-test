import RepositoryFactory from "@/services/RepositoryFactory"
const login = RepositoryFactory.service("login");
import { errorMessage } from '@/utils/SweetalertNotifications'

export default {
  namespaced: true,
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async login(_, payload) {
      try {
        const response = await login.login(payload);
        return response;
      } catch (error) {
        errorMessage(error.response.data.message);
        return error;
      }
    }
  },
}
