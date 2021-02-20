import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: sessionStorage.getItem('token') || '',
    // token: '',
    user: {},
  },

  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success';
      state.token = token;
      state.user = user;
    },
    auth_error(state){
      state.status = 'error';
    },
    logout(state){
      state.status = '';
      state.token = ''
    },
  },

  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state
  },

  actions: {
    simplePost(){
      const data = {
        email: 'kukur@gmail.com',
        password: 'kukur',
      }
      let headers = {'Authorization' : 'Bearer ' + sessionStorage.getItem('token')}
      axios.post('http://express.percobaanekopi.xyz/user/login', data, {headers: headers})
      .then(response => {
        this.state.token = response.data.token
      })
    },

    async post(url, data){
      let headers = {
        'Authorization':'Bearer ' + sessionStorage.getItem('token')
      }
      await axios.post(url, data, {headers: headers})
      .then(resp => {
        this.state.token = resp.data.token
      }).catch(err => {
        console.log(err.resp)
      })
      
    },

    login({commit}, user){
      return Promise((resolve, reject) => {
        commit('auth_request')
        axios.post('http://express.percobaanekopi.xyz/user/login', user)
          .then(resp => {
            const token = resp.data.token;
            const user = resp.data.user;
            sessionStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = "Bearer " + token;
            commit('auth_success', token, user);
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error');
            sessionStorage.removeItem('token')
            reject(err)
          })
      })
    },
    register({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios.post('http://express.percobaanekopi.xyz/user', user)
          .then(resp => {
            const token = resp.data.token;
            const user = resp.data.user;
            sessionStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error', err);
            sessionStorage.removeItem('token')
            reject(err)
          })
      })
    },
    logout({commit}){
      return new Promise((resolve) => {
        commit('logout');
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  }
})
