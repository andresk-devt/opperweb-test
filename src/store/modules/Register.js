import RepositoryFactory from "@/services/RepositoryFactory"

const register = RepositoryFactory.service("register");

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
        return error;
      }
    }
  },
}
