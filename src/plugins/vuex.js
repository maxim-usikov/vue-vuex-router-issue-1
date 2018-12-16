import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

Vue.use(Vuex);

const appStore = new Vuex.Store({
  strict: !IS_PRODUCTION,

  state: {
    city: 'one',
  },

  mutations: {
    SET_CITY(state, city) {
      state.city = city;
    },
  },

  actions: {
    setCity({ commit }, city) {
      commit('SET_CITY', city);
    },
  },

  getters: {
    city: state => state.city,
  },

  plugins: !IS_PRODUCTION ? [createLogger()] : [],
});

export default appStore;
