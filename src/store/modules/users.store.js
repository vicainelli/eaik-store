import { users } from '@/api'

const state = {
  isLoading: false,
  users: [],
}

const getters = {
  getUsers: (state) => state.users,
  getIsLoading: (state) => state.isLoading,
}

const actions = {
  fetchUsers: async ({ commit }) => {
    commit('SET_LOADING', true)

    return await users
      .getAll()
      .then((res) => {
        commit('SET_USERS', res.users ? res.users : res)
        commit('SET_LOADING', false)
      })
      .catch((error) => {
        commit('SET_LOADING', false)
        throw error
      })
  },
}

const mutations = {
  SET_USERS: (state, payload) => (state.users = payload),
  SET_LOADING: (state, payload) => (state.isLoading = payload),
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
