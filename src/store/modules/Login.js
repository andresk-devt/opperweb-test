import RepositoryFactory from "@/services/RepositoryFactory"

const login = RepositoryFactory.service("login");

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
        const respnose = await login.login(payload);
        return respnose;
      } catch (error) {
        return error;
      }
    }
  },
}
