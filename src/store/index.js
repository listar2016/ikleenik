import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    init_flag: false
  },
  mutations: {
    set_status(state, status) {
			state.status = status
    },
    set_flag(state) {
      state.init_flag = true
    }
  },
  actions: {
    setStatus({commit}, status) {
			commit('set_status', status)
    },
    setFlag({commit}) {
      commit('set_flag')
    }
  },
  modules: {
  }
})
