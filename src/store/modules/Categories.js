import RepositoryFactory from "@/services/RepositoryFactory";
const categories = RepositoryFactory.service("categories");
import { errorMessage } from "@/utils/SweetalertNotifications";

export default {
  namespaced: true,
  state: {
    categories: null,
  },
  getters: {
    getCategoriesList(state) {
      return state.categories;
    },
  },
  mutations: {
    setCategoriesList(state, payload) {
      state.categories = payload;
    },
  },
  actions: {
    async createCategorie(_, payload) {
      try {
        const response = await categories.createCategorie(payload);
        return response;
      } catch (error) {
        errorMessage(error.response.data.message);
        return error;
      }
    },
    async getCategoriesList({ commit }, payload) {
      try {
        const response = await categories.getCategoriesList(payload);
        commit("setCategoriesList", response.categorias);
        return response;
      } catch (error) {
        errorMessage(error.response.data.message);
        return error;
      }
    },
    async updateCategorie(_, payload) {
      console.log(payload, 'pe');
      try {
        const response = await categories.updateCategorie(payload);
        return response;
      } catch (error) {
        errorMessage(error.response.data.message);
        return error;
      }
    }
  },
};
