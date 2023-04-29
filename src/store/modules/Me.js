import RepositoryFactory from "@/services/RepositoryFactory"
import { errorMessage } from '@/utils/SweetalertNotifications'
const me = RepositoryFactory.service("me");

export default {
  namespaced: true,
  state: {
    myInfo: null
  },
  getters: {
    getMyInfo(state) {
      return state.myInfo;
    }
  },
  mutations: {
    setMyInformation(state, payload) {
      state.myInfo = payload;
    }
  },
  actions: {
    async getMe({ commit }, payload) {
      try {
        const respnose = await me.getMeInfo(payload);
        commit("setMyInformation", respnose);
        return respnose;
      } catch (error) {
        errorMessage(error.response.data.message);
        return error;
      }
    }
  },
}
