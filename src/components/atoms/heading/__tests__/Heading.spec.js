import { render } from '@testing-library/vue'
import Heading from '@/components/atoms/heading'

it('should render h1', async () => {
  const { getByText } = await render(Heading, {
    slots: {
      default: 'Hello World',
    },
  })
  expect(getByText(/hello world/i)).toBeInTheDocument()
})
