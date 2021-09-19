import { screen, render } from '@testing-library/vue'
import { hashId } from '@/utils/generators'
import faker from 'faker'
import GenericButton from '..'

const buttonProps = {
  id: hashId(6),
  label: faker.lorem.words(),
}

describe('GenericButton.vue', () => {
  it('has button component', async () => {
    await render(GenericButton, {
      props: {
        ...buttonProps,
      },
    })

    const btn = screen.getByTestId(buttonProps.id)
    expect(btn.textContent).toEqual(buttonProps.label)
    expect(btn).toHaveClass('uppercase')
    expect(btn).toHaveClass('p-2')
    expect(btn).toHaveClass('bg-gray-300')
    expect(btn).toHaveClass('rounded')
    expect(btn).toHaveClass('tracking-wide')
  })
})
