import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

axios.defaults.baseURL = 'http://express.percobaanekopi.xyz';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    token: sessionStorage.getItem('token') || '',
    user: {},
    message: '',
  },

  mutations: {
    AUTH_REQUEST(state) {
      state.status = 'loading';
    },
    AUTH_SUCCESS(state, payload) {
      state.status = 'success';
      state.token = payload.token;
      state.user = payload.user;
      state.message = payload.message;
    },
    AUTH_ERROR(state, message) {
      state.status = 'error';
      state.message = message;
    },
    logout(state) {
      state.status = '';
      state.token = '';
    },
  },

  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state,
  },

  actions: {
    async post({ commit }, data) {
      commit('AUTH_REQUEST');
      let headers = { Authorization: 'Bearer ' + sessionStorage.getItem('token') };
      return await axios
        .post(data['url'], data['data'], { headers: headers })
        .then((resp) => {
          if (resp.data.success === true) {
            sessionStorage.setItem('token', resp.data.token);
            commit('AUTH_SUCCESS', resp.data);
            Promise.resolve(resp);
          } else {
            commit('AUTH_ERROR', resp.data.message);
            sessionStorage.removeItem('token');
            Promise.resolve(resp);
          }
        })
        .catch((err) => {
          commit('AUTH_ERROR', this.resp.data.message);
          sessionStorage.removeItem('token');
          Promise.reject(err);
        });
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit('logout');
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
        resolve();
      });
    },
  },
});
