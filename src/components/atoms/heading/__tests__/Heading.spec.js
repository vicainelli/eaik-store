import { render } from '@testing-library/vue'
import Heading from '@/components/atoms/heading'

it('should be mounted', async () => {
  const { container } = await render(Heading, {
    slots: {
      default: 'Hello World',
    },
  })
  expect(container.querySelector('h1')).toBeInTheDocument()
})
