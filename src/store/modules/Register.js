import RepositoryFactory from "@/services/RepositoryFactory"
const register = RepositoryFactory.service("register");
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
    async registerUser(_, payload) {
      try {
        const respnose = await register.register(payload);
        return respnose;
      } catch (error) {
        errorMessage(error.response.data.message);
        return error;
      }
    }
  },
}
