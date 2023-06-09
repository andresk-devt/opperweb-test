import { createStore } from 'vuex'
import TimeZone from './modules/TimeZone'
import Login from './modules/Login'
import Register from './modules/Register'
import Me from './modules/Me'
import Categories from './modules/Categories'

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
    timezone: TimeZone,
    register: Register,
    me: Me,
    categories: Categories
  }
})
