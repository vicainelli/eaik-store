import { render } from '@testing-library/vue'
import Header from '../'

it('should render h1', async () => {
  const { getByText } = await render(Header, {
    // slots: {
    //   default: 'Hello World',
    // },
  })
  expect(getByText(/hello world/i)).toBeInTheDocument()
})
