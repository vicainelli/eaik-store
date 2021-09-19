import axios from 'axios'
import { products } from '@/api'
import * as productsMock from '../../../src/fixtures/products.json'

jest.mock('axios')

describe('User API', () => {
  it('calls axios and return products', async () => {
    axios.get.mockResolvedValue({
      data: productsMock,
    })
    const result = await products.getAll()
    expect(result).toEqual(productsMock)
    expect(axios.get).toHaveBeenCalledTimes(1)
  })
})
