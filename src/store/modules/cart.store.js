const state = {
  isLoading: false,
  cart: [],
}

const getters = {
  getCart: (state) => state.cart,
  getCartLength: (state) => state.cart.reduce((prev, curr) => prev + curr.quantity, 0),
  getIsLoading: (state) => state.isLoading,
}

const actions = {
  addToCart({ commit }, product) {
    commit('ADD_TO_CART', product)
  },
  removeFromCart({ commit }, product) {
    commit('REMOVE_FROM_CART', product)
  },
}

const mutations = {
  ADD_TO_CART: (state, payload) => {
    const product = state.cart.find((item) => item.id === payload.id)
    if (!product) state.cart.push({ ...payload, quantity: 1 })
    else product.quantity = product.quantity + 1
  },
  REMOVE_FROM_CART(state, payload) {
    const product = state.cart.find((item) => item.id === payload.id)
    const productIndex = state.cart.indexOf(product)
    payload.quantity >= product.quantity
      ? state.cart.splice(productIndex, 1)
      : (product.quantity = product.quantity - payload.quantity)
  },
  SET_LOADING: (state, payload) => (state.isLoading = payload),
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
