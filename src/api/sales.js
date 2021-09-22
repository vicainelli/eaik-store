import axios from 'axios'
import axiosRetry from 'axios-retry'

axiosRetry(axios, { retries: 3 })

const END_POINT = `${process.env.VUE_APP_API_URL}/sales`

export default {
  getAll: async () => {
    const { data } = await axios.get(END_POINT)
    return data
  },

  getById: async (id) => {
    const { data } = await axios.get(`${END_POINT}/${id}`)
    return data
  },

  storeBulk: async (articles) => {
    const links = articles.map((article) => `${END_POINT}/${article.articleId}`)

    return axios.all(links.map((l) => axios.get(l))).then(axios.spread((...res) => res))
  },

  store: async (data) => {
    const { data: response } = await axios.post(END_POINT, data)
    return response
  },
}
