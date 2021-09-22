import axios from 'axios'
import axiosRetry from 'axios-retry'

axiosRetry(axios, { retries: 3 })

const END_POINT = `${process.env.VUE_APP_API_URL}/articles`

export default {
  getAll: async () => {
    const { data } = await axios.get(END_POINT)
    return data
  },
  getBulk: async (articles) => {
    const links = articles.map((article) => `${END_POINT}/${article.articleId}`)

    return axios.all(links.map((l) => axios.get(l))).then(axios.spread((...res) => res))
  },

  getById: async (id) => {
    const { data } = await axios.get(`${END_POINT}/${id}`)
    return data
  },
}
