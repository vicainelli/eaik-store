import axios from 'axios'
import { products } from '@/api'
const productsMock = {}

jest.mock('axios')

describe('Products API', () => {
  it('calls axios and return products', async () => {
    axios.get.mockResolvedValue({
      data: productsMock,
    })
    const result = await products.getAll()
    expect(result).toEqual(productsMock)
    expect(axios.get).toHaveBeenCalledTimes(1)
  })
})
