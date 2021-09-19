import axios from 'axios'

const END_POINT = `${process.env.VUE_APP_API_URL}/products`

export default {
  getAll: async () => {
    const { data } = await axios.get(END_POINT)
    return data
  },
}
