import RepositoryFactory from "@/services/RepositoryFactory"

const timezone = RepositoryFactory.service("timezone");

export default {
  namespaced: true,
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async getTimeZone() {
      try {
        const respnose = await timezone.getTimeZone();
        return respnose;
      } catch (error) {
        return error;
      }
    }
  },
}
