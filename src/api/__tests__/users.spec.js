import axios from 'axios'
import { users } from '@/api'
import * as usersMock from '../../../src/fixtures/users.json'

jest.mock('axios')

describe('User API', () => {
  it('calls axios and return users', async () => {
    axios.get.mockResolvedValue({
      data: usersMock,
    })
    const result = await users.getAll()
    expect(result).toEqual(usersMock)
    expect(axios.get).toHaveBeenCalledTimes(1)
  })
})
