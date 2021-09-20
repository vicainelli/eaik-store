import { products } from '@/api'

const state = {
  isLoading: false,
  products: [],
}

const getters = {
  getProducts: (state) => state.products,
  getIsLoading: (state) => state.isLoading,
}

const actions = {
  fetchProducts: async ({ commit }) => {
    commit('SET_LOADING', true)
    return await products
      .getAll()
      .then((res) => {
        commit('SET_PRODUCTS', res.products ? res.products : res)
      })
      .catch((error) => {
        throw error
      })
      .finally(() => {
        commit('SET_LOADING', false)
      })
  },
}

const mutations = {
  SET_PRODUCTS: (state, payload) => (state.products = payload),
  SET_LOADING: (state, payload) => (state.isLoading = payload),
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
