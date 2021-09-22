import { articles } from '@/api'

const state = {
  isLoading: false,
  articles: [],
}

const getters = {
  getArticles: (state) => state.articles,
  getIsLoading: (state) => state.isLoading,
}

const actions = {
  fetchArticles: async ({ commit }) => {
    commit('SET_LOADING', true)
    return await articles
      .getAll()
      .then((res) => {
        commit('SET_PRODUCTS', res.articles ? res.articles : res)
        commit('SET_LOADING', false)
      })
      .catch((error) => {
        commit('SET_LOADING', false)
        throw error
      })
  },
}

const mutations = {
  SET_ARTICLES: (state, payload) => (state.articles = payload),
  SET_LOADING: (state, payload) => (state.isLoading = payload),
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
