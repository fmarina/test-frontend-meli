import { render, fireEvent } from '@testing-library/react'

import { Button } from 'features/common/components/Button'

describe('Button component', () => {
  const onClick = jest.fn()
  const ButtonComponent = <Button buttonText='Comprar' handleOnClick={() => undefined} />

  test('Render Button component', () => {
    const { container } = render(ButtonComponent)
    expect(container).toBeInTheDocument()
  })

  test('Button component have a text', () => {
    const { getByText } = render(ButtonComponent)
    getByText('Comprar')
  })

  test('Button when is clicked should call its onClick function', () => {
    const { getByRole } = render(ButtonComponent)
    const button = getByRole('button')
    button.onclick = onClick
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
