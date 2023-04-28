import { createStore } from 'vuex'
import Login from './modules/Login'
import TimeZone from './modules/TimeZone'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login: Login,
    timezone: TimeZone
  }
})
